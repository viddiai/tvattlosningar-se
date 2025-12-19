# Deployment Guide - tvättlösningar.se

Komplett guide för att sätta projektet i produktion.

## 📋 Innehållsförteckning

1. [Förberedelser](#förberedelser)
2. [Backend Deployment](#backend-deployment)
3. [Frontend Deployment](#frontend-deployment)
4. [Konfiguration](#konfiguration)
5. [Testing](#testing)
6. [Övervakning](#övervakning)
7. [Underhåll](#underhåll)

---

## Förberedelser

### Vad du behöver:

- [ ] Webbhotell eller VPS (t.ex. DigitalOcean, AWS, Netlify, Vercel)
- [ ] Domännamn (tvattlosningar.se)
- [ ] SSL-certifikat (Let's Encrypt - gratis)
- [ ] E-postkonto för SMTP (Gmail, SendGrid, etc.)
- [ ] Google Analytics 4 konto
- [ ] Node.js 18+ (för backend)

### Checklista innan deployment:

- [ ] Testa alla verktyg lokalt
- [ ] Validera alla formulär
- [ ] Kontrollera responsiv design på mobil/tablet/desktop
- [ ] Kör igenom alla lead capture-flöden
- [ ] Verifiera PDF-generering
- [ ] Testa backend API:er

---

## Backend Deployment

### Alternativ 1: VPS (DigitalOcean, Linode, AWS EC2)

#### 1. Förbered servern:

```bash
# SSH till din server
ssh root@your-server-ip

# Uppdatera system
apt update && apt upgrade -y

# Installera Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Installera PM2 (process manager)
npm install -g pm2

# Installera Nginx (reverse proxy)
apt install -y nginx

# Installera Certbot (SSL)
apt install -y certbot python3-certbot-nginx
```

#### 2. Ladda upp backend-kod:

```bash
# Skapa projektmapp
mkdir -p /var/www/tvattlosningar-backend
cd /var/www/tvattlosningar-backend

# Kopiera filer (från din lokala dator)
# scp -r backend/* root@your-server-ip:/var/www/tvattlosningar-backend/

# Eller klona från Git
# git clone https://github.com/your-repo/tvattlosningar-backend.git .

# Installera dependencies
npm install --production

# Kopiera och konfigurera .env
cp .env.example .env
nano .env  # Redigera med dina uppgifter
```

#### 3. Starta backend med PM2:

```bash
# Starta server
pm2 start server.js --name tvattlosningar-api

# Spara PM2 konfiguration
pm2 save

# Auto-start vid server reboot
pm2 startup
# Kör kommandot som PM2 visar

# Verifiera status
pm2 status
pm2 logs tvattlosningar-api
```

#### 4. Konfigurera Nginx som reverse proxy:

```bash
# Skapa Nginx config
nano /etc/nginx/sites-available/api.tvattlosningar.se
```

Lägg till:

```nginx
server {
    listen 80;
    server_name api.tvattlosningar.se;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

```bash
# Aktivera site
ln -s /etc/nginx/sites-available/api.tvattlosningar.se /etc/nginx/sites-enabled/

# Testa konfiguration
nginx -t

# Restart Nginx
systemctl restart nginx
```

#### 5. Installera SSL-certifikat:

```bash
certbot --nginx -d api.tvattlosningar.se
```

#### 6. Verifiera:

```bash
curl https://api.tvattlosningar.se/api/health
# Förväntat svar: {"status":"ok","timestamp":"..."}
```

### Alternativ 2: Serverless (Vercel, Netlify Functions)

Backend kan också deployas som serverless functions. Se `backend/serverless.md` för instruktioner.

---

## Frontend Deployment

### Alternativ 1: Statisk hosting (Netlify, Vercel, GitHub Pages)

#### Netlify (Rekommenderat):

1. **Skapa konto på Netlify.com**

2. **Deploy från Git:**
   ```bash
   # Skapa Git repo
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/tvattlosningar.git
   git push -u origin main
   ```

3. **Konfigurera Netlify:**
   - New site from Git
   - Välj ditt repo
   - Build settings:
     - Build command: (lämna tom för statisk site)
     - Publish directory: `/`
   - Deploy site

4. **Lägg till custom domain:**
   - Site settings → Domain management
   - Add custom domain: `tvattlosningar.se`
   - Följ DNS-instruktioner

5. **Aktivera HTTPS:**
   - Netlify aktiverar automatiskt Let's Encrypt SSL

#### GitHub Pages:

```bash
# I ditt repo
# Settings → Pages → Source: main branch, / (root)
# Din site blir tillgänglig på: https://username.github.io/tvattlosningar
```

### Alternativ 2: Egen webbserver (Nginx)

```bash
# Ladda upp filer
scp -r *.html *.js root@your-server-ip:/var/www/tvattlosningar.se/

# Nginx config
nano /etc/nginx/sites-available/tvattlosningar.se
```

```nginx
server {
    listen 80;
    server_name tvattlosningar.se www.tvattlosningar.se;
    root /var/www/tvattlosningar.se;
    index vard-hygien-landing.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Caching för statiska filer
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

```bash
# Aktivera och starta
ln -s /etc/nginx/sites-available/tvattlosningar.se /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# SSL
certbot --nginx -d tvattlosningar.se -d www.tvattlosningar.se
```

---

## Konfiguration

### 1. Uppdatera API-URL:er

I alla frontend-filer, ändra från `localhost:3000` till din produktion-URL:

**vard-hygien-landing.html:**
```javascript
// Före:
await fetch('http://localhost:3000/api/leads', {

// Efter:
await fetch('https://api.tvattlosningar.se/api/leads', {
```

### 2. Google Analytics

**analytics.js:**
```javascript
// Rad 11: Ersätt med ditt riktiga Measurement ID
const GA_MEASUREMENT_ID = 'G-ABC123XYZ'; // Ditt GA4 ID
```

### 3. SMTP-konfiguration

**backend/.env:**
```env
# Gmail exempel:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@tvattlosningar.se
SMTP_PASS=your-app-specific-password

# SendGrid exempel (bättre för produktion):
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.your-sendgrid-api-key

ADMIN_EMAIL=admin@tvattlosningar.se
```

### 4. Säkerhet

**Lägg till rate limiting:**

```bash
cd /var/www/tvattlosningar-backend
npm install express-rate-limit
```

**backend/server.js:**
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minuter
    max: 100 // Max 100 requests per IP
});

app.use('/api/', limiter);
```

**Lägg till Helmet för HTTP headers:**

```bash
npm install helmet
```

```javascript
const helmet = require('helmet');
app.use(helmet());
```

---

## Testing

### 1. Frontend testing:

```bash
# Testa alla länkar
curl -I https://tvattlosningar.se/vard-hygien-landing.html
curl -I https://tvattlosningar.se/lcc-kalkylator.html
curl -I https://tvattlosningar.se/volymberaknare.html
curl -I https://tvattlosningar.se/beredskapsquiz.html
```

### 2. Backend testing:

```bash
# Health check
curl https://api.tvattlosningar.se/api/health

# Test lead submission
curl -X POST https://api.tvattlosningar.se/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test AB",
    "consent": true,
    "source": "test",
    "downloadType": "test"
  }'
```

### 3. Load testing:

```bash
# Installera Apache Bench
apt install apache2-utils

# Test 1000 requests, 10 concurrent
ab -n 1000 -c 10 https://api.tvattlosningar.se/api/health
```

### 4. Browser testing:

- [ ] Chrome (Desktop & Mobile)
- [ ] Firefox
- [ ] Safari (Desktop & Mobile)
- [ ] Edge

### 5. Funktionalitetstester:

- [ ] Fyll i och skicka guide-formulär
- [ ] Boka konsultation
- [ ] Använd LCC-kalkylator och exportera PDF
- [ ] Använd volymberäknare
- [ ] Gör quiz och exportera resultat
- [ ] Verifiera att e-post kommer fram (både till användare och admin)

---

## Övervakning

### 1. Server monitoring (Uptime)

**UptimeRobot (Gratis):**
1. Gå till uptimerobot.com
2. Skapa konto
3. Add New Monitor:
   - Type: HTTP(s)
   - URL: https://api.tvattlosningar.se/api/health
   - Interval: 5 minutes
   - Alert contacts: din e-post

### 2. Error tracking

**Sentry (Gratis tier):**

```bash
npm install @sentry/node
```

**backend/server.js:**
```javascript
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'https://your-sentry-dsn',
  environment: 'production'
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
```

### 3. Analytics

Övervaka i Google Analytics 4:
- Besökare per dag
- Conversion rate (lead captures)
- Verktygsanvändning
- Bounce rate

### 4. Backup

**Automatisk databas-backup:**

```bash
# Skapa backup-script
nano /root/backup-db.sh
```

```bash
#!/bin/bash
DATE=$(date +%Y-%m-%d-%H%M)
BACKUP_DIR="/root/backups"
DB_FILE="/var/www/tvattlosningar-backend/leads.db"

mkdir -p $BACKUP_DIR
cp $DB_FILE "$BACKUP_DIR/leads-$DATE.db"

# Behåll endast 30 dagar
find $BACKUP_DIR -name "leads-*.db" -mtime +30 -delete
```

```bash
chmod +x /root/backup-db.sh

# Lägg till i crontab (varje dag kl 02:00)
crontab -e
# Lägg till: 0 2 * * * /root/backup-db.sh
```

---

## Underhåll

### Regelbundna uppgifter:

**Dagligen:**
- [ ] Kontrollera att site är uppe
- [ ] Kolla admin-panel för nya leads

**Veckovis:**
- [ ] Granska analytics
- [ ] Exportera leads till CRM
- [ ] Kontrollera e-postleverans

**Månadsvis:**
- [ ] Uppdatera Node.js dependencies: `npm update`
- [ ] Granska server-logs: `pm2 logs`
- [ ] Kontrollera diskutrymme: `df -h`
- [ ] Verifiera backups

**Kvartalsvis:**
- [ ] Uppdatera Node.js version
- [ ] Granska och optimera databas
- [ ] Säkerhetsaudit av backend
- [ ] Uppdatera SSL-certifikat (auto med Let's Encrypt)

---

## Checklista: Go-Live

### Pre-Launch:
- [ ] Alla tester är gröna
- [ ] Backend körs stabilt i 48h
- [ ] E-post fungerar (test till dig själv)
- [ ] Analytics är konfigurerat
- [ ] SSL-certifikat installerat
- [ ] DNS konfigurerad korrekt
- [ ] Backup-system aktiverat
- [ ] Monitoring aktiverat

### Launch Day:
- [ ] Deploya frontend
- [ ] Verifiera alla sidor
- [ ] Testa lead capture live
- [ ] Skicka test-lead och verifiera e-post
- [ ] Kontrollera analytics tracking
- [ ] Informera teamet om att site är live

### Post-Launch (första veckan):
- [ ] Daglig övervakning av errors
- [ ] Svara på alla leads inom 24h
- [ ] Granska analytics dagligen
- [ ] Samla feedback från användare

---

## Felsökning

### Backend startar inte:

```bash
pm2 logs tvattlosningar-api
# Vanliga problem:
# - Port 3000 redan används
# - .env-filen saknas
# - Node.js version för gammal
```

### E-post skickas inte:

```bash
# Testa SMTP direkt
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});
transporter.sendMail({
  from: 'your-email@gmail.com',
  to: 'test@example.com',
  subject: 'Test',
  text: 'Test email'
}).then(() => console.log('Sent!')).catch(console.error);
"
```

### Frontend visar fel data:

- Hårduppdatera browsern (Ctrl+Shift+R)
- Rensa browser cache
- Kontrollera att rätt API-URL används

---

## Support

Vid frågor eller problem:
- E-post: tech@tvattlosningar.se
- Dokumentation: Se README-filer i varje mapp
- Loggar: `pm2 logs` (backend), Browser Console (frontend)

**Lycka till med lanseringen! 🚀**
