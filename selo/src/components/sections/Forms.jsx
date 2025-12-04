import { useState } from 'react';
import './Forms.css';

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="forms-section section">
      <div className="container">
        <div className="section-title">
          <span className="section-badge">Working Php Forms</span>
          <h2>Ready to Use Awesome Form</h2>
          <p>Don't go by our Words, checkout awesome demos and verify yourself. Save 1000s of hours of designing and coding work as we already did that for you.</p>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="form-feature-card">
              <div className="form-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Running Contact Form</h4>
              <p>Fully functional contact form ready to use with PHP backend integration.</p>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="form-feature-card">
              <div className="form-icon">
                <i className="fab fa-mailchimp"></i>
              </div>
              <h4>Mailchimp Ready</h4>
              <p>Integrated with Mailchimp for newsletter subscriptions and email marketing.</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="contact-form-wrapper">
              <h3 className="text-center mb-4">Contact Us</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="#help" className="help-link">Need Any Help Link</a>
        </div>
      </div>
    </section>
  );
};

export default Forms;

