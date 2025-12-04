import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const stickyHeaderRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          const shouldBeFixed = scrollY > 50;
          
          setIsScrolled(shouldBeFixed);
          
          // Add/remove is-fixed class to sticky-header element
          if (stickyHeaderRef.current) {
            if (shouldBeFixed) {
              stickyHeaderRef.current.classList.add('is-fixed');
            } else {
              stickyHeaderRef.current.classList.remove('is-fixed');
            }
          }
          
          lastScrollY = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`} ref={stickyHeaderRef}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img 
            src={isScrolled 
              ? "/images/logo/branddark.png" 
              : "/images/logo/brandlight.png"} 
            alt="WIXOR Logo" 
            className="logo-img"
          />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleNavClick}>
                Home
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <Link 
                to="/about" 
                className={`nav-link dropdown-toggle ${location.pathname === '/about' ? 'active' : ''}`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleNavClick}
              >
                About
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/about" className="dropdown-item" onClick={handleNavClick}>About Us</Link></li>
                <li><Link to="/about#mission" className="dropdown-item" onClick={handleNavClick}>Our Mission</Link></li>
                <li><Link to="/about#vision" className="dropdown-item" onClick={handleNavClick}>Our Vision</Link></li>
                <li><Link to="/about#values" className="dropdown-item" onClick={handleNavClick}>Our Values</Link></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <Link 
                to="/services" 
                className={`nav-link dropdown-toggle ${location.pathname === '/services' ? 'active' : ''}`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleNavClick}
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/services" className="dropdown-item" onClick={handleNavClick}>All Services</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/services#website" className="dropdown-item" onClick={handleNavClick}>Website Development</Link></li>
                <li><Link to="/services#networking" className="dropdown-item" onClick={handleNavClick}>Networking Solutions</Link></li>
                <li><Link to="/services#consulting" className="dropdown-item" onClick={handleNavClick}>Business Consulting</Link></li>
                <li><Link to="/services#seo" className="dropdown-item" onClick={handleNavClick}>SEO Optimization</Link></li>
                <li><Link to="/services#mobile" className="dropdown-item" onClick={handleNavClick}>Mobile App Development</Link></li>
                <li><Link to="/services#strategy" className="dropdown-item" onClick={handleNavClick}>Digital Strategy</Link></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <Link 
                to="/portfolio" 
                className={`nav-link dropdown-toggle ${location.pathname === '/portfolio' ? 'active' : ''}`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleNavClick}
              >
                Portfolio
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/portfolio" className="dropdown-item" onClick={handleNavClick}>All Projects</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/portfolio#web" className="dropdown-item" onClick={handleNavClick}>Web Development</Link></li>
                <li><Link to="/portfolio#mobile" className="dropdown-item" onClick={handleNavClick}>Mobile Apps</Link></li>
                <li><Link to="/portfolio#design" className="dropdown-item" onClick={handleNavClick}>UI/UX Design</Link></li>
                <li><Link to="/portfolio#ecommerce" className="dropdown-item" onClick={handleNavClick}>E-Commerce</Link></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleNavClick}>
                Contact
              </Link>
            </li>
            
            <li className="nav-item ms-3">
              <Link to="/contact" className="btn btn-primary btn-rounded" onClick={handleNavClick}>
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
