import { useEffect, useState } from 'react';
import Header from '../components/Header';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const baseUrl = 'https://swigo.dexignzone.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      details: '123 Business Street, Suite 100<br />City, State 12345'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: '+1 (555) 123-4567<br />+1 (555) 123-4568'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'info@agency.com<br />support@agency.com'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM'
    }
  ];

  return (
    <div className="page-wraper">
      <div className="page-content bg-white">
        <Header />
        
        {/* Contact Hero */}
        <div className="welcome-banner overlay-black-dark dez-move-image" style={{backgroundImage: `url(/images/banner/bg1.jpg)`}}>
          <div className="welcome-content">
            <h1 className="title">Contact <span>Us</span></h1>
            <p className="subtitle">Get in touch with our team</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Get In Touch</h6>
              <h2>Let's Discuss Your Project</h2>
            </div>
            <div className="row">
              {/* Contact Form */}
              <div className="col-lg-8">
                <div className="contact-form-box wow fadeInLeft" data-wow-duration="0.6s">
                  <h4>Send Us a Message</h4>
                  <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Subject *"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-4">
                <div className="contact-info-box wow fadeInRight" data-wow-duration="0.6s">
                  <h4>Contact Information</h4>
                  <p className="info-subtitle">We're here to help! Reach out to us through any of these channels.</p>
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-item wow fadeInUp" data-wow-duration="0.5s" data-wow-delay={`${index * 0.1}s`}>
                      <div className="contact-icon">
                        <i className={info.icon}></i>
                      </div>
                      <div className="contact-details">
                        <h5>{info.title}</h5>
                        <p dangerouslySetInnerHTML={{ __html: info.details }}></p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Section */}
                <div className="map-box mt-4">
                  <h5>Find Us</h5>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132255234!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{border: 0}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="section-full bg-gray content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Frequently Asked Questions</h6>
              <h2>Got Questions? We Have Answers</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {[
                  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while complex applications may take 2-3 months. We provide detailed timelines during the consultation phase.' },
                  { q: 'What is your pricing structure?', a: 'We offer flexible pricing based on project requirements. We provide detailed quotes after understanding your needs. Contact us for a free consultation and customized quote.' },
                  { q: 'Do you provide ongoing support?', a: 'Yes, we offer comprehensive support packages including maintenance, updates, and 24/7 technical assistance to ensure your digital solutions continue to perform optimally.' },
                  { q: 'What technologies do you work with?', a: 'We work with a wide range of modern technologies including React, Vue, Node.js, PHP, Python, and more. We choose the best technology stack based on your project requirements.' }
                ].map((faq, index) => (
                  <div key={index} className="faq-item mb-3 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                    <div className="faq-question">
                      <h5><i className="fas fa-question-circle text-primary me-2"></i>{faq.q}</h5>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="section-full content-inner">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Offices</h6>
              <h2>Visit Us</h2>
            </div>
            <div className="row">
              {[
                { city: 'New York', address: '123 Business Street, Suite 100', phone: '+1 (555) 123-4567' },
                { city: 'London', address: '456 Innovation Avenue, Floor 5', phone: '+44 20 1234 5678' },
                { city: 'Tokyo', address: '789 Digital Plaza, Building A', phone: '+81 3 1234 5678' }
              ].map((office, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="office-box text-center wow fadeInUp" data-wow-duration="0.6s" data-wow-delay={`${index * 0.1}s`}>
                    <div className="office-icon">
                      <i className="fas fa-building fa-3x text-primary"></i>
                    </div>
                    <h4>{office.city}</h4>
                    <p>{office.address}</p>
                    <p className="text-primary"><i className="fas fa-phone me-2"></i>{office.phone}</p>
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
              <h2 className="text-white mb-3">Let's Start a Conversation</h2>
              <p className="text-white mb-4">We're here to help you achieve your digital goals</p>
              <a href="/contact" className="btn btn-light btn-lg btn-rounded">Contact Us Today</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

