import { useEffect } from 'react';
import Header from '../components/Header';
import './Services.css';

const Services = () => {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const baseUrl = 'https://swigo.dexignzone.com';

  const services = [
    {
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance.',
      icon: 'fas fa-laptop-code',
      features: ['Responsive Design', 'CMS Integration', 'E-Commerce Solutions', 'Performance Optimization']
    },
    {
      title: 'Networking Solutions',
      description: 'Complete network infrastructure setup, maintenance, and security solutions for your business.',
      icon: 'fas fa-network-wired',
      features: ['Network Setup', 'Security Solutions', 'Cloud Integration', '24/7 Monitoring']
    },
    {
      title: 'Business Consulting',
      description: 'Strategic business advice to help you grow, optimize operations, and achieve your goals.',
      icon: 'fas fa-briefcase',
      features: ['Strategic Planning', 'Process Optimization', 'Digital Transformation', 'Growth Strategy']
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      icon: 'fas fa-search',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics & Reporting']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      icon: 'fas fa-mobile-alt',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization']
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach.',
      icon: 'fas fa-chart-line',
      features: ['Market Analysis', 'Content Strategy', 'Social Media', 'Performance Tracking']
    }
  ];

  return (
    <div className="page-wraper">
      <div className="page-content bg-white">
        <Header />
        
        {/* Services Hero */}
        <div className="welcome-banner overlay-black-dark dez-move-image" style={{backgroundImage: `url(${baseUrl}/welcome/images/banner/bg1.jpg)`}}>
          <div className="welcome-content">
            <h1 className="title">Our <span>Services</span></h1>
            <p className="subtitle">Complete digital solutions for your business success</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">What We Offer</h6>
              <h2>Comprehensive Digital Services</h2>
            </div>
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                  <div className="service-box">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="wow fadeInLeft" data-wow-duration="0.4s" data-wow-delay={`${(index * 0.1) + (idx * 0.05)}s`}>
                          <i className="fas fa-check text-primary"></i> {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className="btn btn-primary btn-sm">Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="section-full bg-gray content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Why Choose Us</h6>
              <h2>Your Trusted Digital Partner</h2>
            </div>
            <div className="row">
              <div className="col-md-3 text-center mb-4">
                <div className="stat-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
                  <div className="stat-icon">
                    <i className="fas fa-project-diagram fa-2x text-primary"></i>
                  </div>
                  <h3 className="text-primary counter" data-target="500">0+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-4">
                <div className="stat-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">
                  <div className="stat-icon">
                    <i className="fas fa-users fa-2x text-primary"></i>
                  </div>
                  <h3 className="text-primary counter" data-target="300">0+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-4">
                <div className="stat-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.3s">
                  <div className="stat-icon">
                    <i className="fas fa-calendar-alt fa-2x text-primary"></i>
                  </div>
                  <h3 className="text-primary counter" data-target="10">0+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-4">
                <div className="stat-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.4s">
                  <div className="stat-icon">
                    <i className="fas fa-user-tie fa-2x text-primary"></i>
                  </div>
                  <h3 className="text-primary counter" data-target="50">0+</h3>
                  <p>Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Approach</h6>
              <h2>How We Deliver Excellence</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="process-timeline">
                  {[
                    { title: 'Consultation', desc: 'We start by understanding your business needs and goals', icon: 'fas fa-comments' },
                    { title: 'Strategy', desc: 'We develop a comprehensive strategy tailored to your objectives', icon: 'fas fa-chess' },
                    { title: 'Execution', desc: 'Our team implements the solution with precision and expertise', icon: 'fas fa-cogs' },
                    { title: 'Support', desc: 'We provide ongoing support and optimization for long-term success', icon: 'fas fa-headset' }
                  ].map((step, index) => (
                    <div key={index} className="timeline-item wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                      <div className="timeline-icon">
                        <i className={`${step.icon} text-primary`}></i>
                      </div>
                      <div className="timeline-content">
                        <h5>{step.title}</h5>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="process-image wow fadeInRight" data-wow-duration="0.8s">
                  <img src={`${baseUrl}/welcome/images/banner/bnr2.jpg`} alt="Our Process" className="img-fluid rounded shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="section-full bg-gray content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Key Features</h6>
              <h2>What Makes Us Different</h2>
            </div>
            <div className="row">
              {[
                { icon: 'fas fa-clock', title: 'Fast Delivery', desc: 'Quick turnaround times without compromising quality' },
                { icon: 'fas fa-shield-alt', title: 'Secure Solutions', desc: 'Enterprise-grade security for all your digital assets' },
                { icon: 'fas fa-chart-line', title: 'Proven Results', desc: 'Data-driven strategies that deliver measurable outcomes' },
                { icon: 'fas fa-users-cog', title: 'Expert Team', desc: 'Skilled professionals with years of industry experience' },
                { icon: 'fas fa-mobile-alt', title: 'Responsive Design', desc: 'Mobile-first approach for all devices and platforms' },
                { icon: 'fas fa-sync-alt', title: '24/7 Support', desc: 'Round-the-clock assistance whenever you need us' }
              ].map((feature, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="feature-item wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                    <div className="feature-icon">
                      <i className={`${feature.icon} fa-2x text-primary`}></i>
                    </div>
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
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
              <h2 className="text-white mb-3">Ready to Transform Your Business?</h2>
              <p className="text-white mb-4">Let's discuss how we can help you achieve your digital goals</p>
              <a href="/contact" className="btn btn-light btn-lg btn-rounded">Start Your Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

