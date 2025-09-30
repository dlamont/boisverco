// JavaScript moderne pour BoisVerco 2025
document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const config = {
        scrollOffset: 80,
        animationDuration: 300,
        slideInterval: 5000
    };

    // Éléments DOM
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.header');
    const heroSlider = document.querySelector('.hero-slider');
    const indicators = document.querySelectorAll('.indicator');
    
    // État de l'application
    let currentSlide = 0;
    let slideTimer = null;
    let isMenuOpen = false;

    // ===== NAVIGATION MOBILE =====
    function initMobileNavigation() {
        if (!hamburger || !navMenu) return;

        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Fermer le menu lors du clic sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Fermer le menu lors du clic à l'extérieur
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Fermer le menu lors du redimensionnement
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                closeMobileMenu();
            }
        });
    }

    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        
        // Animation des barres du hamburger
        animateHamburger();
    }

    function closeMobileMenu() {
        if (!isMenuOpen) return;
        
        isMenuOpen = false;
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        animateHamburger();
    }

    function animateHamburger() {
        const spans = hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (isMenuOpen) {
                if (index === 0) {
                    span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                } else if (index === 1) {
                    span.style.opacity = '0';
                } else if (index === 2) {
                    span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                }
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    }

    // ===== NAVIGATION SMOOTH SCROLL =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - config.scrollOffset;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    closeMobileMenu();
                }
            });
        });
    }

    // ===== NAVBAR SCROLL EFFECT =====
    function initNavbarScrollEffect() {
        if (!navbar) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateNavbar() {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.backgroundColor = '#ffffff';
                navbar.style.backdropFilter = 'none';
                navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    // ===== HERO SLIDER =====
    function initHeroSlider() {
        if (!heroSlider || indicators.length === 0) return;

        // Créer les slides (pour la démo, on utilise le même contenu)
        const slideContents = [
            {
                title: "À votre service depuis 2010",
                subtitle: "Magasin spécialisé en bois d'ébénisterie au détail",
                image: "slide1"
            },
            {
                title: "Bois massif de qualité",
                subtitle: "Sélection rigoureuse d'essences nobles pour vos projets",
                image: "slide2"
            },
            {
                title: "Expertise familiale",
                subtitle: "Une entreprise familiale au service de vos créations",
                image: "slide3"
            },
            {
                title: "Service personnalisé",
                subtitle: "Conseils professionnels pour tous vos besoins",
                image: "slide4"
            }
        ];

        // Initialiser les indicateurs
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });

        function goToSlide(index) {
            if (index === currentSlide) return;

            // Mettre à jour les indicateurs
            indicators[currentSlide].classList.remove('active');
            indicators[index].classList.add('active');

            // Mettre à jour le contenu (animation simple)
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');

            if (heroTitle && heroSubtitle) {
                heroTitle.style.opacity = '0';
                heroSubtitle.style.opacity = '0';

                setTimeout(() => {
                    heroTitle.textContent = slideContents[index].title;
                    heroSubtitle.textContent = slideContents[index].subtitle;
                    heroTitle.style.opacity = '1';
                    heroSubtitle.style.opacity = '1';
                }, 150);
            }

            currentSlide = index;
            resetSlideTimer();
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slideContents.length;
            goToSlide(nextIndex);
        }

        function resetSlideTimer() {
            if (slideTimer) {
                clearInterval(slideTimer);
            }
            slideTimer = setInterval(nextSlide, config.slideInterval);
        }

        // Démarrer le slider automatique
        resetSlideTimer();

        // Pause au survol
        heroSlider.addEventListener('mouseenter', () => {
            if (slideTimer) {
                clearInterval(slideTimer);
            }
        });

        heroSlider.addEventListener('mouseleave', resetSlideTimer);
    }

    // ===== ANIMATIONS AU SCROLL =====
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Observer les éléments à animer
        const elementsToAnimate = document.querySelectorAll(`
            .service-card,
            .portfolio-item,
            .contact-method,
            .about-content,
            .about-visual,
            .section-header
        `);

        elementsToAnimate.forEach(el => {
            el.classList.add('scroll-reveal');
            observer.observe(el);
        });
    }

    // ===== FORMULAIRE DE CONTACT =====
    function initContactForm() {
        const form = document.querySelector('.modern-form');
        if (!form) return;

        form.addEventListener('submit', handleFormSubmit);

        // Validation en temps réel
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('.submit-btn');
        
        // Validation
        if (!validateForm(form)) {
            showNotification('Veuillez corriger les erreurs dans le formulaire.', 'error');
            return;
        }

        // Animation du bouton
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        // Simulation d'envoi (remplacer par vraie logique)
        setTimeout(() => {
            showNotification('Message envoyé avec succès! Nous vous répondrons bientôt.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!validateField({ target: field })) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Supprimer les erreurs précédentes
        clearFieldError(e);

        // Validation selon le type
        if (field.hasAttribute('required') && !value) {
            errorMessage = 'Ce champ est requis.';
            isValid = false;
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Veuillez entrer une adresse email valide.';
                isValid = false;
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value)) {
                errorMessage = 'Veuillez entrer un numéro de téléphone valide.';
                isValid = false;
            }
        }

        if (!isValid) {
            showFieldError(field, errorMessage);
        }

        return isValid;
    }

    function showFieldError(field, message) {
        field.style.borderColor = '#e74c3c';
        
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #e74c3c;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: block;
            `;
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    function clearFieldError(e) {
        const field = e.target;
        field.style.borderColor = '';
        
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    // ===== BOUTONS CTA =====
    function initCTAButtons() {
        const ctaPrimary = document.querySelector('.cta-primary');
        const ctaSecondary = document.querySelector('.cta-secondary');
        const quoteBtn = document.querySelector('.quote-btn');

        if (ctaPrimary) {
            ctaPrimary.addEventListener('click', () => {
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                    const offsetTop = servicesSection.offsetTop - config.scrollOffset;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        if (ctaSecondary) {
            ctaSecondary.addEventListener('click', () => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    const offsetTop = contactSection.offsetTop - config.scrollOffset;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        if (quoteBtn) {
            quoteBtn.addEventListener('click', () => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    const offsetTop = contactSection.offsetTop - config.scrollOffset;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Focus sur le formulaire après un délai
                    setTimeout(() => {
                        const subjectField = document.querySelector('#subject');
                        if (subjectField) {
                            subjectField.value = 'devis';
                            subjectField.focus();
                        }
                    }, 500);
                }
            });
        }
    }

    // ===== SYSTÈME DE NOTIFICATIONS =====
    function showNotification(message, type = 'info') {
        // Supprimer les notifications existantes
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const colors = {
            success: '#27ae60',
            error: '#e74c3c',
            info: '#3498db',
            warning: '#f39c12'
        };

        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${colors[type] || colors.info};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            font-weight: 500;
            max-width: 300px;
            word-wrap: break-word;
        `;

        document.body.appendChild(notification);

        // Animation d'entrée
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        });

        // Suppression automatique
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);

        // Fermeture au clic
        notification.addEventListener('click', () => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }

    // ===== OPTIMISATIONS PERFORMANCE =====
    function initPerformanceOptimizations() {
        // Lazy loading pour les images (si ajoutées plus tard)
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Préchargement des polices
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
        fontPreload.as = 'style';
        document.head.appendChild(fontPreload);
    }

    // ===== ACCESSIBILITÉ =====
    function initAccessibility() {
        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMobileMenu();
            }
        });

        // Focus visible pour les éléments interactifs
        const focusableElements = document.querySelectorAll(`
            button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])
        `);

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid #D4AF37';
                element.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });

        // Annonces pour les lecteurs d'écran
        const announceToScreenReader = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.style.cssText = `
                position: absolute;
                left: -10000px;
                width: 1px;
                height: 1px;
                overflow: hidden;
            `;
            announcement.textContent = message;
            document.body.appendChild(announcement);

            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        };

        // Utiliser pour les changements d'état importants
        window.announceToScreenReader = announceToScreenReader;
    }

    // ===== INITIALISATION =====
    function init() {
        try {
            initMobileNavigation();
            initSmoothScroll();
            initNavbarScrollEffect();
            initHeroSlider();
            initScrollAnimations();
            initContactForm();
            initCTAButtons();
            initPerformanceOptimizations();
            initAccessibility();

            console.log('🌳 BoisVerco - Site web initialisé avec succès !');
            
            // Notification de bienvenue (optionnelle)
            // showNotification('Bienvenue chez BoisVerco !', 'success');
            
        } catch (error) {
            console.error('Erreur lors de l\'initialisation:', error);
        }
    }

    // Démarrer l'application
    init();

    // ===== GESTION DES ERREURS GLOBALES =====
    window.addEventListener('error', (e) => {
        console.error('Erreur JavaScript:', e.error);
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Promise rejetée:', e.reason);
    });
});
