/**
 * Simple Backend Server for Lead Capture
 * Handles form submissions and stores them in SQLite database
 *
 * Installation:
 * npm install express cors sqlite3 nodemailer dotenv
 *
 * Usage:
 * node server.js
 */

const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('../')); // Serve static files

// Database setup
const db = new sqlite3.Database('./leads.db', (err) => {
    if (err) {
        console.error('Database error:', err);
    } else {
        console.log('Connected to SQLite database');
        initDatabase();
    }
});

// Initialize database tables
function initDatabase() {
    db.run(`
        CREATE TABLE IF NOT EXISTS leads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            company TEXT,
            phone TEXT,
            source TEXT,
            download_type TEXT,
            consent BOOLEAN,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            ip_address TEXT,
            user_agent TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS tool_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lead_id INTEGER,
            tool_type TEXT NOT NULL,
            result_data TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (lead_id) REFERENCES leads(id)
        )
    `);

    console.log('Database tables initialized');
}

// Email configuration
const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// API Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Submit lead
app.post('/api/leads', async (req, res) => {
    try {
        const {
            name,
            email,
            company,
            phone,
            source,
            downloadType,
            consent
        } = req.body;

        // Validation
        if (!name || !email || !consent) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Invalid email format'
            });
        }

        // Get client info
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const userAgent = req.headers['user-agent'];

        // Insert into database
        const query = `
            INSERT INTO leads (name, email, company, phone, source, download_type, consent, ip_address, user_agent)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.run(query, [name, email, company, phone, source, downloadType, consent ? 1 : 0, ipAddress, userAgent], function(err) {
            if (err) {
                console.error('Database insert error:', err);
                return res.status(500).json({ error: 'Database error' });
            }

            const leadId = this.lastID;

            // Send confirmation email
            sendConfirmationEmail(email, name, downloadType)
                .catch(err => console.error('Email error:', err));

            // Send notification to admin
            sendAdminNotification({ id: leadId, name, email, company, phone, source, downloadType })
                .catch(err => console.error('Admin notification error:', err));

            res.status(201).json({
                success: true,
                leadId: leadId,
                message: 'Lead captured successfully'
            });
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Contact form submission
app.post('/api/contact', (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            company,
            subject,
            message,
            consent
        } = req.body;

        // Validation
        if (!name || !email || !company || !subject || !message || !consent) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Invalid email format'
            });
        }

        // Get client info
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const userAgent = req.headers['user-agent'];

        // Insert into database (using leads table with source='contact_form')
        const query = `
            INSERT INTO leads (name, email, company, phone, source, download_type, consent, ip_address, user_agent)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const downloadType = `Contact: ${subject} - ${message.substring(0, 100)}`;

        db.run(query, [name, email, company, phone, 'contact_form', downloadType, consent ? 1 : 0, ipAddress, userAgent], function(err) {
            if (err) {
                console.error('Database insert error:', err);
                return res.status(500).json({ error: 'Database error' });
            }

            const leadId = this.lastID;

            // Send email to user
            const userEmailOptions = {
                from: process.env.SMTP_FROM || 'noreply@tvattlosningar.se',
                to: email,
                subject: 'Vi har tagit emot ditt meddelande - tvättlösningar.se',
                html: `
                    <h2>Tack för att du kontaktade oss, ${name}!</h2>
                    <p>Vi har tagit emot ditt meddelande och återkommer inom 24 timmar.</p>
                    <h3>Ditt meddelande:</h3>
                    <p><strong>Ämne:</strong> ${subject}</p>
                    <p><strong>Meddelande:</strong><br>${message}</p>
                    <hr>
                    <p style="color: #7A8A96; font-size: 0.9em;">
                        Med vänliga hälsningar,<br>
                        KEN Tvättlösningar<br>
                        <a href="https://tvattlosningar.se">tvättlösningar.se</a>
                    </p>
                `
            };

            transporter.sendMail(userEmailOptions)
                .catch(err => console.error('Email error:', err));

            // Send notification to admin
            const adminEmailOptions = {
                from: process.env.SMTP_FROM || 'noreply@tvattlosningar.se',
                to: process.env.ADMIN_EMAIL,
                subject: `Nytt kontaktformulär: ${subject}`,
                html: `
                    <h2>Nytt meddelande från kontaktformuläret</h2>
                    <p><strong>Lead ID:</strong> ${leadId}</p>
                    <p><strong>Namn:</strong> ${name}</p>
                    <p><strong>E-post:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Telefon:</strong> ${phone || 'Ej angivet'}</p>
                    <p><strong>Företag:</strong> ${company}</p>
                    <p><strong>Ämne:</strong> ${subject}</p>
                    <h3>Meddelande:</h3>
                    <p>${message}</p>
                    <hr>
                    <p><strong>IP:</strong> ${ipAddress}</p>
                    <p><strong>Tidpunkt:</strong> ${new Date().toLocaleString('sv-SE')}</p>
                `
            };

            transporter.sendMail(adminEmailOptions)
                .catch(err => console.error('Admin notification error:', err));

            res.status(201).json({
                success: true,
                leadId: leadId,
                message: 'Contact form submitted successfully'
            });
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Save tool result
app.post('/api/tool-results', (req, res) => {
    try {
        const {
            leadId,
            toolType,
            resultData
        } = req.body;

        const query = `
            INSERT INTO tool_results (lead_id, tool_type, result_data)
            VALUES (?, ?, ?)
        `;

        db.run(query, [leadId, toolType, JSON.stringify(resultData)], function(err) {
            if (err) {
                console.error('Database insert error:', err);
                return res.status(500).json({ error: 'Database error' });
            }

            res.status(201).json({
                success: true,
                resultId: this.lastID
            });
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all leads (admin endpoint - should be protected in production)
app.get('/api/admin/leads', (req, res) => {
    // TODO: Add authentication middleware

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const offset = (page - 1) * limit;

    db.all(
        'SELECT * FROM leads ORDER BY created_at DESC LIMIT ? OFFSET ?',
        [limit, offset],
        (err, rows) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Database error' });
            }

            db.get('SELECT COUNT(*) as total FROM leads', (err, count) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ error: 'Database error' });
                }

                res.json({
                    leads: rows,
                    pagination: {
                        page,
                        limit,
                        total: count.total,
                        pages: Math.ceil(count.total / limit)
                    }
                });
            });
        }
    );
});

// Export leads to CSV (admin endpoint)
app.get('/api/admin/leads/export', (req, res) => {
    // TODO: Add authentication middleware

    db.all('SELECT * FROM leads ORDER BY created_at DESC', (err, rows) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        // Convert to CSV
        const csv = convertToCSV(rows);

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
        res.send(csv);
    });
});

// Helper Functions

async function sendConfirmationEmail(email, name, downloadType) {
    let subject = 'Tack för ditt intresse!';
    let htmlContent = '';

    if (downloadType === 'vard-hygien-guide') {
        subject = 'Din guide till tvättlösningar inom vården';
        htmlContent = `
            <h2>Hej ${name}!</h2>
            <p>Tack för ditt intresse för vår guide om tvättlösningar inom vården.</p>
            <p>Du hittar guiden bifogad i detta mejl (PDF, 15 sidor).</p>

            <h3>Nästa steg:</h3>
            <ul>
                <li><a href="https://tvattlosningar.se/volymberaknare.html">Beräkna er kapacitet</a> - Ta reda på hur många maskiner ni behöver</li>
                <li><a href="https://tvattlosningar.se/lcc-kalkylator.html">Jämför LCC-kostnad</a> - Se den verkliga kostnaden över tid</li>
                <li><a href="https://tvattlosningar.se/beredskapsquiz.html">Testa er beredskap</a> - Är ni redo för upphandling?</li>
            </ul>

            <p>Har du frågor? Svara på detta mejl eller ring oss på <strong>08-123 456 78</strong></p>

            <p>Med vänliga hälsningar,<br>
            KEN Tvättlösningar<br>
            expert@tvattlosningar.se</p>
        `;
    } else if (downloadType === 'consultation-booking') {
        subject = 'Bokningsförfrågan mottagen - Vi hör av oss inom 24 timmar';
        htmlContent = `
            <h2>Hej ${name}!</h2>
            <p>Tack för din bokningsförfrågan!</p>
            <p>Vi kontaktar dig inom <strong>24 timmar</strong> för att boka en tid som passar dig.</p>

            <h3>Vad händer nu?</h3>
            <ol>
                <li>En av våra vårdexperter granskar din förfrågan</li>
                <li>Vi ringer eller mejlar dig för att boka ett 30-minuters samtal</li>
                <li>Under samtalet går vi igenom era behov och ger konkreta rekommendationer</li>
            </ol>

            <p><strong>Förbered gärna följande information:</strong></p>
            <ul>
                <li>Antal platser/vårdplatser</li>
                <li>Befintlig tvättlösning (om ni har någon)</li>
                <li>Ungefärlig budget</li>
                <li>Tidsplan för projektet</li>
            </ul>

            <p>Med vänliga hälsningar,<br>
            KEN Tvättlösningar<br>
            expert@tvattlosningar.se | 08-123 456 78</p>
        `;
    }

    const mailOptions = {
        from: `"KEN Tvättlösningar" <${process.env.SMTP_USER}>`,
        to: email,
        subject: subject,
        html: htmlContent
    };

    // TODO: Attach PDF guide if downloadType is guide
    // mailOptions.attachments = [{ filename: 'vard-hygien-guide.pdf', path: './guides/vard-hygien-guide.pdf' }];

    return transporter.sendMail(mailOptions);
}

async function sendAdminNotification(lead) {
    const mailOptions = {
        from: `"KEN Lead System" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL || 'admin@tvattlosningar.se',
        subject: `🎯 Nytt lead: ${lead.downloadType}`,
        html: `
            <h2>Nytt lead registrerat!</h2>
            <table style="border-collapse: collapse; width: 100%;">
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>ID:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lead.id}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Namn:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lead.name}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>E-post:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lead.email}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Företag:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lead.company || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Telefon:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lead.phone || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Typ:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lead.downloadType}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Källa:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lead.source}</td></tr>
            </table>

            ${lead.downloadType === 'consultation-booking' ? '<p><strong>⚠️ Bokning behöver bekräftas inom 24 timmar!</strong></p>' : ''}
        `
    };

    return transporter.sendMail(mailOptions);
}

function convertToCSV(data) {
    if (data.length === 0) return '';

    const headers = Object.keys(data[0]);
    const csvRows = [];

    // Add headers
    csvRows.push(headers.join(','));

    // Add data
    for (const row of data) {
        const values = headers.map(header => {
            const value = row[header];
            return `"${String(value).replace(/"/g, '""')}"`;
        });
        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoints:`);
    console.log(`  - POST /api/leads`);
    console.log(`  - POST /api/tool-results`);
    console.log(`  - GET  /api/admin/leads`);
    console.log(`  - GET  /api/admin/leads/export`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down gracefully...');
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err);
        } else {
            console.log('Database closed');
        }
        process.exit(0);
    });
});
