import './Features.css';

const Features = () => {
  const features = [
    'Bootstrap v5.3.3',
    'JQuery 3.7.1',
    '100% Responsive',
    'High Performance',
    'Fully Customizable',
    'Easy to Use',
    'Unlimited Options',
    'W3C Validated',
    'Touch Enabled',
    'Mailchamp',
    'Use Sass',
    'Mega Menu',
    'Well Documented',
    'Cross Browser',
    'Modern Design',
    'Category Style',
    'Masonry',
    'Swiper js',
    'Lifetime Updates',
    'Search options',
    'Google Fonts',
    'FontAwesome Icons'
  ];

  return (
    <section className="features-section section">
      <div className="container">
        <div className="section-title">
          <span className="section-badge">Our Features</span>
          <h2>Exclusive Features that Differentiate Our Website</h2>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 50}
            >
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h5>{feature}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

