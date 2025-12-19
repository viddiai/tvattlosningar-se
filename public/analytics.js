/**
 * Google Analytics 4 Integration
 * Tracking for tvättlösningar.se
 *
 * Events tracked:
 * - Page views
 * - Tool usage (calculator, quiz, volume calculator)
 * - Lead captures
 * - Form interactions
 * - Link clicks
 */

// Configuration
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

// Initialize Google Analytics
function initGoogleAnalytics() {
    // Load gtag.js script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        'send_page_view': true,
        'cookie_flags': 'SameSite=None;Secure'
    });

    console.log('Google Analytics initialized');
}

// Track page view (automatic with config, but can be called manually for SPA)
function trackPageView(pagePath, pageTitle) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'page_view', {
        page_path: pagePath || window.location.pathname,
        page_title: pageTitle || document.title,
        page_location: window.location.href
    });
}

// Track tool usage
function trackToolStart(toolName, toolType) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'tool_start', {
        event_category: 'Tools',
        event_label: toolName,
        tool_type: toolType,
        timestamp: new Date().toISOString()
    });
}

function trackToolComplete(toolName, resultData) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'tool_complete', {
        event_category: 'Tools',
        event_label: toolName,
        value: resultData.value || 0,
        ...resultData
    });
}

// Track calculator results
function trackCalculatorResult(calculatorType, result) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'calculator_result', {
        event_category: 'Calculator',
        event_label: calculatorType,
        ...result
    });

    // Also track as conversion if it's a significant result
    if (calculatorType === 'lcc' && result.totalLCC) {
        gtag('event', 'conversion', {
            event_category: 'Lead Quality',
            event_label: 'LCC Calculation Completed',
            value: 1
        });
    }
}

// Track quiz results
function trackQuizResult(score, readinessLevel) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'quiz_complete', {
        event_category: 'Quiz',
        event_label: 'Readiness Quiz',
        score: score,
        readiness_level: readinessLevel
    });

    // Track as conversion
    gtag('event', 'conversion', {
        event_category: 'Engagement',
        event_label: 'Quiz Completed',
        value: 1
    });
}

// Track volume calculator result
function trackVolumeCalculation(result) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'volume_calculated', {
        event_category: 'Volume Calculator',
        event_label: result.facilityType,
        washers: result.washers,
        dryers: result.dryers,
        capacity: result.capacity,
        daily_volume: result.dailyVolume
    });
}

// Track lead capture
function trackLeadCapture(leadType, success = true) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'generate_lead', {
        event_category: 'Lead Capture',
        event_label: leadType,
        value: success ? 1 : 0
    });

    if (success) {
        // Track as conversion
        gtag('event', 'conversion', {
            send_to: `${GA_MEASUREMENT_ID}/lead_submit`,
            event_category: 'Lead',
            event_label: leadType,
            value: 1
        });
    }
}

// Track form interactions
function trackFormInteraction(formName, interactionType) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'form_interaction', {
        event_category: 'Forms',
        event_label: formName,
        interaction_type: interactionType // 'start', 'field_change', 'submit', 'error'
    });
}

// Track CTA clicks
function trackCTAClick(ctaName, ctaLocation) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'cta_click', {
        event_category: 'CTA',
        event_label: ctaName,
        cta_location: ctaLocation
    });
}

// Track downloads
function trackDownload(downloadType, fileName) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'file_download', {
        event_category: 'Downloads',
        event_label: downloadType,
        file_name: fileName
    });
}

// Track outbound links
function trackOutboundLink(url, linkText) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'click', {
        event_category: 'Outbound Link',
        event_label: url,
        link_text: linkText,
        transport_type: 'beacon'
    });
}

// Track scroll depth
function initScrollTracking() {
    if (typeof gtag === 'undefined') return;

    const scrollMilestones = [25, 50, 75, 90, 100];
    const reached = {};

    window.addEventListener('scroll', () => {
        const scrollPercentage = Math.round(
            (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
        );

        scrollMilestones.forEach(milestone => {
            if (scrollPercentage >= milestone && !reached[milestone]) {
                reached[milestone] = true;

                gtag('event', 'scroll', {
                    event_category: 'Engagement',
                    event_label: `${milestone}%`,
                    value: milestone
                });
            }
        });
    });
}

// Track time on page
function trackTimeOnPage() {
    if (typeof gtag === 'undefined') return;

    const startTime = Date.now();

    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);

        gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: document.title,
            value: timeSpent,
            non_interaction: true
        });
    });
}

// Track errors
function trackError(errorMessage, errorSource) {
    if (typeof gtag === 'undefined') return;

    gtag('event', 'exception', {
        description: errorMessage,
        fatal: false,
        error_source: errorSource
    });
}

// Auto-initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initGoogleAnalytics();
        initScrollTracking();
        trackTimeOnPage();
    });
} else {
    initGoogleAnalytics();
    initScrollTracking();
    trackTimeOnPage();
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        trackPageView,
        trackToolStart,
        trackToolComplete,
        trackCalculatorResult,
        trackQuizResult,
        trackVolumeCalculation,
        trackLeadCapture,
        trackFormInteraction,
        trackCTAClick,
        trackDownload,
        trackOutboundLink,
        trackError
    };
}
