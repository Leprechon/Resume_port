/* ============================================
   🎨 Sam G. Portfolio - Main JavaScript
   ✅ Dark Mode | Scroll | Forms | Galleries
   ============================================ */

// 🌓 Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.dark-toggle');
    if (icon) {
        icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// ⚡ Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    
    // Load saved dark mode preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('.dark-toggle');
        if (icon) icon.textContent = '☀️';
    }
    
    // ⬆️ Scroll to Top Button
    const myBtn = document.getElementById('myBtn');
    
    function checkScroll() {
        if (myBtn) {
            myBtn.style.display = window.scrollY > 20 ? 'block' : 'none';
        }
    }
    
    // Expose to global scope for HTML onclick
    window.topFunction = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Init scroll check + listener
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // ✉️ Contact Form (Demo Mode)
    // EmailJS Form Handler
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
            .then(() => {
                btn.textContent = 'Sent! ✓';
                form.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 3000);
            }, (error) => {
                console.error('EmailJS Error:', error);
                btn.textContent = 'Failed ✗';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 3000);
            });
    });
}
    // 📄 Download Helper (Browser Compatibility)
    document.querySelectorAll('a[download]').forEach((link) => {
        link.addEventListener('click', (e) => {
            if (!('download' in HTMLAnchorElement.prototype)) {
                e.preventDefault();
                alert('💡 PDF opened in browser.\n\nUse the ⬇️ icon in your browser to save the file.');
            }
        });
    });
});

/* ============================================
   🖼️ GALLERY MODAL FUNCTIONS (With Null Safety)
   ============================================ */

// Cuatrix Gallery
function openCuatrixGallery() {
    const modal = document.getElementById('cuatrixModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}
function closeCuatrixGallery() {
    const modal = document.getElementById('cuatrixModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// WNS Gallery
function openWNSGallery() {
    const modal = document.getElementById('wnsModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}
function closeWNSGallery() {
    const modal = document.getElementById('wnsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Inspiro Gallery
function openInspiroGallery() {
    const modal = document.getElementById('inspiroModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}
function closeInspiroGallery() {
    const modal = document.getElementById('inspiroModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/* ============================================
   🔦 IMAGE LIGHTBOX (Shared for All Galleries)
   ============================================ */

function enlargeImage(imgElement) {
    const lightboxImg = document.getElementById('enlargedImage');
    const lightboxCaption = document.getElementById('imageCaption');
    const imageModal = document.getElementById('imageModal');
    
    if (lightboxImg && imageModal) {
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = imgElement.alt;
        if (lightboxCaption) lightboxCaption.textContent = imgElement.alt || '';
        imageModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/* ============================================
   🚪 MODAL CLOSE HANDLERS (Outside Click + ESC)
   ============================================ */

// Close modals when clicking outside content
window.onclick = function(event) {
    if (event.target === document.getElementById('cuatrixModal')) closeCuatrixGallery();
    if (event.target === document.getElementById('wnsModal')) closeWNSGallery();
    if (event.target === document.getElementById('inspiroModal')) closeInspiroGallery();
    if (event.target === document.getElementById('imageModal')) closeImageModal();
};

// Close modals with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCuatrixGallery();
        closeWNSGallery();
        closeInspiroGallery();
        closeImageModal();
    }
});

// Prevent modal content clicks from closing the modal
document.querySelectorAll('.modal-content').forEach((modal) => {
    modal.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

/* ============================================
   ✅ Console Log for Debugging (Remove in Production)
   ============================================ */
// console.log('✅ script.js loaded successfully | Sam G. Portfolio');