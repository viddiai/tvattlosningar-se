/**
 * Lead Capture Modal Component
 * Reusable modal for collecting email addresses and contact information
 * Usage: Include this file and call showLeadCaptureModal(options)
 */

// Global styles for modal (inject once)
if (!document.getElementById('lead-capture-styles')) {
    const styles = document.createElement('style');
    styles.id = 'lead-capture-styles';
    styles.textContent = `
        .lead-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(26, 40, 51, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
            padding: 1rem;
        }

        .lead-modal-overlay.active {
            opacity: 1;
        }

        .lead-modal {
            background: white;
            border-radius: 8px;
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            transform: translateY(20px);
            transition: transform 0.3s ease;
        }

        .lead-modal-overlay.active .lead-modal {
            transform: translateY(0);
        }

        .lead-modal-header {
            background: linear-gradient(135deg, #005281 0%, #0078B4 100%);
            color: white;
            padding: 2rem;
            border-radius: 8px 8px 0 0;
            position: relative;
        }

        .lead-modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 1.5rem;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s ease;
        }

        .lead-modal-close:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        .lead-modal-icon {
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }

        .lead-modal-title {
            font-family: 'DM Serif Display', serif;
            font-size: 1.75rem;
            margin: 0 0 0.5rem 0;
        }

        .lead-modal-subtitle {
            opacity: 0.9;
            font-size: 1rem;
        }

        .lead-modal-body {
            padding: 2rem;
        }

        .lead-form-group {
            margin-bottom: 1.5rem;
        }

        .lead-form-label {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1A2833;
        }

        .lead-form-label .required {
            color: #C74E3C;
        }

        .lead-form-input {
            width: 100%;
            padding: 0.875rem;
            border: 2px solid #E0E4E8;
            border-radius: 4px;
            font-size: 1rem;
            font-family: 'Work Sans', sans-serif;
            transition: all 0.3s ease;
        }

        .lead-form-input:focus {
            outline: none;
            border-color: #0078B4;
            box-shadow: 0 0 0 3px rgba(0, 120, 180, 0.1);
        }

        .lead-form-input.error {
            border-color: #C74E3C;
        }

        .lead-form-error {
            color: #C74E3C;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: none;
        }

        .lead-form-error.active {
            display: block;
        }

        .lead-form-checkbox {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
        }

        .lead-form-checkbox input[type="checkbox"] {
            margin-top: 0.25rem;
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        .lead-form-checkbox label {
            font-size: 0.875rem;
            color: #4A5A66;
            cursor: pointer;
            flex: 1;
        }

        .lead-form-checkbox label a {
            color: #0078B4;
            text-decoration: underline;
        }

        .lead-form-submit {
            width: 100%;
            padding: 1rem 2rem;
            background: #005281;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1.125rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Work Sans', sans-serif;
        }

        .lead-form-submit:hover:not(:disabled) {
            background: #0078B4;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 120, 180, 0.3);
        }

        .lead-form-submit:disabled {
            background: #7A8A96;
            cursor: not-allowed;
            opacity: 0.6;
        }

        .lead-form-success {
            text-align: center;
            padding: 2rem;
        }

        .lead-success-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        .lead-success-title {
            font-family: 'DM Serif Display', serif;
            font-size: 1.75rem;
            color: #2D9B81;
            margin-bottom: 0.5rem;
        }

        .lead-success-message {
            color: #4A5A66;
            font-size: 1rem;
            margin-bottom: 1.5rem;
        }

        .lead-privacy-note {
            font-size: 0.75rem;
            color: #7A8A96;
            text-align: center;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #E0E4E8;
        }

        @media (max-width: 768px) {
            .lead-modal {
                max-width: 100%;
                margin: 0.5rem;
            }

            .lead-modal-header {
                padding: 1.5rem;
            }

            .lead-modal-body {
                padding: 1.5rem;
            }

            .lead-modal-title {
                font-size: 1.5rem;
            }
        }
    `;
    document.head.appendChild(styles);
}

// Lead Capture Modal Component
class LeadCaptureModal {
    constructor(options = {}) {
        this.options = {
            title: options.title || 'Ladda ner guiden',
            subtitle: options.subtitle || 'Fyll i dina uppgifter så skickar vi guiden direkt till din e-post',
            icon: options.icon || '📄',
            submitText: options.submitText || 'Skicka till mig',
            successTitle: options.successTitle || 'Tack!',
            successMessage: options.successMessage || 'Vi har skickat guiden till din e-post. Kolla även i skräpposten om du inte ser den inom några minuter.',
            requireCompany: options.requireCompany !== false,
            requirePhone: options.requirePhone || false,
            onSubmit: options.onSubmit || this.defaultSubmit.bind(this),
            downloadUrl: options.downloadUrl || null,
            ...options
        };

        this.overlay = null;
        this.modal = null;
        this.form = null;
    }

    create() {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'lead-modal-overlay';
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });

        // Create modal
        this.modal = document.createElement('div');
        this.modal.className = 'lead-modal';

        // Modal header
        const header = document.createElement('div');
        header.className = 'lead-modal-header';
        header.innerHTML = `
            <button class="lead-modal-close" type="button" aria-label="Stäng">×</button>
            <div class="lead-modal-icon">${this.options.icon}</div>
            <h2 class="lead-modal-title">${this.options.title}</h2>
            <p class="lead-modal-subtitle">${this.options.subtitle}</p>
        `;

        // Close button handler
        header.querySelector('.lead-modal-close').addEventListener('click', () => this.close());

        // Modal body with form
        const body = document.createElement('div');
        body.className = 'lead-modal-body';
        body.innerHTML = `
            <form class="lead-form" id="leadCaptureForm">
                <div class="lead-form-group">
                    <label class="lead-form-label" for="leadName">
                        Namn <span class="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="leadName"
                        name="name"
                        class="lead-form-input"
                        required
                        placeholder="För- och efternamn"
                    >
                    <div class="lead-form-error">Vänligen ange ditt namn</div>
                </div>

                <div class="lead-form-group">
                    <label class="lead-form-label" for="leadEmail">
                        E-post <span class="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="leadEmail"
                        name="email"
                        class="lead-form-input"
                        required
                        placeholder="namn@företag.se"
                    >
                    <div class="lead-form-error">Vänligen ange en giltig e-postadress</div>
                </div>

                ${this.options.requireCompany ? `
                <div class="lead-form-group">
                    <label class="lead-form-label" for="leadCompany">
                        Företag/Organisation <span class="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="leadCompany"
                        name="company"
                        class="lead-form-input"
                        required
                        placeholder="Namn på er verksamhet"
                    >
                    <div class="lead-form-error">Vänligen ange företag/organisation</div>
                </div>
                ` : ''}

                ${this.options.requirePhone ? `
                <div class="lead-form-group">
                    <label class="lead-form-label" for="leadPhone">
                        Telefon <span class="required">*</span>
                    </label>
                    <input
                        type="tel"
                        id="leadPhone"
                        name="phone"
                        class="lead-form-input"
                        required
                        placeholder="070-123 45 67"
                    >
                    <div class="lead-form-error">Vänligen ange telefonnummer</div>
                </div>
                ` : ''}

                <div class="lead-form-group">
                    <div class="lead-form-checkbox">
                        <input
                            type="checkbox"
                            id="leadConsent"
                            name="consent"
                            required
                        >
                        <label for="leadConsent">
                            Jag godkänner att mina uppgifter används enligt
                            <a href="#" target="_blank">integritetspolicyn</a> och
                            samtycker till att bli kontaktad via e-post. <span class="required">*</span>
                        </label>
                    </div>
                    <div class="lead-form-error">Du måste godkänna villkoren</div>
                </div>

                <button type="submit" class="lead-form-submit">
                    ${this.options.submitText}
                </button>

                <div class="lead-privacy-note">
                    🔒 Vi delar aldrig dina uppgifter med tredje part.
                    Du kan avsluta prenumerationen när som helst.
                </div>
            </form>
        `;

        this.form = body.querySelector('#leadCaptureForm');
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Append to modal
        this.modal.appendChild(header);
        this.modal.appendChild(body);
        this.overlay.appendChild(this.modal);

        return this.overlay;
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Clear previous errors
        this.clearErrors();

        // Get form data
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            phone: formData.get('phone'),
            consent: formData.get('consent') === 'on',
            source: this.options.source || 'landing-page',
            downloadType: this.options.downloadType || 'guide',
            timestamp: new Date().toISOString()
        };

        // Validate
        if (!this.validate(data)) {
            return;
        }

        // Disable submit button
        const submitBtn = this.form.querySelector('.lead-form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Skickar...';

        try {
            // Call submit handler
            await this.options.onSubmit(data);

            // Show success
            this.showSuccess();

            // Optional: Auto-download
            if (this.options.downloadUrl) {
                setTimeout(() => {
                    window.open(this.options.downloadUrl, '_blank');
                }, 500);
            }

            // Track conversion
            if (typeof gtag !== 'undefined') {
                gtag('event', 'generate_lead', {
                    event_category: 'Lead Capture',
                    event_label: this.options.downloadType || 'guide'
                });
            }
        } catch (error) {
            console.error('Lead capture error:', error);
            alert('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    validate(data) {
        let isValid = true;

        // Name validation
        if (!data.name || data.name.trim().length < 2) {
            this.showError('leadName');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            this.showError('leadEmail');
            isValid = false;
        }

        // Company validation (if required)
        if (this.options.requireCompany && (!data.company || data.company.trim().length < 2)) {
            this.showError('leadCompany');
            isValid = false;
        }

        // Phone validation (if required)
        if (this.options.requirePhone && (!data.phone || data.phone.trim().length < 6)) {
            this.showError('leadPhone');
            isValid = false;
        }

        // Consent validation
        if (!data.consent) {
            this.showError('leadConsent');
            isValid = false;
        }

        return isValid;
    }

    showError(fieldId) {
        const input = document.getElementById(fieldId);
        const errorDiv = input.parentElement.querySelector('.lead-form-error');
        input.classList.add('error');
        errorDiv.classList.add('active');
    }

    clearErrors() {
        this.form.querySelectorAll('.lead-form-input').forEach(input => {
            input.classList.remove('error');
        });
        this.form.querySelectorAll('.lead-form-error').forEach(error => {
            error.classList.remove('active');
        });
    }

    showSuccess() {
        const body = this.modal.querySelector('.lead-modal-body');
        body.innerHTML = `
            <div class="lead-form-success">
                <div class="lead-success-icon">✅</div>
                <h3 class="lead-success-title">${this.options.successTitle}</h3>
                <p class="lead-success-message">${this.options.successMessage}</p>
                <button class="lead-form-submit" onclick="this.closest('.lead-modal-overlay').remove()">
                    Stäng
                </button>
            </div>
        `;

        // Auto-close after 5 seconds
        setTimeout(() => {
            this.close();
        }, 5000);
    }

    async defaultSubmit(data) {
        // Default implementation: Save to localStorage and log
        console.log('Lead captured:', data);

        // Store in localStorage as backup
        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        leads.push(data);
        localStorage.setItem('leads', JSON.stringify(leads));

        // In production, this would send to your backend/CRM
        // Example:
        // const response = await fetch('/api/leads', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        // if (!response.ok) throw new Error('Failed to submit');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    show() {
        const element = this.create();
        document.body.appendChild(element);

        // Trigger animation
        setTimeout(() => {
            this.overlay.classList.add('active');
        }, 10);

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Focus first input
        setTimeout(() => {
            document.getElementById('leadName')?.focus();
        }, 300);
    }

    close() {
        this.overlay.classList.remove('active');

        setTimeout(() => {
            this.overlay.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Global function to show modal
function showLeadCaptureModal(options = {}) {
    const modal = new LeadCaptureModal(options);
    modal.show();
    return modal;
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LeadCaptureModal, showLeadCaptureModal };
}
