import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta-content">
          <h2>Get Started with Swigo Today</h2>
          <p>Purchase now and create your awesome restaurant website</p>
          <div className="cta-buttons">
            <a href="#buy" className="btn btn-primary btn-lg">Buy Now</a>
          </div>
        </div>
        <div className="help-section">
          <div className="section-title">
            <span className="section-badge">Do You Need</span>
            <h2>Do You Need Help To Customization</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="help-card">
                <h4>After Purchase A Template...</h4>
                <p>You Will Start Customizing According Your Requirement BUT What If You Don't Know</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="help-card highlight">
                <h4>SOLUTION IS HIRE DexignZone</h4>
                <p>Hire Same Team For Quality Customization</p>
                <ul>
                  <li>In Order To Ensure Your Website Is Live, We Will Customize The Template According To Your Requirements And Upload It to the Server.</li>
                </ul>
                <div className="help-buttons">
                  <a href="#buy" className="btn btn-primary">Buy Now</a>
                  <a href="#support" className="btn btn-outline">Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-section">
          <div className="section-title">
            <h2>Get your theme right now and create your awesome site.</h2>
            <p>Include In Package:</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Regular License</h3>
              <div className="price">$23</div>
              <ul className="package-features">
                <li>Swigo template</li>
                <li>Premium bundled plugins</li>
                <li>6 month support included</li>
                <li>Free future template updates</li>
                <li>Quality checked by Envato</li>
              </ul>
              <a href="#buy" className="btn btn-primary w-100">Purchase Regular</a>
            </div>
            <div className="pricing-card featured">
              <h3>Extended License</h3>
              <div className="price">$599</div>
              <ul className="package-features">
                <li>Swigo template</li>
                <li>Premium bundled plugins</li>
                <li>6 month support included</li>
                <li>Free future template updates</li>
                <li>Quality checked by Envato</li>
                <li>Use in multiple projects</li>
              </ul>
              <a href="#buy" className="btn btn-primary w-100">Purchase Extended</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

