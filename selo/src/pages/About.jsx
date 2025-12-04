import { useEffect } from 'react';
import Header from '../components/Header';
import './About.css';

const About = () => {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const baseUrl = 'https://swigo.dexignzone.com';

  return (
    <div className="page-wraper">
      <div className="page-content bg-white">
        <Header />
        
        {/* About Hero Section */}
        <div className="welcome-banner overlay-black-dark dez-move-image" style={{backgroundImage: `url(${baseUrl}/welcome/images/banner/bg1.jpg)`}}>
          <div className="welcome-content">
            <h1 className="title">About <span>Our Agency</span></h1>
            <p className="subtitle">We transform businesses through innovative digital solutions</p>
          </div>
        </div>

        {/* About Content Section */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-head title-box wow fadeInLeft" data-wow-duration="0.8s">
                  <h6 className="sub-title text-secondary">Who We Are</h6>
                  <h2>Leading Digital Agency</h2>
                  <p>We are a full-service digital agency specializing in website development, networking solutions, business consulting, SEO optimization, and mobile app development. With over 10 years of experience, we help businesses grow and succeed in the digital world.</p>
                  <p>Our team of 50+ experts combines creativity with technical expertise to deliver solutions that drive measurable results. We understand that every business is unique, which is why we tailor our services to meet your specific needs and goals.</p>
                  <div className="mt-4">
                    <a href="/contact" className="btn btn-primary btn-lg">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-wrapper wow fadeInRight" data-wow-duration="0.8s">
                  <img src={`${baseUrl}/welcome/images/banner/bnr1.jpg`} alt="About Us" className="img-fluid rounded shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="section-full bg-gray content-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="mission-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">
                  <div className="mission-icon">
                    <i className="fas fa-bullseye fa-3x text-primary"></i>
                  </div>
                  <h3>Our Mission</h3>
                  <p>To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create lasting value. We strive to be the trusted partner that helps our clients achieve their digital transformation goals and exceed their expectations.</p>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="vision-box wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.4s">
                  <div className="vision-icon">
                    <i className="fas fa-eye fa-3x text-primary"></i>
                  </div>
                  <h3>Our Vision</h3>
                  <p>To be the leading digital agency recognized for innovation, excellence, and client success. We envision a future where every business has the digital tools and strategies needed to thrive in an ever-evolving marketplace and achieve sustainable growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Values</h6>
              <h2>What Drives Us</h2>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="value-box text-center wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
                  <div className="icon-box">
                    <i className="fas fa-lightbulb fa-3x text-primary"></i>
                  </div>
                  <h4>Innovation</h4>
                  <p>We stay ahead of trends and leverage the latest technologies to deliver innovative solutions that give our clients a competitive edge in the digital landscape.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="value-box text-center wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.3s">
                  <div className="icon-box">
                    <i className="fas fa-handshake fa-3x text-primary"></i>
                  </div>
                  <h4>Integrity</h4>
                  <p>We build trust through transparency, honesty, and ethical business practices in everything we do. Your success is our commitment.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="value-box text-center wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.5s">
                  <div className="icon-box">
                    <i className="fas fa-trophy fa-3x text-primary"></i>
                  </div>
                  <h4>Excellence</h4>
                  <p>We are committed to delivering exceptional quality and exceeding client expectations. Every project is executed with precision and care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="section-full bg-gray content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Team</h6>
              <h2>Meet The Experts</h2>
              <p>Our talented team of professionals brings years of experience and passion to every project.</p>
            </div>
            <div className="row">
              {[
                { name: 'John Smith', role: 'CEO & Founder', img: 'pic1.jpg' },
                { name: 'Sarah Johnson', role: 'Creative Director', img: 'pic1.jpg' },
                { name: 'Michael Chen', role: 'Lead Developer', img: 'pic1.jpg' },
                { name: 'Emily Davis', role: 'Marketing Head', img: 'pic1.jpg' }
              ].map((member, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-4">
                  <div className="team-box text-center wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                    <div className="team-image">
                      <img src={`${baseUrl}/welcome/images/${member.img}`} alt={member.name} className="img-fluid rounded-circle" />
                      <div className="team-overlay">
                        <div className="team-social">
                          <a href="#"><i className="fab fa-facebook-f"></i></a>
                          <a href="#"><i className="fab fa-twitter"></i></a>
                          <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                    <h5>{member.name}</h5>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Process</h6>
              <h2>How We Work</h2>
            </div>
            <div className="row">
              {[
                { step: '01', title: 'Discovery', desc: 'We understand your business goals and requirements', icon: 'fas fa-search' },
                { step: '02', title: 'Planning', desc: 'We create a detailed strategy and roadmap', icon: 'fas fa-clipboard-list' },
                { step: '03', title: 'Development', desc: 'We build your solution with precision and care', icon: 'fas fa-code' },
                { step: '04', title: 'Launch', desc: 'We deploy and optimize for maximum performance', icon: 'fas fa-rocket' }
              ].map((process, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-4">
                  <div className="process-box text-center wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                    <div className="process-number">{process.step}</div>
                    <div className="process-icon">
                      <i className={`${process.icon} fa-3x text-primary`}></i>
                    </div>
                    <h4>{process.title}</h4>
                    <p>{process.desc}</p>
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
              <h2 className="text-white mb-3">Ready to Start Your Project?</h2>
              <p className="text-white mb-4">Let's work together to bring your vision to life</p>
              <a href="/contact" className="btn btn-light btn-lg btn-rounded">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


