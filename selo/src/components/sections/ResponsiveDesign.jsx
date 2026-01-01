import './ResponsiveDesign.css';

const ResponsiveDesign = () => {
  const devices = [
    { name: 'Home', type: 'mobile' },
    { name: 'Home', type: 'tablet' },
    { name: 'Home', type: 'mobile' },
    { name: 'Home', type: 'tablet' },
    { name: 'Home', type: 'mobile' },
    { name: 'Home', type: 'tablet' },
    { name: 'Home', type: 'mobile' },
    { name: 'Home', type: 'tablet' }
  ];

  return (
    <section className="responsive-section section">
      <div className="container">
        <div className="section-title">
          <span className="section-badge">RESPONSIVE SIZE</span>
          <h2>Responsive Design For Mobile And Tablet</h2>
        </div>
        <div className="row">
          {devices.map((device, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay={index * 100}
            >
              <div className="device-preview">
                <div className={`device-frame ${device.type}`}>
                  <div className="device-screen">
                    <img 
                      src={`https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=${device.type === 'mobile' ? '200' : '300'}&h=400&fit=crop&q=80`}
                      alt={device.name}
                      className="device-screen-image"
                    />
                    <div className="screen-content">
                      <span>{device.name}</span>
                    </div>
                  </div>
                </div>
                <p className="device-label">{device.name} - {device.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="#help" className="help-link">Need Any Help Link</a>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveDesign;

