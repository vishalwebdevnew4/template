import './InnerPages.css';

const InnerPages = () => {
  const pages = [
    'About Us', 'Faq\'s', 'Service', 'Service Detail', 'Our Menu 1', 'Our Menu 2',
    'Our Menu 3', 'Our Menu 4', 'Our Menu 5', 'Shop Style 1', 'Shop Style 2',
    'Shop Cart', 'Shop Wishlist', 'Shop Checkout', 'Product Detail', 'Blog Grid 3',
    'Blog Grid Left Sidebar', 'Blog Grid Right Sidebar', 'Blog List', 'Blog List Left Sidebar',
    'Blog List Right Sidebar', 'Blog Both Sidebar', 'Blog Standard', 'Blog Open Gutenberg',
    'Blog Detail Left Sidebar', 'Blog Detail Right Sidebar', 'Blog Grid 3 Masonary',
    'Blog Grid 4 Masonary', 'Blog Wide List Sidebar', 'Blog Wide Grid Sidebar',
    'Contact Us', 'Testimonial', 'Team', 'Team Detail', 'Coming Soon',
    'Under Construction', 'Error 404'
  ];

  return (
    <section className="inner-pages-section section">
      <div className="container">
        <div className="section-title">
          <span className="section-badge">40+ Inner Pages</span>
          <h2>Discover Your Website with Our Awesome Inner Pages</h2>
          <p>All Required Pages For Developer</p>
        </div>
        <div className="row">
          {pages.map((page, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-4 col-sm-6 mb-3"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index % 10 * 50}
            >
              <div className="inner-page-card">
                <div className="page-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h5>{page}</h5>
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

export default InnerPages;

