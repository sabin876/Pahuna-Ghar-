import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Utensils,
  Truck,
  Users,
  Menu,
  X,
  Flame
} from 'lucide-react';
import './App.css';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import GoogleReviews from './components/GoogleReviews';
import MenuPage from './pages/MenuPage';



const easeOutExpo = [0.16, 1, 0.3, 1];

const navVariants = {
  hidden: { y: -90, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

const staggerLinks = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.32 },
  },
};

const linkItem = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutExpo } },
};




const footerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOutExpo } },
};

// Vercel fix: use Vite asset imports instead of hardcoded `/src/assets/...` URLs.
const assetModules = import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

const logoImg = assetModules['/src/assets/logo3.png'] || assetModules['/src/assets/Logo.jpeg'] || assetModules['/src/assets/logo.jpeg'] || assetModules['/src/assets/logo.png'];
const heroBgImg = assetModules['/src/assets/Hero section.webp'];
const heroSideImg = assetModules['/src/assets/Hero section.png'];
const contentBgImg = assetModules['/src/assets/contnet Bg.jpeg'];

function App() {
  const routePath =
    typeof window !== 'undefined'
      ? window.location.pathname.toLowerCase().replace(/\/+$/, '')
      : '';

  const isGallery = routePath === '/gallery';
  const isContact = routePath === '/contact';
  const isMenu = routePath === '/menu';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollSpring = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollSpring }}
        aria-hidden
      />

      {/* Navbar */}
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <motion.a
            href="/"
            className="nav-logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img src={logoImg} alt="Pahuna Ghar Logo" style={{ transition: 'var(--transition)', position: 'relative', zIndex: 1010 }} className="logo-img" />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15', userSelect: 'none' }}>
              <span style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: '700',
                color: 'var(--primary)',
                letterSpacing: '0.5px',
                lineHeight: '1.1'
              }}>Pahuna Ghar</span>
              <span style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(16px, 2vw, 24px)',
                fontWeight: '700',
                color: 'var(--primary)',
                letterSpacing: '0.5px',
              }}>Restaurant L.L.C</span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <motion.ul className="nav-links desktop-only" variants={staggerLinks} initial="hidden" animate="visible">
            {['/', '/#about', '/menu', '/gallery', '/contact'].map((href, i) => {
              const labels = ['Home', 'Our Story', 'Menu', 'Gallery', 'Contact'];
              return (
                <motion.li key={href} variants={linkItem}>
                  <a href={href} className="nav-link">{labels[i]}</a>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div className="nav-actions desktop-only" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.45 }}>
            <motion.a href="tel:+971555429243" className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul className="mobile-nav-links">
                {['/', '/#about', '/menu', '/gallery', '/contact'].map((href, i) => {
                  const labels = ['Home', 'Our Story', 'Menu', 'Gallery', 'Contact'];
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a href={href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{labels[i]}</a>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mobile-menu-footer">
                <a href="tel:+971555429243" className="btn btn-primary w-full">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {isGallery ? (
        <GalleryPage />
      ) : isContact ? (
        <ContactPage />
      ) : isMenu ? (
        <MenuPage />
      ) : isContact ? (
        <ContactPage />
      ) : (
        <>
          <header id="home" className="hero">
            <div className="hero-ambient" aria-hidden>
              <motion.div
                className="hero-orb hero-orb--a"
                animate={{ y: [0, -28, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="hero-orb hero-orb--b"
                animate={{ y: [0, 22, 0], x: [0, -18, 0], scale: [1, 1.12, 1] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <motion.div
                className="hero-orb hero-orb--c"
                animate={{ opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <motion.div
              className="hero-bg"
              animate={{ 
                scale: [1.02, 1, 1.02],
                rotate: [0, 0, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                backgroundImage: `url("${heroBgImg}")`,
              }}
            />
            <motion.div
              className="hero-grain"
              aria-hidden
              animate={{ opacity: [0.12, 0.2, 0.12] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="container">
              <div className="hero-content-wrapper">
                  <motion.div
                    className="hero-text-content"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.85, delay: 0.35, ease: easeOutExpo }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.65, delay: 0.55 }}
                      className="hero-badge hero-badge--shine"
                    >
                      Experience the Authentic Taste of Nepal
                    </motion.span>
                    <h1 className="hero-title" style={{ maxWidth: '100%', margin: '0 auto 30px' }}>
                      <motion.span
                        style={{ color: '#ffffff', display: 'block', marginBottom: '8px', fontSize: 'clamp(28px, 8vw, 68px)' }}
                        initial={{ opacity: 0, y: 48, rotateX: -25 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.75, delay: 0.65, ease: easeOutExpo }}
                      >
                        PAHUNA GHAR
                      </motion.span>
                      <motion.span
                        className="hero-title-line"
                        initial={{ opacity: 0, letterSpacing: '0.35em' }}
                        animate={{ opacity: 1, letterSpacing: '0.06em' }}
                        transition={{ duration: 0.9, delay: 0.85, ease: easeOutExpo }}
                        style={{ display: 'block', color: '#ffffff', fontSize: 'clamp(14px, 4vw, 24px)', textAlign: 'inherit' }}
                      >
                        RESTAURANT LLC
                      </motion.span>
                    </h1>
                    <motion.p
                      className="hero-description"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.05, duration: 0.6 }}
                      style={{ margin: '0 0 40px' }}
                    >
                      Bringing the legendary Himalayan flavors to the heart of Dubai. Hand-crafted dumplings, traditional spices, and warm hospitality.
                    </motion.p>
                    <motion.div
                      className="hero-cta-wrapper"
                      style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'flex-start' }}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.15, duration: 0.5 }}
                    >
                      <motion.a href="/menu" className="btn btn-primary" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                        Discover Menu
                      </motion.a>
                      <motion.a href="tel:+971555429243" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }} whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.12)' }} whileTap={{ scale: 0.97 }}>
                        <Phone size={18} />
                        <span>Call Now</span>
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="hero-image-content"
                    initial={{ opacity: 0, x: 60, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: easeOutExpo }}
                  >
                    <div className="hero-image-wrapper">
                      <img 
                        src={heroSideImg} 
                        alt="Authentic Nepalese Cuisine" 
                        className="hero-side-image"
                      />
                      <div className="hero-image-decorative-ring"></div>
                    </div>
                  </motion.div>



              </div>
            </div>
          </header>

          {/* History Section (Redesigned from Image) */}
          <section id="about" className="history-section-premium" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${contentBgImg}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="container">
              {/* Decorative Divider */}
              <div className="history-divider">
                <div className="history-divider-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    <path d="M12 17.77V22" />
                    <path d="M7 14.14L3 18" />
                    <path d="M17 14.14L21 18" />
                  </svg>
                </div>
              </div>

              {/* Fire Logo and Branding */}
              <div className="history-logo-container">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Flame size={80} className="history-fire-icon" color="var(--secondary)" fill="var(--secondary)" />
                </motion.div>
                
                <h2 className="history-brand">
                  <span style={{ color: '#ffffff' }}>pahuna</span>
                  <span className="highlight">GHAR</span>
                  <div className="history-brand-divider"></div>
                  <span className="highlight">NEPALI THALI</span>
                </h2>
                <div className="history-subtitle">
                  AUTHENTIC NEPALI CUISINE & BAR
                </div>
              </div>

              {/* History Content */}
              <div className="history-content">
                <motion.p 
                  className="history-paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ marginBottom: '24px' }}
                >
                  Welcome to Pahuna Ghar, where you can taste every flavor. Finding the best Nepali Thali set in Dubai is made easy with Pahuna Ghar. 
                </motion.p>

                <motion.p 
                  className="history-paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginBottom: '24px' }}
                >
                  At Pahuna Ghar, we bring the authentic tastes of Mustang right to your table, where tradition meets the perfect taste. Each bite brings the true essence of Nepali culture and the glorious Himalayas.
                </motion.p>

                <motion.p 
                  className="history-paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our food is about connecting you to Nepal's rich heritage. Our Nepali Thali set is the perfect harmony of flavor and texture, satisfying your cravings and making you feel as if you are in the heart of the mountains.
                </motion.p>


              </div>
            </div>
          </section>




          {/* Google Reviews Section */}
          <GoogleReviews />
        </>
      )}

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <motion.div className="footer-grid" variants={footerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div className="footer-col" variants={footerItem}>
              <div className="nav-logo" style={{ color: 'white', marginBottom: '20px' }}>
                <img src={logoImg} alt="Pahuna Ghar Logo" style={{ height: '50px', width: 'auto' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>PAHUNA GHAR</span>
                  <span style={{ fontSize: '12px', color: 'var(--secondary)' }}>पाहुना घर | مطعم باهونا غار</span>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>Authentic taste of Nepal in Dubai. Experience the true essence of Himalayan flavors with every bite.</p>
              <div className="social-links">
                <motion.a href="https://www.facebook.com/profile.php?id=100077641522086" target="_blank" className="social-icon" whileHover={{ y: -6, scale: 1.08 }} whileTap={{ scale: 0.95 }}><Facebook size={20} /></motion.a>
                <motion.a href="https://wa.me/971555429243" target="_blank" className="social-icon" whileHover={{ y: -6, scale: 1.08 }} whileTap={{ scale: 0.95 }}><MessageCircle size={20} /></motion.a>
              </div>
            </motion.div>
            <motion.div className="footer-col" variants={footerItem}>
              <h4>Quick Links</h4>
              <ul style={{ color: 'rgba(255,255,255,0.7)', display: 'grid', gap: '15px' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </motion.div>
            <motion.div className="footer-col" variants={footerItem}>
              <h4>Contact Us</h4>
              <ul style={{ color: 'rgba(255,255,255,0.7)', display: 'grid', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <MapPin className="text-secondary" size={20} color="var(--secondary)" />
                  <span>X4HP+CXR Jabal Ali mall - Jabal Ali Industrial First - Dubai - United Arab Emirates</span>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Phone className="text-secondary" size={20} color="var(--secondary)" />
                  <span>+971 55 542 9243</span>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <MessageCircle className="text-secondary" size={20} color="var(--secondary)" />
                  <span>+971 55 542 9243 (WhatsApp)</span>
                </li>
              </ul>
            </motion.div>
            <motion.div className="footer-col" variants={footerItem}>
              <h4>Opening Hours</h4>
              <ul style={{ color: 'rgba(255,255,255,0.7)', display: 'grid', gap: '15px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Everyday:</span>
                  <span>07:00 AM - 11:30 PM</span>
                </li>

              </ul>
            </motion.div>
          </motion.div>
          <motion.div className="footer-bottom" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            &copy; 2026 Pahuna Ghar Restaurant LLC. All rights reserved. Designed with ❤️ for Nepalese Culture.
          </motion.div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="floating-contact">
        <motion.a
          href="tel:+971555429243"
          className="floating-btn call"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone size={24} />
        </motion.a>
        <motion.a
          href="https://wa.me/971555429243"
          target="_blank"
          className="floating-btn whatsapp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </div>
  );
}

export default App;
