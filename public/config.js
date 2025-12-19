/**
 * Configuration file for tvättlösningar.se
 * Automatically detects environment and uses appropriate settings
 */

const CONFIG = {
    // Environment detection
    environment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'development'
        : 'production',

    // API URLs
    api: {
        development: 'http://localhost:3000',
        production: 'https://api.tvattlosningar.se'
    },

    // Google Analytics
    analytics: {
        development: null, // No tracking in dev
        production: 'G-XXXXXXXXXX' // Replace with your GA4 Measurement ID
    },

    // Feature flags
    features: {
        enableAnalytics: true,
        enableLeadCapture: true,
        enablePDFExport: true,
        enableEmailNotifications: true,
        debugMode: false // Set to true for verbose logging
    },

    // Email settings (for display purposes)
    contact: {
        email: 'expert@tvattlosningar.se',
        phone: '08-123 456 78',
        supportEmail: 'support@tvattlosningar.se'
    },

    // PDF/Download URLs
    downloads: {
        guide: '/downloads/vard-hygien-guide.pdf',
        brochure: '/downloads/brochure.pdf'
    },

    // Rate limiting (client-side protection)
    rateLimits: {
        leadSubmission: 3, // Max 3 lead submissions per hour
        toolUsage: 50 // Max 50 tool calculations per hour
    },

    // Cache settings
    cache: {
        enableLocalStorage: true,
        ttl: 24 * 60 * 60 * 1000 // 24 hours
    }
};

// Get current API URL based on environment
CONFIG.getApiUrl = function() {
    return this.api[this.environment];
};

// Get Analytics ID based on environment
CONFIG.getAnalyticsId = function() {
    return this.analytics[this.environment];
};

// Check if feature is enabled
CONFIG.isFeatureEnabled = function(featureName) {
    return this.features[featureName] === true;
};

// Log configuration (only in debug mode)
if (CONFIG.features.debugMode) {
    console.log('=== Configuration ===');
    console.log('Environment:', CONFIG.environment);
    console.log('API URL:', CONFIG.getApiUrl());
    console.log('Analytics:', CONFIG.getAnalyticsId());
    console.log('Features:', CONFIG.features);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Make available globally
window.TVATT_CONFIG = CONFIG;
