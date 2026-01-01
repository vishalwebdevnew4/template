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

  // Portfolio items with all templates from DexignZone
  const portfolioItems = [
    {
      title: 'ClinicMaster',
      category: 'Medical & Hospital',
      image: '/images/portfolio/clinicmaster.png',
      description: 'Medical Hospital & Doctor Multipurpose Bootstrap HTML Template'
    },
    {
      title: 'InkVoice',
      category: 'Blog & Magazine',
      image: '/images/portfolio/inkvoice.png',
      description: 'Creative Blog & Magazine Bootstrap HTML Template'
    },
    {
      title: 'Footflare',
      category: 'E-Commerce',
      image: '/images/portfolio/footflare.png',
      description: 'Shop & eCommerce Bootstrap HTML Template'
    },
    {
      title: 'PlantZone',
      category: 'E-Commerce',
      image: '/images/portfolio/plantzone.png',
      description: 'Shop & eCommerce Bootstrap HTML Template'
    },
    {
      title: 'W3Music',
      category: 'Music & Entertainment',
      image: '/images/portfolio/w3music.png',
      description: 'Music, Band, DJ Bootstrap HTML Template'
    },
    {
      title: 'Pixio',
      category: 'E-Commerce',
      image: '/images/portfolio/pixio.png',
      description: 'Shop & eCommerce Bootstrap HTML Template'
    },
    {
      title: 'PowerZone',
      category: 'Fitness & Gym',
      image: '/images/portfolio/powerzone.png',
      description: 'Fitness, Workout & Gym HTML Template'
    },
    {
      title: 'Swigo',
      category: 'Restaurant & Food',
      image: '/images/portfolio/swigo.png',
      description: 'Fast Food And Restaurant HTML Template'
    },
    {
      title: 'BodyClub',
      category: 'Fitness & Gym',
      image: '/images/portfolio/bodyclub.png',
      description: 'Fitness, Workout & Gym HTML Template'
    },
    {
      title: 'BodyShape',
      category: 'Fitness & Gym',
      image: '/images/portfolio/bodyshape.png',
      description: 'Fitness, Workout & Gym HTML Template'
    },
    {
      title: 'Akcel',
      category: 'Charity & Crowdfunding',
      image: '/images/portfolio/akcel.png',
      description: 'Crowdfunding & Charity HTML5 Template'
    },
    {
      title: 'Bookland',
      category: 'E-Commerce',
      image: '/images/portfolio/bookland.png',
      description: 'Bookstore E-commerce Bootstrap 5 HTML Template'
    },
    {
      title: 'Industry',
      category: 'Industrial & Factory',
      image: '/images/portfolio/industry.png',
      description: 'Factory & Industrial Template + RTL Ready'
    },
    {
      title: 'ConstructZilla',
      category: 'Construction',
      image: '/images/portfolio/constructzilla.png',
      description: 'Construction, Renovation & Building Bootstrap 4 & 5 Template With RTL Ready'
    },
    {
      title: 'Agency',
      category: 'Creative Agency',
      image: '/images/portfolio/agency.png',
      description: 'Creative Multipurpose HTML with RTL Ready'
    },
    {
      title: 'CargoZone',
      category: 'Transport & Logistics',
      image: '/images/portfolio/cargozone.png',
      description: 'Transport, Cargo, Logistics & Business Multipurpose HTML Template'
    },
    {
      title: 'MediCo',
      category: 'Medical & Hospital',
      image: '/images/portfolio/medico.png',
      description: 'Covid-19 & Hospital Doctor & Medical Clinic HTML Template'
    },
    {
      title: 'ButterFly',
      category: 'Beauty & Spa',
      image: '/images/portfolio/butterfly.png',
      description: 'Spa, Beauty Salon & Massage Template'
    },
    {
      title: 'Job Board',
      category: 'Job Portal',
      image: '/images/portfolio/jobboard.png',
      description: 'Job Portal HTML Template + RTL'
    },
    {
      title: 'YogaZone',
      category: 'Fitness & Yoga',
      image: '/images/portfolio/yogazone.png',
      description: 'Yoga, Fitness & Meditation Mobile Responsive Bootstrap Html Template'
    },
    {
      title: 'GardenZone',
      category: 'Agriculture',
      image: '/images/portfolio/gardenzone.png',
      description: 'Agriculture, Gardening & Landscaping Responsive HTML Template'
    },
    {
      title: 'Construct',
      category: 'Construction',
      image: '/images/portfolio/construct.png',
      description: 'Construction, Building & Maintenance Business Template'
    },
    {
      title: 'BeautyZone',
      category: 'Beauty & Spa',
      image: '/images/portfolio/beautyzone-html.png',
      description: 'Beauty Spa Salon & Massage HTML Template'
    },
    {
      title: 'EduZone',
      category: 'Education',
      image: '/images/portfolio/eduzone.png',
      description: 'Education Course & School Template + Admin Dashboard'
    },
    {
      title: 'Archia',
      category: 'Architecture',
      image: '/images/portfolio/archia.png',
      description: 'Architecture and Interior Design RTL Ready Template'
    },
    {
      title: 'Wedding Manager',
      category: 'Event Management',
      image: '/images/portfolio/wedding-manager.png',
      description: 'Manage Wedding Events and Vendor Listing Event Management WireFrame'
    },
    {
      title: 'CoviMap',
      category: 'Medical',
      image: '/images/portfolio/covimap.png',
      description: 'Coronavirus (Covid-19) Medical Prevention Template'
    },
    {
      title: 'RestroKing',
      category: 'Restaurant & Food',
      image: '/images/portfolio/restroking.png',
      description: 'Cake Pizza & Bakery Bootstrap 4 Template'
    },
    {
      title: 'Frost',
      category: 'Coming Soon',
      image: '/images/portfolio/frost.png',
      description: 'Coming Soon, Under Construction Bootstrap 4 Template'
    },
    {
      title: 'KingArchitect',
      category: 'Architecture',
      image: '/images/portfolio/kingarchitect.png',
      description: 'Creative Interior Design Website Template'
    },
    {
      title: 'LeMars',
      category: 'Blog',
      image: '/images/portfolio/lemars.png',
      description: 'Personal Blog Bootstrap 4 Template With PSD Files'
    },
    {
      title: 'Karciz',
      category: 'Event Management',
      image: '/images/portfolio/karciz.png',
      description: 'Event Ticketing Bootstrap Admin Template'
    },
    {
      title: 'CURV',
      category: 'Multipurpose',
      image: '/images/portfolio/curv.png',
      description: 'One Page Multipurpose Parallax'
    },
    {
      title: 'TradeZone',
      category: 'Industrial',
      image: '/images/portfolio/tradezone.png',
      description: 'Factory & Industrial One Page HTML Template'
    },
    {
      title: 'ConsultZone',
      category: 'Consulting',
      image: '/images/portfolio/consultzone.png',
      description: 'Multipurpose Consulting Bootstrap 5 HTML Template + RTL version'
    },
    {
      title: 'Lavi',
      category: 'Beauty & Spa',
      image: '/images/portfolio/lavi.png',
      description: 'Beauty Spa Salon Makeup Parlour Bootstrap 4 Template'
    },
    {
      title: 'Zapolo',
      category: 'Agency & Software',
      image: '/images/portfolio/zapolo.png',
      description: 'Agency App & Software Bootstrap 5 HTML Template'
    },
    {
      title: 'Mazo',
      category: 'Industrial',
      image: '/images/portfolio/mazo.png',
      description: 'Industry & Factory Bootstrap 5 HTML Template + RTL'
    },
    {
      title: 'Shivaa',
      category: 'Creative Agency',
      image: '/images/portfolio/shivaa.png',
      description: 'Creative Agency Bootstrap Template'
    },
    {
      title: 'ArchCode',
      category: 'Architecture',
      image: '/images/portfolio/archcode.png',
      description: 'Architecture Bootstrap 5 HTML Template'
    },
    {
      title: 'Visva',
      category: 'Architecture',
      image: '/images/portfolio/visva.png',
      description: 'Architect & Interior Design Bootstrap 5 Template'
    },
    {
      title: 'CoDesign',
      category: 'Architecture',
      image: '/images/portfolio/codesign.png',
      description: 'Architect & Interior Design HTML Template'
    },
    {
      title: 'Samar',
      category: 'Creative Agency',
      image: '/images/portfolio/samar.png',
      description: 'Creative Agency Bootstrap Template'
    },
    {
      title: 'SportsZone',
      category: 'Sports',
      image: '/images/portfolio/sportszone.png',
      description: 'Sports Club, New & Game Magazine Mobile Responsive Bootstrap HTML Template'
    },
    {
      title: 'BizMap',
      category: 'Business Directory',
      image: '/images/portfolio/bizmap.png',
      description: 'Business Directory Listing HTML Template'
    },
    {
      title: 'Kelsey',
      category: 'Blog',
      image: '/images/portfolio/kelsey.png',
      description: 'Creative Personal Blog HTML Template'
    },
    {
      title: 'Umang Academy',
      category: 'Education',
      image: '/images/portfolio/umang.png',
      description: 'Kindergarden, Kids Play School Template'
    },
    {
      title: 'Bucklin',
      category: 'Blog',
      image: '/images/portfolio/bucklin.png',
      description: 'Creative Personal Blog HTML Template'
    },
    {
      title: 'SmartClass',
      category: 'Education',
      image: '/images/portfolio/smartclass.png',
      description: 'Education Agency Coaching & Tuition HTML Template'
    },
    {
      title: 'SMART',
      category: 'Corporate Agency',
      image: '/images/portfolio/smart.png',
      description: 'Creative Corporate Agency Template'
    },
    {
      title: 'MyDiary',
      category: 'Blog & Magazine',
      image: '/images/portfolio/mydiary.png',
      description: 'Newspaper Magazine & Personal Blog HTML Template'
    },
    {
      title: 'Corella',
      category: 'Medical',
      image: '/images/portfolio/corella.png',
      description: 'Coronavirus (COVID-19) Social Awareness And Medical Prevention Template'
    },
    {
      title: 'Indiro',
      category: 'Industrial',
      image: '/images/portfolio/indiro.png',
      description: 'Factory and Industry Bootstrap 5 HTML Template + RTL'
    }
  ];

  return (
    <div className="page-wraper">
      <div className="page-content bg-white">
        <Header />
        
        {/* Portfolio Hero */}
        <div className="welcome-banner overlay-black-dark dez-move-image" style={{backgroundImage: `url(/images/banner/bg1.jpg)`}}>
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
                    <img src="/images/pic1.jpg" alt="Client" width="60" height="60" className="rounded-circle" onError={(e) => e.target.style.display = 'none'} />
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
                    <img src="/images/pic1.jpg" alt="Client" width="60" height="60" className="rounded-circle" onError={(e) => e.target.style.display = 'none'} />
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
                    <img src="/images/pic1.jpg" alt="Client" width="60" height="60" className="rounded-circle" onError={(e) => e.target.style.display = 'none'} />
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
                { title: 'E-Commerce', count: '4+', icon: 'fas fa-shopping-cart', color: 'primary' },
                { title: 'Medical & Hospital', count: '3+', icon: 'fas fa-hospital', color: 'success' },
                { title: 'Fitness & Gym', count: '4+', icon: 'fas fa-dumbbell', color: 'warning' },
                { title: 'Architecture', count: '5+', icon: 'fas fa-building', color: 'info' },
                { title: 'Creative Agency', count: '4+', icon: 'fas fa-paint-brush', color: 'danger' },
                { title: 'Restaurant & Food', count: '2+', icon: 'fas fa-utensils', color: 'primary' },
                { title: 'Education', count: '3+', icon: 'fas fa-graduation-cap', color: 'success' },
                { title: 'Industrial', count: '4+', icon: 'fas fa-industry', color: 'warning' },
                { title: 'Blog & Magazine', count: '4+', icon: 'fas fa-newspaper', color: 'info' },
                { title: 'Beauty & Spa', count: '3+', icon: 'fas fa-spa', color: 'danger' },
                { title: 'Event Management', count: '2+', icon: 'fas fa-calendar-alt', color: 'primary' },
                { title: 'Consulting', count: '1+', icon: 'fas fa-briefcase', color: 'success' }
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
                { number: '53+', label: 'Templates Created', icon: 'fas fa-project-diagram' },
                { number: '23,500+', label: 'Happy Clients', icon: 'fas fa-smile' },
                { number: '160+', label: 'Total Products', icon: 'fas fa-box' },
                { number: '8+', label: 'Years Experience', icon: 'fas fa-award' }
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

