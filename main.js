// Intersection Observer for Scroll Reveal
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.lot-card, .icon-card, .section-title, .water-image, .water-content');

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu interés! Un asesor se contactará contigo pronto.');
            contactForm.reset();
        });
    }

    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Santorini Cards Interaction (Hover trigger)
    const cardOptions = document.querySelectorAll('.option');

    cardOptions.forEach(option => {
        option.addEventListener('mouseenter', () => {
            cardOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
});

// Change Navbar Background & Hide/Show on Scroll
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Style updates (Padding & Shadow)
    if (scrollTop > 50) {
        nav.style.padding = '10px 5%';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.padding = '0 5%'; // Restore to original CSS value
        nav.style.boxShadow = 'none';
    }

    // Hide/Show Logic
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling Down
        nav.classList.add('nav-hidden');
    } else {
        // Scrolling Up
        nav.classList.remove('nav-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


// Image Modal Logic
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const triggerBtn = document.getElementById("conoce-santorini-btn");
    const closeBtn = document.querySelector(".close");

    if (triggerBtn) {
        triggerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "block";
            // Check if the user has provided a specific image URL or use a placeholder
            // For now, using a placeholder because the exact repo file URL was not fully visible
            modalImg.src = "https://raw.githubusercontent.com/Alifer1221/toursantorini/main/freepik_elimina-todas-las-curvas-de-nivel_1639.jpg"; 
            // NOTE: I am guessing the filename based on what I saw. If this fails, I will notify the user.
            // A safer bet might be an error handler or a generic placeholder if it breaks.
            
            // Actually, let try to be safe. If the image fails, let fallback.
            modalImg.onerror = function() {
                this.src = "assets/santorini_resort_vignette.png"; // Fallback to existing asset
                alert("No pude encontrar la imagen exacta del repositorio. Por favor verifica el nombre del archivo.");
            };
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});

