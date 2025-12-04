import { useEffect } from 'react';
import Header from '../components/Header';
import './Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }

    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.portfolio-carousel.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 }
        }
      });
    }
  }, []);

  const baseUrl = 'https://swigo.dexignzone.com';

  const portfolioItems = [
    {
      title: 'E-Commerce Website',
      category: 'Website Development',
      image: `${baseUrl}/welcome/images/demo/index-full.png`,
      description: 'Modern e-commerce platform with advanced features'
    },
    {
      title: 'Business Portal',
      category: 'Web Development',
      image: `${baseUrl}/welcome/images/demo/index-2-full.png`,
      description: 'Corporate business portal with integrated solutions'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      image: `${baseUrl}/welcome/images/demo/index-3-full.png`,
      description: 'Secure mobile banking application'
    },
    {
      title: 'SaaS Platform',
      category: 'Web Development',
      image: `${baseUrl}/welcome/images/demo/index-4-full.png`,
      description: 'Cloud-based SaaS platform'
    },
    {
      title: 'Restaurant Website',
      category: 'Website Design',
      image: `${baseUrl}/welcome/images/demo/index-full.png`,
      description: 'Beautiful restaurant website with online ordering'
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      image: `${baseUrl}/welcome/images/demo/index-2-full.png`,
      description: 'Professional corporate website design'
    }
  ];

  return (
    <div className="page-wraper">
      <div className="page-content bg-white">
        <Header />
        
        {/* Portfolio Hero */}
        <div className="welcome-banner overlay-black-dark dez-move-image" style={{backgroundImage: `url(${baseUrl}/welcome/images/banner/bg1.jpg)`}}>
          <div className="welcome-content">
            <h1 className="title">Our <span>Portfolio</span></h1>
            <p className="subtitle">Showcasing our successful projects and client work</p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Work</h6>
              <h2>Success Stories & Projects</h2>
            </div>
            <div className="row">
              {portfolioItems.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                  <div className="portfolio-item">
                    <div className="portfolio-image">
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <div className="portfolio-content">
                          <span className="portfolio-category">{item.category}</span>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <a href="#" className="btn btn-primary btn-sm">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="section-full bg-gray content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Client Feedback</h6>
              <h2>What Our Clients Say</h2>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="testimonial-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-left fa-2x text-primary"></i>
                  </div>
                  <div className="testimonial-text">
                    <p>"Outstanding work! They delivered exactly what we needed and exceeded our expectations. Our website traffic increased by 250% in just 3 months."</p>
                  </div>
                  <div className="testimonial-author">
                    <img src={`${baseUrl}/welcome/images/pic1.jpg`} alt="Client" width="60" height="60" className="rounded-circle" />
                    <div>
                      <h5>John Smith</h5>
                      <span>CEO, TechCorp</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="testimonial-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-left fa-2x text-primary"></i>
                  </div>
                  <div className="testimonial-text">
                    <p>"Professional team, great communication, and excellent results. They transformed our digital strategy and helped us reach new markets. Highly recommended!"</p>
                  </div>
                  <div className="testimonial-author">
                    <img src={`${baseUrl}/welcome/images/pic1.jpg`} alt="Client" width="60" height="60" className="rounded-circle" />
                    <div>
                      <h5>Sarah Johnson</h5>
                      <span>Marketing Director, Global Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="testimonial-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.3s">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-left fa-2x text-primary"></i>
                  </div>
                  <div className="testimonial-text">
                    <p>"They transformed our digital presence completely. Our online sales increased by 300% and customer engagement improved significantly. Best investment we made!"</p>
                  </div>
                  <div className="testimonial-author">
                    <img src={`${baseUrl}/welcome/images/pic1.jpg`} alt="Client" width="60" height="60" className="rounded-circle" />
                    <div>
                      <h5>Michael Chen</h5>
                      <span>Business Owner, StartupHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Categories */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Portfolio Categories</h6>
              <h2>Explore Our Work by Category</h2>
            </div>
            <div className="row">
              {[
                { title: 'Web Development', count: '120+', icon: 'fas fa-globe', color: 'primary' },
                { title: 'Mobile Apps', count: '80+', icon: 'fas fa-mobile-alt', color: 'success' },
                { title: 'UI/UX Design', count: '150+', icon: 'fas fa-palette', color: 'warning' },
                { title: 'E-Commerce', count: '90+', icon: 'fas fa-shopping-cart', color: 'info' },
                { title: 'Branding', count: '70+', icon: 'fas fa-paint-brush', color: 'danger' },
                { title: 'Digital Marketing', count: '100+', icon: 'fas fa-bullhorn', color: 'primary' }
              ].map((category, index) => (
                <div key={index} className="col-md-4 col-sm-6 mb-4">
                  <div className="category-box text-center wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                    <div className="category-icon">
                      <i className={`${category.icon} fa-3x text-${category.color}`}></i>
                    </div>
                    <h4>{category.title}</h4>
                    <p className="category-count">{category.count} Projects</p>
                    <a href={`/portfolio#${category.title.toLowerCase().replace(' ', '-')}`} className="btn btn-outline-primary btn-sm">View Projects</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="section-full bg-gray content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Achievements</h6>
              <h2>Numbers That Speak</h2>
            </div>
            <div className="row">
              {[
                { number: '500+', label: 'Projects Delivered', icon: 'fas fa-project-diagram' },
                { number: '300+', label: 'Satisfied Clients', icon: 'fas fa-smile' },
                { number: '50+', label: 'Team Members', icon: 'fas fa-users' },
                { number: '10+', label: 'Years Experience', icon: 'fas fa-award' }
              ].map((stat, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-4">
                  <div className="stat-card text-center wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                    <div className="stat-icon-large">
                      <i className={`${stat.icon} fa-3x text-primary`}></i>
                    </div>
                    <h3 className="text-primary">{stat.number}</h3>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="section-full bg-primary text-white content-inner" style={{background: 'linear-gradient(135deg, var(--primary) 0%, #e67e22 100%)'}}>
          <div className="container-fluid text-center">
            <div className="wow fadeInUp" data-wow-duration="0.6s">
              <h2 className="text-white mb-3">Have a Project in Mind?</h2>
              <p className="text-white mb-4">Let's create something amazing together</p>
              <a href="/contact" className="btn btn-light btn-lg btn-rounded">Start Your Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

