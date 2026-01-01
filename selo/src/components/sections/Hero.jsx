import { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section welcome-banner overlay-black-dark dez-move-image" style={{backgroundImage: 'url(/images/banner/bg1.jpg)'}}>
      <div className="floating-elements">
        <img 
          src="/images/pngs/pngtree-a-mechanical-keyboard-with-rgb-backlighting-turned-on-png-image_21036561-removebg-preview.png" 
          alt="" 
          className="garlic1 slideskew parallax-element"
          onError={(e) => e.target.style.display = 'none'}
        />
        <img 
          src="/images/pngs/output-onlinegiftools.gif" 
          alt="" 
          className="garlic2 slideskew3 parallax-element"
          onError={(e) => e.target.style.display = 'none'}
        />
        <img 
          src="/images/banner/team-element.png" 
          alt="" 
          className="sm-element slideskew parallax-element"
          onError={(e) => e.target.style.display = 'none'}
        />
        <img 
          src="/images/banner/icon-element.png" 
          alt="" 
          className="sm-element-2 slideskew2 parallax-element"
          onError={(e) => e.target.style.display = 'none'}
        />
        <img 
          src="/images/banner/icon-2-element.png" 
          alt="" 
          className="sm-element-3 slideskew3 parallax-element"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <span className="hero-badge animate__animated animate__fadeInDown">RESTAURANT</span>
              <h1 className="hero-title animate__animated animate__fadeInUp animate__delay-1s">
                Swigo - Fast Food And <span>Restaurant HTML</span> Template
              </h1>
              <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-2s">Stunning Diverse Website Introduction</p>
              <div className="hero-features animate__animated animate__fadeInUp animate__delay-3s">
                <span className="feature-tag">HTML</span>
                <span className="feature-tag">WordPress</span>
                <span className="feature-tag">React</span>
                <span className="feature-tag">Vue Js</span>
                <span className="feature-tag">Laravel</span>
                <span className="feature-tag">Asp.net</span>
                <span className="feature-tag">React Tailwind</span>
                <span className="feature-tag">Tailwind</span>
              </div>
              <div className="hero-buttons animate__animated animate__fadeInUp animate__delay-4s">
                <a href="#home-pages" className="btn btn-primary">View Home Pages</a>
                <a href="#buy" className="btn btn-outline">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
              <div className="hero-image-wrapper">
                <img 
                  src="/images/banner/bnr1.jpg" 
                  alt="Restaurant Template Preview"
                  className="hero-main-image"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80";
                  }}
                />
                <div className="hero-image-overlay">
                  <div className="floating-badge animate__animated animate__pulse animate__infinite">
                    <i className="fas fa-star"></i>
                    <span>Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

