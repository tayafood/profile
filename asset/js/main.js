/**
 * TAYA FOOD - Main JavaScript
 * File: main.js
 * 
 * Dependencies: 
 *   - i18n language files (vi.js, en.js, etc.) must be loaded before this file
 */

(function() {
    'use strict';

    // ==========================================
    // CONFIGURATION
    // ==========================================
    const CONFIG = {
        defaultLang: 'vi',
        supportedLangs: ['vi', 'en', 'zh', 'ja', 'ko'],
        storageKey: 'tayafood_lang',
        langMeta: {
            vi: { code: 'VI', name: 'Tiếng Việt', flag: 'https://flagcdn.com/w40/vn.png' },
            en: { code: 'EN', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
            zh: { code: 'ZH', name: '简体中文', flag: 'https://flagcdn.com/w40/cn.png' },
            ja: { code: 'JA', name: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
            ko: { code: 'KO', name: '한국어', flag: 'https://flagcdn.com/w40/kr.png' }
        }
    };

    // ==========================================
    // INTERNATIONALIZATION (i18n) MODULE
    // ==========================================
    const I18n = {
        currentLang: null,
        switcher: null,
        dropdown: null,
        currentBtn: null,
        currentFlag: null,
        currentCode: null,

        init() {
            // Get DOM elements
            this.switcher = document.getElementById('langSwitcher');
            this.dropdown = document.getElementById('langDropdown');
            this.currentBtn = document.getElementById('langCurrent');
            this.currentFlag = document.getElementById('currentFlag');
            this.currentCode = document.getElementById('currentLangCode');

            // Get saved language or default
            this.currentLang = localStorage.getItem(CONFIG.storageKey) || CONFIG.defaultLang;
            
            // Validate language exists
            if (!window.i18n || !window.i18n[this.currentLang]) {
                this.currentLang = CONFIG.defaultLang;
            }

            this.applyLanguage(this.currentLang);
            this.bindEvents();
        },

        applyLanguage(lang) {
            if (!window.i18n || !window.i18n[lang]) {
                console.warn(`Language "${lang}" not found`);
                return;
            }

            this.currentLang = lang;
            localStorage.setItem(CONFIG.storageKey, lang);
            document.documentElement.lang = lang;

            const translations = window.i18n[lang];
            const meta = CONFIG.langMeta[lang];

            // Update all translatable elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key]) {
                    el.innerHTML = translations[key];
                }
            });

            // Update current language display
            if (this.currentFlag && meta) {
                this.currentFlag.src = meta.flag;
                this.currentFlag.alt = meta.code;
            }
            if (this.currentCode && meta) {
                this.currentCode.textContent = meta.code;
            }

            // Update active state in dropdown
            document.querySelectorAll('.lang-option').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });

            // Close dropdown after selection
            this.closeDropdown();
        },

        toggleDropdown() {
            if (this.switcher) {
                this.switcher.classList.toggle('open');
            }
        },

        closeDropdown() {
            if (this.switcher) {
                this.switcher.classList.remove('open');
            }
        },

        bindEvents() {
            // Toggle dropdown on current button click
            if (this.currentBtn) {
                this.currentBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.toggleDropdown();
                });
            }

            // Language option clicks
            document.querySelectorAll('.lang-option').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const lang = btn.getAttribute('data-lang');
                    if (CONFIG.supportedLangs.includes(lang)) {
                        this.applyLanguage(lang);
                    }
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (this.switcher && !this.switcher.contains(e.target)) {
                    this.closeDropdown();
                }
            });
        }
    };

    // ==========================================
    // MOBILE MENU MODULE
    // ==========================================
    const MobileMenu = {
        isOpen: false,
        menuToggle: null,
        navLinks: null,

        init() {
            this.menuToggle = document.querySelector('.menu-toggle');
            this.navLinks = document.getElementById('navLinks');

            if (!this.menuToggle || !this.navLinks) return;

            this.bindEvents();
        },

        toggle(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }

            this.isOpen = !this.isOpen;
            this.navLinks.classList.toggle('active', this.isOpen);
            this.menuToggle.innerHTML = this.isOpen 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        },

        close() {
            this.isOpen = false;
            this.navLinks.classList.remove('active');
            this.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        },

        bindEvents() {
            // Toggle button events
            this.menuToggle.addEventListener('click', (e) => this.toggle(e));
            this.menuToggle.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.toggle(e);
            }, { passive: false });

            // Close on nav link click
            this.navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 768) {
                        this.close();
                    }
                });
            });

            // Close on outside click
            document.addEventListener('click', (e) => {
                if (this.isOpen && !this.menuToggle.contains(e.target) && !this.navLinks.contains(e.target)) {
                    this.close();
                }
            });

            document.addEventListener('touchend', (e) => {
                if (this.isOpen && !this.menuToggle.contains(e.target) && !this.navLinks.contains(e.target)) {
                    this.close();
                }
            });
        }
    };

    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================
    const HeaderScroll = {
        header: null,

        init() {
            this.header = document.getElementById('header');
            if (!this.header) return;

            window.addEventListener('scroll', () => this.onScroll());
        },

        onScroll() {
            if (window.scrollY > 100) {
                this.header.style.padding = '10px 0';
                this.header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            } else {
                this.header.style.padding = '15px 0';
                this.header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }
        }
    };

    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================
    const ScrollToTop = {
        btn: null,

        init() {
            this.btn = document.getElementById('scrollTop');
            if (!this.btn) return;

            window.addEventListener('scroll', () => this.onScroll());
            this.btn.addEventListener('click', () => this.scrollToTop());
        },

        onScroll() {
            if (window.scrollY > 500) {
                this.btn.classList.add('visible');
            } else {
                this.btn.classList.remove('visible');
            }
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    const SmoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
            });
        },

        handleClick(e, anchor) {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const header = document.getElementById('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    // ==========================================
    // INITIALIZE ALL MODULES
    // ==========================================
    function init() {
        I18n.init();
        MobileMenu.init();
        HeaderScroll.init();
        ScrollToTop.init();
        SmoothScroll.init();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
