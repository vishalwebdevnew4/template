import { Link } from 'react-router-dom';

const Footer = () => {
  const baseUrl = 'https://swigo.dexignzone.com';

  return (
    <footer className="site-footer style1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget_about">
                <h4 className="footer-title">Reliable and Regular Updates </h4>
                <p>Get a lifetime reliable & regular updates with your purchase.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget_about">
                <h4 className="footer-title">
                  <img src={`${baseUrl}/welcome/images/elite.svg`} width="30" className="me-2" alt="" />
                  8 Years+ Envato Exclusive Author
                </h4>
                <p>DexignZone is a time-tested author with year's experience.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget_about">
                <h4 className="footer-title">5-Star Customer Support</h4>
                <p>More than 3000 resolved inquiries and happy customer reviews.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget_about">
                <h4 className="footer-title">Customers Feedback Appreciative</h4>
                <p>Have a good idea or improvement? It can be ended up in our updates!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-buynow">
            <div className="footer-head">
              <div className="m-b10 text-primary">Purchase now</div>
              <h4 className="footer-title">Get your theme right now<br />and create your awesome site.</h4>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-md-12 m-b30">
              <div className="package-box">
                <div className="footer-title">Include<br />In<br />Package:</div>
                <div className="figure">{'{'}</div>
                <div className="package-list">
                  <ul className="col">
                    <li>Swigo template</li>
                    <li>Premium bundled plugins</li>
                    <li>6 month support included</li>
                  </ul>
                  <ul className="col">
                    <li>Free future template updates</li>
                    <li>Quality checked by Envato</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-5 m-b30 d-lg-none d-xl-block">
              <div className="money-back">
                <img src={`${baseUrl}/welcome/images/30day.png`} alt="" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6 col-7 m-b30">
              <div className="extra-buy-btn">
                <div className="text-right m-b10">
                  <a href="javascript:void(0);" target="_blank" className="btn btn-primary detail-btn DZBuyNowRegularBtn">
                    <img src={`${baseUrl}/welcome/images/shopping-cart-primary.svg`} alt="" />
                    <span className="text">Regular <br />License</span>
                    <span className="value">$23</span>
                  </a>
                </div>
                <div className="text-right">
                  <a href="javascript:void(0);" target="_blank" className="btn btn-primary detail-btn DZBuyNowExtendedBtn">
                    <img src={`${baseUrl}/welcome/images/shopping-cart-primary.svg`} alt="" />
                    <span className="text">Extended <br />License</span>
                    <span className="value">$599</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom footer-line">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span>Copyright © <span className="current-year">2024</span> <a href="https://dexignzone.com/" className="text-primary" target="_blank" rel="noopener noreferrer">DexignZone</a>. all rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
