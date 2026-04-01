// --- 1. Scroll Animations ---
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
});

// --- 2. Smooth Scroll (Ignores Modal Links) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Check if we are on the homepage. If not, don't prevent default, let the browser handle it
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            if (href !== "#" && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    });
});

// --- 3. Contact Modal Logic ---
const contactModal = document.getElementById('contact-modal');

function openContactModal(e) {
    if(e) e.preventDefault();
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close when clicking dark background outside the white modal
contactModal.addEventListener('click', function(e) {
    if (e.target === contactModal) {
        closeContactModal();
    }
});

// --- 4. Cookie Banner Logic (Fires Immediately) ---
function acceptCookies() {
    gtag('consent', 'update', { 'ad_storage': 'granted', 'analytics_storage': 'granted' });
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookieConsent', 'accepted');
}

function declineCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookieConsent', 'declined');
}

// Check immediately if we should show the banner
if (!localStorage.getItem('cookieConsent')) {
    document.getElementById('cookie-banner').style.display = 'block';
}
