/**
 * Global Header Navigation Component
 * Reusable header menu for all pages
 */

const HEADER_HTML = `
<style>
    .site-header {
        background: #FFFFFF;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        position: sticky;
        top: 0;
        z-index: 1000;
        transition: all 0.3s ease;
    }

    .site-header.scrolled {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    }

    .header-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }

    .header-logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.75rem;
    }

    .logo-icon {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #005281 0%, #0078B4 100%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }

    .logo-text {
        display: flex;
        flex-direction: column;
    }

    .logo-title {
        font-family: 'DM Serif Display', serif;
        font-size: 1.5rem;
        color: #005281;
        font-weight: 400;
        line-height: 1;
    }

    .logo-subtitle {
        font-size: 0.75rem;
        color: #7A8A96;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .header-nav {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-link {
        color: #4A5A66;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        transition: color 0.3s ease;
        position: relative;
    }

    .nav-link:hover {
        color: #005281;
    }

    .nav-link.active {
        color: #005281;
        font-weight: 600;
    }

    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        height: 2px;
        background: #0078B4;
    }

    .nav-dropdown {
        position: relative;
    }

    .nav-dropdown-trigger {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;
    }

    .nav-dropdown-trigger::after {
        content: '▼';
        font-size: 0.6rem;
        transition: transform 0.3s ease;
    }

    .nav-dropdown:hover .nav-dropdown-trigger::after {
        transform: rotate(180deg);
    }

    .nav-dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 0.5rem;
        background: white;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 0.5rem 0;
        min-width: 220px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s ease;
    }

    .nav-dropdown:hover .nav-dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .nav-dropdown-item {
        display: block;
        padding: 0.75rem 1.5rem;
        color: #4A5A66;
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.9rem;
    }

    .nav-dropdown-item:hover {
        background: #E6F2F8;
        color: #005281;
    }

    .nav-dropdown-item .item-icon {
        margin-right: 0.5rem;
    }

    .nav-dropdown-item .item-description {
        display: block;
        font-size: 0.75rem;
        color: #7A8A96;
        margin-top: 0.25rem;
    }

    .header-cta {
        display: flex;
        gap: 1rem;
    }

    .btn-header {
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        white-space: nowrap;
    }

    .btn-header-primary {
        background: #005281;
        color: white;
    }

    .btn-header-primary:hover {
        background: #0078B4;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 120, 180, 0.3);
    }

    .btn-header-secondary {
        background: transparent;
        color: #005281;
        border: 2px solid #005281;
    }

    .btn-header-secondary:hover {
        background: #005281;
        color: white;
    }

    /* Mobile Menu */
    .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }

    .mobile-menu-toggle span {
        display: block;
        width: 25px;
        height: 3px;
        background: #005281;
        margin: 5px 0;
        transition: all 0.3s ease;
    }

    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }

    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }

    .mobile-menu {
        display: none;
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        padding: 2rem;
        max-height: calc(100vh - 80px);
        overflow-y: auto;
    }

    .mobile-menu.active {
        display: block;
    }

    .mobile-nav-links {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .mobile-nav-links li {
        margin-bottom: 1rem;
    }

    .mobile-nav-link {
        display: block;
        padding: 1rem;
        color: #4A5A66;
        text-decoration: none;
        font-weight: 500;
        border-radius: 4px;
        transition: background 0.3s ease;
    }

    .mobile-nav-link:hover,
    .mobile-nav-link.active {
        background: #E6F2F8;
        color: #005281;
    }

    .mobile-tools {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #E0E4E8;
    }

    .mobile-tools-title {
        font-weight: 600;
        margin-bottom: 1rem;
        color: #005281;
    }

    .mobile-cta {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #E0E4E8;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    @media (max-width: 968px) {
        .header-nav {
            display: none;
        }

        .mobile-menu-toggle {
            display: block;
        }

        .header-cta {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .header-container {
            padding: 0 1rem;
            height: 70px;
        }

        .logo-title {
            font-size: 1.25rem;
        }

        .logo-subtitle {
            font-size: 0.65rem;
        }

        .mobile-menu {
            top: 70px;
            max-height: calc(100vh - 70px);
        }
    }
</style>

<header class="site-header" id="siteHeader">
    <div class="header-container">
        <!-- Logo -->
        <a href="vard-hygien-landing.html" class="header-logo">
            <div class="logo-icon">🌀</div>
            <div class="logo-text">
                <span class="logo-title">tvättlösningar.se</span>
                <span class="logo-subtitle">Vård & Hygien</span>
            </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="header-nav">
            <ul class="nav-links">
                <li><a href="vard-hygien-landing.html" class="nav-link" data-page="home">Hem</a></li>

                <li class="nav-dropdown">
                    <span class="nav-link nav-dropdown-trigger">Branscher</span>
                    <div class="nav-dropdown-menu">
                        <a href="sjukhus-akutvard.html" class="nav-dropdown-item">
                            <span class="item-icon">🏥</span>
                            <strong>Sjukhus & Akutvård</strong>
                            <span class="item-description">Högsta hygienstandard</span>
                        </a>
                        <a href="aldreboende.html" class="nav-dropdown-item">
                            <span class="item-icon">🏡</span>
                            <strong>Äldreboenden</strong>
                            <span class="item-description">Trygg och kostnadseffektiv</span>
                        </a>
                        <a href="vardcentraler.html" class="nav-dropdown-item">
                            <span class="item-icon">🩺</span>
                            <strong>Vårdcentraler & Kliniker</strong>
                            <span class="item-description">Kompakta lösningar</span>
                        </a>
                        <a href="bygg-fastighet.html" class="nav-dropdown-item">
                            <span class="item-icon">🏗️</span>
                            <strong>Bygg & Fastighet</strong>
                            <span class="item-description">99,2% leverans enligt plan</span>
                        </a>
                        <a href="sport-fritid.html" class="nav-dropdown-item">
                            <span class="item-icon">⚽</span>
                            <strong>Sport & Fritidsanläggningar</strong>
                            <span class="item-description">140+ anläggningar</span>
                        </a>
                        <a href="djurhallning.html" class="nav-dropdown-item">
                            <span class="item-icon">🐕</span>
                            <strong>Djurvård</strong>
                            <span class="item-description">Hanterar hår och kontaminering</span>
                        </a>
                        <a href="raddningstjanst.html" class="nav-dropdown-item">
                            <span class="item-icon">🚒</span>
                            <strong>Räddningstjänst</strong>
                            <span class="item-description">96,4% PAH-reduktion</span>
                        </a>
                    </div>
                </li>

                <li class="nav-dropdown">
                    <span class="nav-link nav-dropdown-trigger">Verktyg</span>
                    <div class="nav-dropdown-menu">
                        <a href="volymberaknare.html" class="nav-dropdown-item">
                            <span class="item-icon">📊</span>
                            <strong>Volymberäknare</strong>
                            <span class="item-description">Hur många maskiner behöver ni?</span>
                        </a>
                        <a href="lcc-kalkylator.html" class="nav-dropdown-item">
                            <span class="item-icon">💰</span>
                            <strong>LCC-kalkylator</strong>
                            <span class="item-description">Jämför livscykelkostnad</span>
                        </a>
                        <a href="beredskapsquiz.html" class="nav-dropdown-item">
                            <span class="item-icon">✅</span>
                            <strong>Beredskapsquiz</strong>
                            <span class="item-description">Är ni redo för upphandling?</span>
                        </a>
                    </div>
                </li>

                <li><a href="guider.html" class="nav-link" data-page="guides">Guider</a></li>
                <li><a href="om-oss.html" class="nav-link" data-page="about">Om oss</a></li>
                <li><a href="kontakt.html" class="nav-link" data-page="contact">Kontakt</a></li>
            </ul>
        </nav>

        <!-- CTA Buttons -->
        <div class="header-cta">
            <a href="#" class="btn-header btn-header-secondary" onclick="event.preventDefault(); showGuideDownload();">
                📄 Ladda ner guide
            </a>
            <a href="#" class="btn-header btn-header-primary" onclick="event.preventDefault(); showConsultationBooking();">
                📞 Boka rådgivning
            </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" id="mobileMenuToggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <ul class="mobile-nav-links">
            <li><a href="vard-hygien-landing.html" class="mobile-nav-link" data-page="home">🏠 Hem</a></li>
            <li><a href="guider.html" class="mobile-nav-link" data-page="guides">📚 Guider</a></li>
            <li><a href="om-oss.html" class="mobile-nav-link" data-page="about">ℹ️ Om oss</a></li>
            <li><a href="kontakt.html" class="mobile-nav-link" data-page="contact">📧 Kontakt</a></li>
        </ul>

        <div class="mobile-tools">
            <div class="mobile-tools-title">Branscher</div>
            <ul class="mobile-nav-links">
                <li><a href="sjukhus-akutvard.html" class="mobile-nav-link">🏥 Sjukhus & Akutvård</a></li>
                <li><a href="aldreboende.html" class="mobile-nav-link">🏡 Äldreboenden</a></li>
                <li><a href="vardcentraler.html" class="mobile-nav-link">🩺 Vårdcentraler</a></li>
                <li><a href="bygg-fastighet.html" class="mobile-nav-link">🏗️ Bygg & Fastighet</a></li>
                <li><a href="sport-fritid.html" class="mobile-nav-link">⚽ Sport & Fritid</a></li>
                <li><a href="djurhallning.html" class="mobile-nav-link">🐕 Djurvård</a></li>
                <li><a href="raddningstjanst.html" class="mobile-nav-link">🚒 Räddningstjänst</a></li>
            </ul>
        </div>

        <div class="mobile-tools">
            <div class="mobile-tools-title">Verktyg</div>
            <ul class="mobile-nav-links">
                <li><a href="volymberaknare.html" class="mobile-nav-link">📊 Volymberäknare</a></li>
                <li><a href="lcc-kalkylator.html" class="mobile-nav-link">💰 LCC-kalkylator</a></li>
                <li><a href="beredskapsquiz.html" class="mobile-nav-link">✅ Beredskapsquiz</a></li>
            </ul>
        </div>

        <div class="mobile-cta">
            <a href="#" class="btn-header btn-header-secondary" style="text-align: center;" onclick="event.preventDefault(); showGuideDownload();">
                📄 Ladda ner guide
            </a>
            <a href="#" class="btn-header btn-header-primary" style="text-align: center;" onclick="event.preventDefault(); showConsultationBooking();">
                📞 Boka rådgivning
            </a>
        </div>
    </div>
</header>
`;

// Initialize header
function initHeader() {
    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);

    // Set active page
    const currentPage = getCurrentPage();
    document.querySelectorAll(`[data-page="${currentPage}"]`).forEach(link => {
        link.classList.add('active');
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav-link, .mobile-cta a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Scroll effect
    let lastScroll = 0;
    const header = document.getElementById('siteHeader');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    console.log('Header initialized');
}

// Determine current page
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);

    if (filename === 'vard-hygien-landing.html' || filename === '' || filename === 'index.html') {
        return 'home';
    } else if (filename.includes('volymberaknare')) {
        return 'tools';
    } else if (filename.includes('lcc-kalkylator')) {
        return 'tools';
    } else if (filename.includes('beredskapsquiz')) {
        return 'tools';
    } else if (filename.includes('guider')) {
        return 'guides';
    } else if (filename.includes('om-oss')) {
        return 'about';
    } else if (filename.includes('kontakt')) {
        return 'contact';
    } else if (filename.includes('sjukhus') || filename.includes('aldreboende') || filename.includes('vardcentral') || filename.includes('bygg') || filename.includes('sport') || filename.includes('djur') || filename.includes('raddning')) {
        return 'branches';
    }

    return 'home';
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
} else {
    initHeader();
}

// Export for manual initialization
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initHeader };
}
