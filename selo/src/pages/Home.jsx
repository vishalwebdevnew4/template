import { useEffect } from 'react';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Initialize WOW.js if available
    if (window.WOW) {
      new window.WOW().init();
    }

    // Initialize Owl Carousels
    if (window.$ && window.$.fn.owlCarousel) {
      // Responsive Design Carousel
      window.$('.inner-frame.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
          1200: { items: 4 }
        }
      });

      // Testimonials Carousel
      window.$('.testimonial-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 }
        }
      });

      // Forms Carousel
      const formsCarousel = window.$('.responsive-carousel.owl-carousel');
      formsCarousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: { items: 1 },
          768: { items: 2 }
        }
      });

      // Forms Carousel Navigation
      window.$('#next-slide').on('click', function() {
        formsCarousel.trigger('next.owl.carousel');
      });
      window.$('#prev-slide').on('click', function() {
        formsCarousel.trigger('prev.owl.carousel');
      });

      // Awards Carousel
      window.$('.awards-carousel.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: { items: 2 },
          768: { items: 3 },
          1024: { items: 4 },
          1200: { items: 5 }
        }
      });
    }
  }, []);

  // Inner pages data
  const innerPages = [
    { name: 'About Us', img: 'about-us.jpg', link: 'about-us.html' },
    { name: "Faq's", img: 'faqs.jpg', link: 'faq.html' },
    { name: 'Service', img: 'service.jpg', link: 'services.html' },
    { name: 'Service Detail', img: 'service-detail.jpg', link: 'service-detail.html' },
    { name: 'Our Menu 1', img: 'menu1.jpg', link: 'our-menu-1.html' },
    { name: 'Our Menu 2', img: 'menu2.jpg', link: 'our-menu-2.html' },
    { name: 'Our Menu 3', img: 'menu3.jpg', link: 'our-menu-3.html' },
    { name: 'Our Menu 4', img: 'menu4.jpg', link: 'our-menu-4.html' },
    { name: 'Our Menu 5', img: 'menu5.jpg', link: 'our-menu-5.html' },
    { name: 'Shop Style 1', img: 'shop-style1.jpg', link: 'shop-style-1.html' },
    { name: 'Shop Style 2', img: 'shop-style2.jpg', link: 'shop-style-2.html' },
    { name: 'Shop Cart', img: 'cart.jpg', link: 'shop-cart.html' },
    { name: 'Shop Wishlist', img: 'wishlist.jpg', link: 'shop-wishlist.html' },
    { name: 'Shop Checkout', img: 'checkout.jpg', link: 'shop-checkout.html' },
    { name: 'Product Detail', img: 'product-detail.jpg', link: 'product-detail.html' },
    { name: 'Blog Grid 3', img: 'blog-grid-3.jpg', link: 'blog-grid-3.html' },
    { name: 'Blog Grid Left Sidebar', img: 'blog-grid-left-sidebar.jpg', link: 'blog-grid-left-sidebar.html' },
    { name: 'Blog Grid Right Sidebar', img: 'blog-grid-right-sidebar.jpg', link: 'blog-grid-right-sidebar.html' },
    { name: 'Blog List', img: 'blog-list.jpg', link: 'blog-list-no-sidebar.html' },
    { name: 'Blog List Left Sidebar', img: 'blog-list-left-sidebar.jpg', link: 'blog-list-left-sidebar.html' },
    { name: 'Blog List Right Sidebar', img: 'blog-list-right-sidebar.jpg', link: 'blog-list-right-sidebar.html' },
    { name: 'Blog Both Sidebar', img: 'blog-both-sidebar.jpg', link: 'blog-grid-both-sidebar.html' },
    { name: 'Blog Standard', img: 'blog-standard.jpg', link: 'blog-standard.html' },
    { name: 'Blog Open Gutenberg', img: 'blog-open-gutenberg.jpg', link: 'blog-open-gutenberg.html' },
    { name: 'Blog Detail Left Sidebar', img: 'blog-detail-left-sidebar.jpg', link: 'blog-detail-left-sidebar.html' },
    { name: 'Blog Detail Right Sidebar', img: 'blog-detail-right-sidebar.jpg', link: 'blog-detail-right-sidebar.html' },
    { name: 'Blog Grid 3 Masonary', img: 'blog-grid-3-masonary.jpg', link: 'blog-grid-3-masonary.html' },
    { name: 'Blog Grid 4 Masonary', img: 'blog-grid-4-masonary.jpg', link: 'blog-grid-4-masonary.html' },
    { name: 'Blog Wide List Sidebar', img: 'blog-wide-list-sidebar.jpg', link: 'blog-wide-list-sidebar.html' },
    { name: 'Blog Wide Grid Sidebar', img: 'blog-wide-grid-sidebar.jpg', link: 'blog-wide-grid-sidebar.html' },
    { name: 'Contact Us', img: 'contact-us.jpg', link: 'contact-us.html' },
    { name: 'Testimonial', img: 'testimonial.jpg', link: 'testimonial.html' },
    { name: 'Team', img: 'team.jpg', link: 'team.html' },
    { name: 'Team Detail', img: 'team-detail.jpg', link: 'team-detail.html' },
    { name: 'Coming Soon', img: 'coming-soon.jpg', link: 'coming-soon.html' },
    { name: 'Under Construction', img: 'under-construction.jpg', link: 'under-maintenance.html' },
    { name: 'Error 404', img: 'error-404.jpg', link: 'error-404.html' }
  ];

  // Features data
  const features = [
    { icon: '1.png', title: 'Bootstrap v5.3.3', class: 'features-bootstrap', delay: '0.1s' },
    { icon: '30.png', title: 'JQuery 3.7.1', delay: '0.2s' },
    { icon: '3.png', title: '100% Responsive', delay: '0.3s' },
    { icon: '4.png', title: 'High Performance', delay: '0.4s' },
    { icon: '5.png', title: 'Fully Customizable', delay: '0.5s' },
    { icon: '6.png', title: 'Easy to Use', delay: '0.6s' },
    { icon: '7.png', title: 'Unlimited Options', delay: '0.7s' },
    { icon: '9.png', title: 'W3C Validated', delay: '0.9s' },
    { icon: '10.png', title: 'Touch Enabled', delay: '1.0s' },
    { icon: '37.png', title: 'Mailchamp', delay: '1.1s' },
    { icon: '40.png', title: 'Use Sass', class: 'features-sass', delay: '1.2s' },
    { icon: '15.png', title: 'Mega Menu', delay: '1.3s' },
    { icon: '16.png', title: 'Well Documented', delay: '1.4s' },
    { icon: '17.png', title: 'Cross Browser', delay: '1.5s' },
    { icon: '18.png', title: ' Modern Design', delay: '1.6s' },
    { icon: '19.png', title: ' Category Style', delay: '1.7s' },
    { icon: '20.png', title: 'Masonry', delay: '1.8s' },
    { icon: '21.png', title: 'Swiper js', delay: '1.9s' },
    { icon: '23.png', title: 'Lifetime Updates', class: 'features-updates', delay: '2.0s' },
    { icon: '6.png', title: 'Search options', delay: '2.1s' },
    { icon: '24.png', title: 'Google Fonts', delay: '2.2s' },
    { icon: '25.png', title: 'FontAwesome Icons', delay: '2.3s' }
  ];

  // Testimonials data
  const testimonials = [
    { title: 'Code Quality', author: 'vgnocchi', text: "Mind Blowing design and coding quality, easy to customize, easy to use and I just loving to work with this template. I can use it's any section any where easily. CSS, JS and even HTML everything is perfect and I can say for this item , this is really Created With Love, Thank you so much Team." },
    { title: 'Flexibility', author: 'ary-themes', text: "I like it's beautiful design and fast support of team. 5 beautiful home screens make me happy, I can change screen any time and home page I can choose for my blog. Thank you team" },
    { title: 'Design Quality', author: 'wilson765', text: "This has been a really great template to work with. Well documented and robust. Contacted support with one thing I needed help with and they got back in minutes with the solution - brilliant. Will keep an eye out for their work in the future." },
    { title: 'Flexibility', author: 'martincamellia', text: "Hey, I loved it's great design and using this for my online book selling website [ readtheworld.eu ]. I am thankful to the support team. They setup my website and give me paid services also for my custom requirements and make my website a complete booking selling website. finally I am happy to work with technology experts." },
    { title: 'Design Quality', author: 'brokerc3', text: "I purchased the GardenZone template yesterday and it is fantastic. The html built well and well commented, as is the css and js. This gives me a great starting point and save me loads of work. The support team is also great and very fast at responding." },
    { title: 'Design Quality', author: '2goodtech', text: "Design looks great. Code-wise.. I can rate this 9/10. Easy to customize. Easy to edit. I don't like the heavy rev slider but I re-coded what I needed with Owl. Good theme. Gets the job done." },
    { title: 'Design Quality', author: 'diegommagno', text: "My client was in need of a website with a deadline of 4 days. It was perfect to find MediCo., a lightweight template where you have all the pages and features you may need already designed in the best possible way." }
  ];

  // Awards data
  const awards = [
    { img: 'pic1.png' },
    { img: 'pic4.png' },
    { img: 'pic2.png' },
    { img: 'pic3.png' },
    { img: 'pic5.png' }
  ];

  const baseUrl = 'https://wixor.com';

  return (
    <div className="page-wraper">
      <div className="page-content bg-white">
        <Header />
        
        {/* Welcome Banner - Exact HTML Structure */}
        <div className="welcome-banner overlay-black-dark dez-move-image" style={{backgroundImage: `url(/images/banner/bg1.jpg)`}} id="app-banner">
          <svg className="bnr-bg1" viewBox="0 0 616 345" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#2A7B9B', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#57C785', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#EDDD53', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path d="M4 -8C68 102 148 225.892 316 238C427 246 557 187 626 343" stroke="#fff" strokeWidth="8"></path>
            <path d="M439.576 108.632C304 102 296.836 48.5755 260 0H618V255C593 151 550.867 114.077 439.576 108.632Z" fill="url(#primaryGradient)"></path>
          </svg>
          <div className="welcome-content">
            <h1 className="title">Digital Agency - <span>Website, Networking & Business</span> <span className="underline-text">Solutions</span> </h1>
          </div>
          <div className="welcome-bottom">
            <img className="garlic1 slideskew" src="/images/pngs/pngtree-a-mechanical-keyboard-with-rgb-backlighting-turned-on-png-image_21036561-removebg-preview.png" alt="/" />
            <img className="garlic2 slideskew3" src="/images/pngs/output-onlinegiftools.gif" alt="/" />
            <img className="sm-element slideskew" src="/images/banner/team-element.png" alt="" onError={(e) => e.target.style.display = 'none'} />
            <img className="sm-element-2 slideskew2" src="/images/banner/icon-element.png" alt="" onError={(e) => e.target.style.display = 'none'} />
            <img className="sm-element-3 slideskew3" src="/images/banner/icon-2-element.png" alt="" onError={(e) => e.target.style.display = 'none'} />
            <div className="grid-row">
              <div className="grid-item grid-item1">
                <div className="desktop-frame">
                  <img src="/images/portfolio/agency.png" alt="" />
                </div>
              </div>
              <div className="grid-item grid-item2">
                <div className="desktop-frame">
                  <img src="/images/portfolio/plantzone.png" alt="" />
                </div>
              </div>
              <div className="grid-item grid-item3">
                <div className="desktop-frame">
                  <img src="/images/portfolio/gardenzone.png" alt="" />
                </div>
              </div>
              <div className="grid-item grid-item4">
                <div className="desktop-frame">
                  <img src="/images/portfolio/swigo.png" alt="" />
                </div>
                <h2 className="bg-data-text">
                  <span>DIGITAL AGENCY</span>
                </h2>
              </div>
              <div className="grid-item grid-item5">
                <div className="desktop-frame">
                  <img src="/images/portfolio/consultzone.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Pages Section */}
        <div className="section-full bg-gray bg-img-fix content-inner pb-3" id="demo">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="text-secondary">04+ Home Pages</h6>
              <h2>Stunning Diverse Website Introduction</h2>
            </div>
            <div className="row sp50 justify-content-center">
              {/* Home Page 04 */}
              <div className="col-md-4 col-xl-4 col-sm-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="demo-box home-demo text-center">
                  <div className="technology-btn">
                    <ul>
                      <li><a target="_blank" className="dz-tag dz-html" href={`${baseUrl}/xhtml/index-4.html?data-color=color_7`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
                          <path d="M0,0l34.135,375.465L204.8,409.6l170.665-34.135L409.6,0H0z M343.788,346.998L204.8,374.784L65.812,346.998L37.361,34.135h334.848L343.788,346.998z" fill="#fff"></path>
                          <polygon points="334.833,68.265 74.752,68.265 88.714,221.865 286.602,221.865 280.402,290.063 204.8,305.167 129.183,290.063 126.085,256 91.817,256 97.5,318.536 204.8,339.963 312.1,318.536 323.983,187.735 119.885,187.735 112.133,102.4 331.735,102.4" fill="#fff"></polygon>
                        </svg>
                        HTML</a></li>
                      <li><a className="dz-tag dz-wp disabled" href="javascript:void(0);">
                        <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m12 0c-6.615 0-12 5.381-12 12 0 6.615 5.385 12 12 12s12-5.385 12-12c0-6.62-5.385-12-12-12zm-10.79 11.999c0-1.563.333-3.048.934-4.389l5.148 14.1c-3.601-1.751-6.082-5.442-6.082-9.711zm10.79 10.791c-1.06 0-2.081-.155-3.048-.441l3.237-9.406 3.315 9.087c.024.054.049.101.077.15-1.118.392-2.323.61-3.581.61zm1.485-15.845v-.001c.648-.034 1.233-.101 1.233-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-1.06 0-2.841-.135-2.841-.135-.58-.034-.647.857-.067.891 0 0 .551.068 1.132.101l1.679 4.606-2.361 7.079-3.928-11.685c.649-.034 1.234-.101 1.234-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-.203 0-.441-.005-.697-.014 1.931-2.928 5.245-4.863 9.015-4.863 2.807 0 5.366 1.075 7.287 2.83-.049-.005-.092-.009-.14-.009-1.06 0-1.81.924-1.81 1.916 0 .89.513 1.64 1.06 2.531.411.716.891 1.64.891 2.976 0 .924-.353 1.993-.823 3.489l-1.075 3.595zm7.985-.122c.842 1.539 1.321 3.3 1.321 5.178 0 3.982-2.158 7.456-5.366 9.324l-.001-.001 3.295-9.528c.614-1.539.823-2.767.823-3.866 0-.396-.024-.764-.072-1.107z" fill="#fff"></path>
                        </svg>
                        WordPress</a></li>
                      <li><a className="dz-tag dz-react disabled" href="javascript:void(0);">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.746 48.746">
                          <path d="M48.746,24.605c0-3.513-4.426-6.065-10.495-7.562c2.078-5.377,2.44-10.031-0.244-12.021c-0.735-0.545-1.642-0.821-2.692-0.821c-3.135,0-7.463,2.515-11.919,6.696c-4.505-4.464-8.874-7.16-11.989-7.16c-0.953,0-1.78,0.247-2.461,0.734c-2.11,1.514-2.42,4.939-0.895,9.905c0.299,0.974,0.676,1.99,1.099,3.027C3.785,18.933,0,21.358,0,24.605c0,3.199,3.675,5.601,8.914,7.134c-2.223,5.557-2.687,10.405,0.069,12.448c0.736,0.545,1.642,0.82,2.692,0.82c3.133,0,7.454-2.51,11.905-6.683c4.264,4.069,8.354,6.493,11.312,6.493c0.953,0,1.78-0.247,2.461-0.734c2.605-1.869,2.262-6.434,0.258-11.77C44.004,30.848,48.746,28.242,48.746,24.605z" fill="#fff"></path>
                          <circle cx="24.372" cy="24.606" r="3.882" fill="#fff"></circle>
                        </svg>
                        React</a></li>
                      <li><a className="dz-tag dz-vue disabled" href="javascript:void(0);">
                        <svg fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"/>
                        </svg>
                        Vue Js</a></li>
                      <li><a className="dz-tag dz-laravel disabled" href="javascript:void(0);">
                        <svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M505.57,234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78,39.78,0,0,0-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06,1.5-28.14,4.48-14,2.29-35.11,5.77-38.31,6.07l-.71.06-.69.13c-10,1.78-16.62,6.22-19.56,13.19-1.55,3.68-3.22,11.15,2.94,19.86,1.53,2.22,6.83,9.56,15.94,22.17,6.06,8.4,12.87,17.82,18.75,26L259.9,275,150.66,96.05l-.2-.34-.23-.33-.44-.65C145.32,88.17,139.76,80,123.7,80h0c-1.13,0-2.31,0-3.63.11-4.6.25-21.42,1.57-40.89,3.11-21.49,1.69-50.9,4-54.72,4.1h-.73l-.79.08c-9.14.89-15.77,4.6-19.7,11-6.55,10.69-1.42,22.69.26,26.63C6.87,133,37.56,197.7,64.63,254.81c18,37.94,36.58,77.17,38.1,80.65a34.85,34.85,0,0,0,32.94,21.59,46.62,46.62,0,0,0,9.86-1.1l.21,0,.2-.05c13.86-3.38,57.83-14.54,89.2-22.59,1.9,3.32,3.9,6.83,6,10.44,21.93,38.5,37.9,66.35,43.16,73.46C287,421,295,432,310.06,432c5.46,0,10.46-1.4,15.74-2.89l1.53-.43.06,0h.06c10.53-3,150.69-52.16,157.87-55.35l.22-.1c5.44-2.41,13.66-6.05,16.18-15.4,1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54,17.37-4.5,38.8-10.11,43.38-11.55,11.47-3.43,14.94-10.69,16-14.73C512.26,250.32,513.29,242.27,505.57,234.62Z" fill="#fff"/>
                        </svg>
                        Laravel</a></li>
                      <li><a target="_blank" className="dz-tag dz-dotnet disabled" href="javascript:void(0);">
                        <svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path style={{fill:"#fff"}} d="M117.547,266.156L0,249.141v-94.296h117.547V266.156z"></path>
                            <path style={{fill:"#fff"}} d="M291.346,136.51H136.31l0.055-114.06L291.346,0.009V136.51z"></path>
                            <path style={{fill:"#fff"}} d="M291.346,291.337l-155.091-22.459l0.182-114.015h154.909V291.337z"></path>
                            <path style={{fill:"#fff"}} d="M117.547,136.51H0V42.205l117.547-17.024V136.51z"></path>
                          </g>
                        </svg>
                        Asp.net</a></li>
                      <li><a target="_blank" className="dz-tag dz-tailwind disabled" href="javascript:void(0);">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.000000 134.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                            <path d="M595 1001 c-92 -25 -159 -82 -196 -168 -28 -66 -23 -79 13 -37 56 63 131 81 198 46 19 -9 60 -38 91 -64 76 -61 141 -82 234 -75 43 3 90 14 118 27 58 28 119 95 136 150 7 23 15 49 18 59 3 9 -11 -3 -31 -26 -20 -23 -55 -49 -80 -58 -59 -23 -107 -9 -193 57 -38 28 -87 60 -110 70 -48 21 -153 31 -198 19z m195 -52 c25 -11 56 -31 70 -43 38 -35 107 -76 129 -76 11 0 22 -4 25 -9 3 -4 26 -7 51 -5 42 4 45 3 36 -14 -26 -49 -182 -86 -267 -63 -22 6 -78 38 -124 71 -90 65 -143 85 -202 77 -21 -3 -38 -1 -38 3 0 17 63 60 103 70 23 6 47 13 52 15 21 9 122 -8 165 -26z"></path>
                            <path d="M361 640 c-104 -22 -165 -74 -207 -179 -13 -31 -21 -57 -20 -58 2 -2 23 17 47 41 76 76 152 73 253 -10 112 -90 220 -116 342 -79 85 25 161 107 179 194 l7 34 -38 -40 c-76 -80 -153 -79 -259 3 -109 84 -206 113 -304 94z m172 -46 c21 -7 63 -33 95 -57 83 -64 120 -80 180 -81 28 0 52 -3 52 -7 0 -5 -15 -19 -32 -32 -99 -73 -249 -62 -358 28 -77 63 -115 80 -182 80 -32 0 -58 3 -58 7 0 14 63 58 98 67 82 21 132 20 205 -5z"></path>
                          </g>
                        </svg>
                        React Tailwind</a></li>
                      <li><a target="_blank" className="dz-tag dz-tailwind disabled" href="javascript:void(0);">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.000000 134.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                            <path d="M595 1001 c-92 -25 -159 -82 -196 -168 -28 -66 -23 -79 13 -37 56 63 131 81 198 46 19 -9 60 -38 91 -64 76 -61 141 -82 234 -75 43 3 90 14 118 27 58 28 119 95 136 150 7 23 15 49 18 59 3 9 -11 -3 -31 -26 -20 -23 -55 -49 -80 -58 -59 -23 -107 -9 -193 57 -38 28 -87 60 -110 70 -48 21 -153 31 -198 19z m195 -52 c25 -11 56 -31 70 -43 38 -35 107 -76 129 -76 11 0 22 -4 25 -9 3 -4 26 -7 51 -5 42 4 45 3 36 -14 -26 -49 -182 -86 -267 -63 -22 6 -78 38 -124 71 -90 65 -143 85 -202 77 -21 -3 -38 -1 -38 3 0 17 63 60 103 70 23 6 47 13 52 15 21 9 122 -8 165 -26z"></path>
                            <path d="M361 640 c-104 -22 -165 -74 -207 -179 -13 -31 -21 -57 -20 -58 2 -2 23 17 47 41 76 76 152 73 253 -10 112 -90 220 -116 342 -79 85 25 161 107 179 194 l7 34 -38 -40 c-76 -80 -153 -79 -259 3 -109 84 -206 113 -304 94z m172 -46 c21 -7 63 -33 95 -57 83 -64 120 -80 180 -81 28 0 52 -3 52 -7 0 -5 -15 -19 -32 -32 -99 -73 -249 -62 -358 28 -77 63 -115 80 -182 80 -32 0 -58 3 -58 7 0 14 63 58 98 67 82 21 132 20 205 -5z"></path>
                          </g>
                        </svg>
                        Tailwind</a></li>
                    </ul>
                  </div>
                  <div className="demo-img">
                    <a target="_blank" href={`${baseUrl}/xhtml/index-4.html?data-color=color_7`}>
                      <img src="/images/portfolio/plantzone.png" alt="" />
                    </a>
                  </div>
                  <div className="demo-info">
                    <h4 className="dz-title"><a target="_blank" href={`${baseUrl}/xhtml/index-4.html?data-color=color_7`}>Home Page 04</a></h4>
                  </div>
                </div>
              </div>
              {/* Home Page 01 */}
              <div className="col-md-4 col-xl-4 col-sm-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="demo-box home-demo text-center">
                  <div className="technology-btn">
                    <ul>
                      <li><a target="_blank" className="dz-tag dz-html active" href={`${baseUrl}/xhtml/index.html?data-color=color_1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
                          <path d="M0,0l34.135,375.465L204.8,409.6l170.665-34.135L409.6,0H0z M343.788,346.998L204.8,374.784L65.812,346.998L37.361,34.135h334.848L343.788,346.998z" fill="#fff"></path>
                          <polygon points="334.833,68.265 74.752,68.265 88.714,221.865 286.602,221.865 280.402,290.063 204.8,305.167 129.183,290.063 126.085,256 91.817,256 97.5,318.536 204.8,339.963 312.1,318.536 323.983,187.735 119.885,187.735 112.133,102.4 331.735,102.4" fill="#fff"></polygon>
                        </svg>
                        HTML</a></li>
                      <li><a target="_blank" className="dz-tag dz-django" href="https://wixor.com/django/xhtml/index.html?data-color=color_1">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708 8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717-26.947 0-42.512 16.437-42.512 45.243 0 28.046 14.88 43.532 42.17 43.532 5.896 0 10.696-.332 18.307-1.351v-84.707z"></path><path d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327 7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21zM196.608 0h53.278v54.135h-53.278V0z"></path></g></svg>
                        Django</a></li>
                      <li><a className="dz-tag dz-wp" href="https://swigo.wprdx.com/demo/?color_theme=green">
                        <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m12 0c-6.615 0-12 5.381-12 12 0 6.615 5.385 12 12 12s12-5.385 12-12c0-6.62-5.385-12-12-12zm-10.79 11.999c0-1.563.333-3.048.934-4.389l5.148 14.1c-3.601-1.751-6.082-5.442-6.082-9.711zm10.79 10.791c-1.06 0-2.081-.155-3.048-.441l3.237-9.406 3.315 9.087c.024.054.049.101.077.15-1.118.392-2.323.61-3.581.61zm1.485-15.845v-.001c.648-.034 1.233-.101 1.233-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-1.06 0-2.841-.135-2.841-.135-.58-.034-.647.857-.067.891 0 0 .551.068 1.132.101l1.679 4.606-2.361 7.079-3.928-11.685c.649-.034 1.234-.101 1.234-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-.203 0-.441-.005-.697-.014 1.931-2.928 5.245-4.863 9.015-4.863 2.807 0 5.366 1.075 7.287 2.83-.049-.005-.092-.009-.14-.009-1.06 0-1.81.924-1.81 1.916 0 .89.513 1.64 1.06 2.531.411.716.891 1.64.891 2.976 0 .924-.353 1.993-.823 3.489l-1.075 3.595zm7.985-.122c.842 1.539 1.321 3.3 1.321 5.178 0 3.982-2.158 7.456-5.366 9.324l-.001-.001 3.295-9.528c.614-1.539.823-2.767.823-3.866 0-.396-.024-.764-.072-1.107z" fill="#fff"></path>
                        </svg>
                        WordPress</a></li>
                      <li><a className="dz-tag dz-react" href="https://swigo-fast-food-react.netlify.app/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.746 48.746">
                          <path d="M48.746,24.605c0-3.513-4.426-6.065-10.495-7.562c2.078-5.377,2.44-10.031-0.244-12.021c-0.735-0.545-1.642-0.821-2.692-0.821c-3.135,0-7.463,2.515-11.919,6.696c-4.505-4.464-8.874-7.16-11.989-7.16c-0.953,0-1.78,0.247-2.461,0.734c-2.11,1.514-2.42,4.939-0.895,9.905c0.299,0.974,0.676,1.99,1.099,3.027C3.785,18.933,0,21.358,0,24.605c0,3.199,3.675,5.601,8.914,7.134c-2.223,5.557-2.687,10.405,0.069,12.448c0.736,0.545,1.642,0.82,2.692,0.82c3.133,0,7.454-2.51,11.905-6.683c4.264,4.069,8.354,6.493,11.312,6.493c0.953,0,1.78-0.247,2.461-0.734c2.605-1.869,2.262-6.434,0.258-11.77C44.004,30.848,48.746,28.242,48.746,24.605z" fill="#fff"></path>
                          <circle cx="24.372" cy="24.606" r="3.882" fill="#fff"></circle>
                        </svg>
                        React</a></li>
                      <li><a className="dz-tag dz-vue" href="https://swigo-fast-food-vuejs.netlify.app/">
                        <svg fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"/>
                        </svg>
                        Vue Js</a></li>
                      <li><a target="_blank" className="dz-tag dz-dotnet" href="https://swigo.w3itexpert.com">
                        <svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path style={{fill:"#fff"}} d="M117.547,266.156L0,249.141v-94.296h117.547V266.156z"></path>
                            <path style={{fill:"#fff"}} d="M291.346,136.51H136.31l0.055-114.06L291.346,0.009V136.51z"></path>
                            <path style={{fill:"#fff"}} d="M291.346,291.337l-155.091-22.459l0.182-114.015h154.909V291.337z"></path>
                            <path style={{fill:"#fff"}} d="M117.547,136.51H0V42.205l117.547-17.024V136.51z"></path>
                          </g>
                        </svg>
                        Asp.net</a></li>
                      <li><a target="_blank" className="dz-tag dz-tailwind" href="https://swigo.scriptlelo.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.000000 134.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                            <path d="M595 1001 c-92 -25 -159 -82 -196 -168 -28 -66 -23 -79 13 -37 56 63 131 81 198 46 19 -9 60 -38 91 -64 76 -61 141 -82 234 -75 43 3 90 14 118 27 58 28 119 95 136 150 7 23 15 49 18 59 3 9 -11 -3 -31 -26 -20 -23 -55 -49 -80 -58 -59 -23 -107 -9 -193 57 -38 28 -87 60 -110 70 -48 21 -153 31 -198 19z m195 -52 c25 -11 56 -31 70 -43 38 -35 107 -76 129 -76 11 0 22 -4 25 -9 3 -4 26 -7 51 -5 42 4 45 3 36 -14 -26 -49 -182 -86 -267 -63 -22 6 -78 38 -124 71 -90 65 -143 85 -202 77 -21 -3 -38 -1 -38 3 0 17 63 60 103 70 23 6 47 13 52 15 21 9 122 -8 165 -26z"></path>
                            <path d="M361 640 c-104 -22 -165 -74 -207 -179 -13 -31 -21 -57 -20 -58 2 -2 23 17 47 41 76 76 152 73 253 -10 112 -90 220 -116 342 -79 85 25 161 107 179 194 l7 34 -38 -40 c-76 -80 -153 -79 -259 3 -109 84 -206 113 -304 94z m172 -46 c21 -7 63 -33 95 -57 83 -64 120 -80 180 -81 28 0 52 -3 52 -7 0 -5 -15 -19 -32 -32 -99 -73 -249 -62 -358 28 -77 63 -115 80 -182 80 -32 0 -58 3 -58 7 0 14 63 58 98 67 82 21 132 20 205 -5z"></path>
                          </g>
                        </svg>
                        React Tailwind</a></li>
                      <li><a target="_blank" className="dz-tag dz-tailwind" href="https://wixor.com/tailwind/xhtml/index.html?data-color=color_1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.000000 134.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                            <path d="M595 1001 c-92 -25 -159 -82 -196 -168 -28 -66 -23 -79 13 -37 56 63 131 81 198 46 19 -9 60 -38 91 -64 76 -61 141 -82 234 -75 43 3 90 14 118 27 58 28 119 95 136 150 7 23 15 49 18 59 3 9 -11 -3 -31 -26 -20 -23 -55 -49 -80 -58 -59 -23 -107 -9 -193 57 -38 28 -87 60 -110 70 -48 21 -153 31 -198 19z m195 -52 c25 -11 56 -31 70 -43 38 -35 107 -76 129 -76 11 0 22 -4 25 -9 3 -4 26 -7 51 -5 42 4 45 3 36 -14 -26 -49 -182 -86 -267 -63 -22 6 -78 38 -124 71 -90 65 -143 85 -202 77 -21 -3 -38 -1 -38 3 0 17 63 60 103 70 23 6 47 13 52 15 21 9 122 -8 165 -26z"></path>
                            <path d="M361 640 c-104 -22 -165 -74 -207 -179 -13 -31 -21 -57 -20 -58 2 -2 23 17 47 41 76 76 152 73 253 -10 112 -90 220 -116 342 -79 85 25 161 107 179 194 l7 34 -38 -40 c-76 -80 -153 -79 -259 3 -109 84 -206 113 -304 94z m172 -46 c21 -7 63 -33 95 -57 83 -64 120 -80 180 -81 28 0 52 -3 52 -7 0 -5 -15 -19 -32 -32 -99 -73 -249 -62 -358 28 -77 63 -115 80 -182 80 -32 0 -58 3 -58 7 0 14 63 58 98 67 82 21 132 20 205 -5z"></path>
                          </g>
                        </svg>
                        Tailwind</a></li>
                    </ul>
                  </div>
                  <div className="demo-img">
                    <a target="_blank" href={`${baseUrl}/xhtml/index.html?data-color=color_1`}>
                      <img src="/images/portfolio/swigo.png" alt="" />
                    </a>
                  </div>
                  <div className="demo-info">
                    <h4 className="dz-title"><a target="_blank" href={`${baseUrl}/xhtml/index.html?data-color=color_1`}>Home Page 01</a></h4>
                  </div>
                </div>
              </div>
              {/* Home Page 02 */}
              <div className="col-md-4 col-xl-4 col-sm-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="demo-box home-demo text-center">
                  <div className="technology-btn">
                    <ul>
                      <li><a target="_blank" className="dz-tag dz-html active" href={`${baseUrl}/xhtml/index-2.html?data-color=color_2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
                          <path d="M0,0l34.135,375.465L204.8,409.6l170.665-34.135L409.6,0H0z M343.788,346.998L204.8,374.784L65.812,346.998L37.361,34.135h334.848L343.788,346.998z" fill="#fff"></path>
                          <polygon points="334.833,68.265 74.752,68.265 88.714,221.865 286.602,221.865 280.402,290.063 204.8,305.167 129.183,290.063 126.085,256 91.817,256 97.5,318.536 204.8,339.963 312.1,318.536 323.983,187.735 119.885,187.735 112.133,102.4 331.735,102.4" fill="#fff"></polygon>
                        </svg>
                        HTML</a></li>
                      <li><a target="_blank" className="dz-tag dz-django" href="https://wixor.com/django/xhtml/index-2.html?data-color=color_2">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708 8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717-26.947 0-42.512 16.437-42.512 45.243 0 28.046 14.88 43.532 42.17 43.532 5.896 0 10.696-.332 18.307-1.351v-84.707z"></path><path d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327 7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21zM196.608 0h53.278v54.135h-53.278V0z"></path></g></svg>
                        Django</a></li>
                      <li><a className="dz-tag dz-wp" href="https://swigo.wprdx.com/demo/home-2/?color_theme=yellow">
                        <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m12 0c-6.615 0-12 5.381-12 12 0 6.615 5.385 12 12 12s12-5.385 12-12c0-6.62-5.385-12-12-12zm-10.79 11.999c0-1.563.333-3.048.934-4.389l5.148 14.1c-3.601-1.751-6.082-5.442-6.082-9.711zm10.79 10.791c-1.06 0-2.081-.155-3.048-.441l3.237-9.406 3.315 9.087c.024.054.049.101.077.15-1.118.392-2.323.61-3.581.61zm1.485-15.845v-.001c.648-.034 1.233-.101 1.233-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-1.06 0-2.841-.135-2.841-.135-.58-.034-.647.857-.067.891 0 0 .551.068 1.132.101l1.679 4.606-2.361 7.079-3.928-11.685c.649-.034 1.234-.101 1.234-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-.203 0-.441-.005-.697-.014 1.931-2.928 5.245-4.863 9.015-4.863 2.807 0 5.366 1.075 7.287 2.83-.049-.005-.092-.009-.14-.009-1.06 0-1.81.924-1.81 1.916 0 .89.513 1.64 1.06 2.531.411.716.891 1.64.891 2.976 0 .924-.353 1.993-.823 3.489l-1.075 3.595zm7.985-.122c.842 1.539 1.321 3.3 1.321 5.178 0 3.982-2.158 7.456-5.366 9.324l-.001-.001 3.295-9.528c.614-1.539.823-2.767.823-3.866 0-.396-.024-.764-.072-1.107z" fill="#fff"></path>
                        </svg>
                        WordPress</a></li>
                      <li><a className="dz-tag dz-react" href="https://swigo-fast-food-react.netlify.app/home-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.746 48.746">
                          <path d="M48.746,24.605c0-3.513-4.426-6.065-10.495-7.562c2.078-5.377,2.44-10.031-0.244-12.021c-0.735-0.545-1.642-0.821-2.692-0.821c-3.135,0-7.463,2.515-11.919,6.696c-4.505-4.464-8.874-7.16-11.989-7.16c-0.953,0-1.78,0.247-2.461,0.734c-2.11,1.514-2.42,4.939-0.895,9.905c0.299,0.974,0.676,1.99,1.099,3.027C3.785,18.933,0,21.358,0,24.605c0,3.199,3.675,5.601,8.914,7.134c-2.223,5.557-2.687,10.405,0.069,12.448c0.736,0.545,1.642,0.82,2.692,0.82c3.133,0,7.454-2.51,11.905-6.683c4.264,4.069,8.354,6.493,11.312,6.493c0.953,0,1.78-0.247,2.461-0.734c2.605-1.869,2.262-6.434,0.258-11.77C44.004,30.848,48.746,28.242,48.746,24.605z" fill="#fff"></path>
                          <circle cx="24.372" cy="24.606" r="3.882" fill="#fff"></circle>
                        </svg>
                        React</a></li>
                      <li><a className="dz-tag dz-vue" href="https://swigo-fast-food-vuejs.netlify.app">
                        <svg fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"/>
                        </svg>
                        Vue Js</a></li>
                      <li><a target="_blank" className="dz-tag dz-tailwind" href="https://swigo.scriptlelo.com/home-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.000000 134.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                            <path d="M595 1001 c-92 -25 -159 -82 -196 -168 -28 -66 -23 -79 13 -37 56 63 131 81 198 46 19 -9 60 -38 91 -64 76 -61 141 -82 234 -75 43 3 90 14 118 27 58 28 119 95 136 150 7 23 15 49 18 59 3 9 -11 -3 -31 -26 -20 -23 -55 -49 -80 -58 -59 -23 -107 -9 -193 57 -38 28 -87 60 -110 70 -48 21 -153 31 -198 19z m195 -52 c25 -11 56 -31 70 -43 38 -35 107 -76 129 -76 11 0 22 -4 25 -9 3 -4 26 -7 51 -5 42 4 45 3 36 -14 -26 -49 -182 -86 -267 -63 -22 6 -78 38 -124 71 -90 65 -143 85 -202 77 -21 -3 -38 -1 -38 3 0 17 63 60 103 70 23 6 47 13 52 15 21 9 122 -8 165 -26z"></path>
                            <path d="M361 640 c-104 -22 -165 -74 -207 -179 -13 -31 -21 -57 -20 -58 2 -2 23 17 47 41 76 76 152 73 253 -10 112 -90 220 -116 342 -79 85 25 161 107 179 194 l7 34 -38 -40 c-76 -80 -153 -79 -259 3 -109 84 -206 113 -304 94z m172 -46 c21 -7 63 -33 95 -57 83 -64 120 -80 180 -81 28 0 52 -3 52 -7 0 -5 -15 -19 -32 -32 -99 -73 -249 -62 -358 28 -77 63 -115 80 -182 80 -32 0 -58 3 -58 7 0 14 63 58 98 67 82 21 132 20 205 -5z"></path>
                          </g>
                        </svg>
                        React Tailwind</a></li>
                      <li><a className="dz-tag dz-tailwind" href="https://wixor.com/tailwind/xhtml/index-2.html?data-color=color_2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.000000 134.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                            <path d="M595 1001 c-92 -25 -159 -82 -196 -168 -28 -66 -23 -79 13 -37 56 63 131 81 198 46 19 -9 60 -38 91 -64 76 -61 141 -82 234 -75 43 3 90 14 118 27 58 28 119 95 136 150 7 23 15 49 18 59 3 9 -11 -3 -31 -26 -20 -23 -55 -49 -80 -58 -59 -23 -107 -9 -193 57 -38 28 -87 60 -110 70 -48 21 -153 31 -198 19z m195 -52 c25 -11 56 -31 70 -43 38 -35 107 -76 129 -76 11 0 22 -4 25 -9 3 -4 26 -7 51 -5 42 4 45 3 36 -14 -26 -49 -182 -86 -267 -63 -22 6 -78 38 -124 71 -90 65 -143 85 -202 77 -21 -3 -38 -1 -38 3 0 17 63 60 103 70 23 6 47 13 52 15 21 9 122 -8 165 -26z"></path>
                            <path d="M361 640 c-104 -22 -165 -74 -207 -179 -13 -31 -21 -57 -20 -58 2 -2 23 17 47 41 76 76 152 73 253 -10 112 -90 220 -116 342 -79 85 25 161 107 179 194 l7 34 -38 -40 c-76 -80 -153 -79 -259 3 -109 84 -206 113 -304 94z m172 -46 c21 -7 63 -33 95 -57 83 -64 120 -80 180 -81 28 0 52 -3 52 -7 0 -5 -15 -19 -32 -32 -99 -73 -249 -62 -358 28 -77 63 -115 80 -182 80 -32 0 -58 3 -58 7 0 14 63 58 98 67 82 21 132 20 205 -5z"></path>
                          </g>
                        </svg>
                        Tailwind</a></li>
                    </ul>
                  </div>
                  <div className="demo-img">
                    <a target="_blank" href={`${baseUrl}/xhtml/index-2.html?data-color=color_2`}>
                      <img src="/images/portfolio/gardenzone.png" alt="" />
                    </a>
                  </div>
                  <div className="demo-info">
                    <h4 className="dz-title"><a target="_blank" href={`${baseUrl}/xhtml/index-2.html?data-color=color_2`}>Home Page 02</a></h4>
                  </div>
                </div>
              </div>
              {/* Home Page 03 */}
              <div className="col-md-4 col-xl-4 col-sm-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                <div className="demo-box home-demo text-center">
                  <div className="technology-btn">
                    <ul>
                      <li><a target="_blank" className="dz-tag dz-html active" href={`${baseUrl}/xhtml/index-3.html?data-color=color_3`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
                          <path d="M0,0l34.135,375.465L204.8,409.6l170.665-34.135L409.6,0H0z M343.788,346.998L204.8,374.784L65.812,346.998L37.361,34.135h334.848L343.788,346.998z" fill="#fff"></path>
                          <polygon points="334.833,68.265 74.752,68.265 88.714,221.865 286.602,221.865 280.402,290.063 204.8,305.167 129.183,290.063 126.085,256 91.817,256 97.5,318.536 204.8,339.963 312.1,318.536 323.983,187.735 119.885,187.735 112.133,102.4 331.735,102.4" fill="#fff"></polygon>
                        </svg>
                        HTML</a></li>
                      <li><a target="_blank" className="dz-tag dz-django" href="https://wixor.com/django/xhtml/index-3.html?data-color=color_3">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708 8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717-26.947 0-42.512 16.437-42.512 45.243 0 28.046 14.88 43.532 42.17 43.532 5.896 0 10.696-.332 18.307-1.351v-84.707z"></path><path d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327 7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21zM196.608 0h53.278v54.135h-53.278V0z"></path></g></svg>
                        Django</a></li>
                      <li><a className="dz-tag dz-wp" href="https://swigo.wprdx.com/demo/home-3/?color_theme=red">
                        <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m12 0c-6.615 0-12 5.381-12 12 0 6.615 5.385 12 12 12s12-5.385 12-12c0-6.62-5.385-12-12-12zm-10.79 11.999c0-1.563.333-3.048.934-4.389l5.148 14.1c-3.601-1.751-6.082-5.442-6.082-9.711zm10.79 10.791c-1.06 0-2.081-.155-3.048-.441l3.237-9.406 3.315 9.087c.024.054.049.101.077.15-1.118.392-2.323.61-3.581.61zm1.485-15.845v-.001c.648-.034 1.233-.101 1.233-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-1.06 0-2.841-.135-2.841-.135-.58-.034-.647.857-.067.891 0 0 .551.068 1.132.101l1.679 4.606-2.361 7.079-3.928-11.685c.649-.034 1.234-.101 1.234-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-.203 0-.441-.005-.697-.014 1.931-2.928 5.245-4.863 9.015-4.863 2.807 0 5.366 1.075 7.287 2.83-.049-.005-.092-.009-.14-.009-1.06 0-1.81.924-1.81 1.916 0 .89.513 1.64 1.06 2.531.411.716.891 1.64.891 2.976 0 .924-.353 1.993-.823 3.489l-1.075 3.595zm7.985-.122c.842 1.539 1.321 3.3 1.321 5.178 0 3.982-2.158 7.456-5.366 9.324l-.001-.001 3.295-9.528c.614-1.539.823-2.767.823-3.866 0-.396-.024-.764-.072-1.107z" fill="#fff"></path>
                        </svg>
                        WordPress</a></li>
                      <li><a className="dz-tag dz-react" href="https://swigo-fast-food-react.netlify.app/home-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.746 48.746">
                          <path d="M48.746,24.605c0-3.513-4.426-6.065-10.495-7.562c2.078-5.377,2.44-10.031-0.244-12.021c-0.735-0.545-1.642-0.821-2.692-0.821c-3.135,0-7.463,2.515-11.919,6.696c-4.505-4.464-8.874-7.16-11.989-7.16c-0.953,0-1.78,0.247-2.461,0.734c-2.11,1.514-2.42,4.939-0.895,9.905c0.299,0.974,0.676,1.99,1.099,3.027C3.785,18.933,0,21.358,0,24.605c0,3.199,3.675,5.601,8.914,7.134c-2.223,5.557-2.687,10.405,0.069,12.448c0.736,0.545,1.642,0.82,2.692,0.82c3.133,0,7.454-2.51,11.905-6.683c4.264,4.069,8.354,6.493,11.312,6.493c0.953,0,1.78-0.247,2.461-0.734c2.605-1.869,2.262-6.434,0.258-11.77C44.004,30.848,48.746,28.242,48.746,24.605z" fill="#fff"></path>
                          <circle cx="24.372" cy="24.606" r="3.882" fill="#fff"></circle>
                        </svg>
                        React</a></li>
                      <li><a className="dz-tag dz-vue" href="https://swigo-fast-food-vuejs.netlify.app/home-3">
                        <svg fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"/>
                        </svg>
                        Vue Js</a></li>
                      <li><a className="dz-tag dz-tailwind" href="https://wixor.com/tailwind/xhtml/index-3.html">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.000000 134.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                            <path d="M595 1001 c-92 -25 -159 -82 -196 -168 -28 -66 -23 -79 13 -37 56 63 131 81 198 46 19 -9 60 -38 91 -64 76 -61 141 -82 234 -75 43 3 90 14 118 27 58 28 119 95 136 150 7 23 15 49 18 59 3 9 -11 -3 -31 -26 -20 -23 -55 -49 -80 -58 -59 -23 -107 -9 -193 57 -38 28 -87 60 -110 70 -48 21 -153 31 -198 19z m195 -52 c25 -11 56 -31 70 -43 38 -35 107 -76 129 -76 11 0 22 -4 25 -9 3 -4 26 -7 51 -5 42 4 45 3 36 -14 -26 -49 -182 -86 -267 -63 -22 6 -78 38 -124 71 -90 65 -143 85 -202 77 -21 -3 -38 -1 -38 3 0 17 63 60 103 70 23 6 47 13 52 15 21 9 122 -8 165 -26z"></path>
                            <path d="M361 640 c-104 -22 -165 -74 -207 -179 -13 -31 -21 -57 -20 -58 2 -2 23 17 47 41 76 76 152 73 253 -10 112 -90 220 -116 342 -79 85 25 161 107 179 194 l7 34 -38 -40 c-76 -80 -153 -79 -259 3 -109 84 -206 113 -304 94z m172 -46 c21 -7 63 -33 95 -57 83 -64 120 -80 180 -81 28 0 52 -3 52 -7 0 -5 -15 -19 -32 -32 -99 -73 -249 -62 -358 28 -77 63 -115 80 -182 80 -32 0 -58 3 -58 7 0 14 63 58 98 67 82 21 132 20 205 -5z"></path>
                          </g>
                        </svg>
                        Tailwind</a></li>
                    </ul>
                  </div>
                  <div className="demo-img">
                    <a target="_blank" href={`${baseUrl}/xhtml/index-3.html?data-color=color_3`}>
                      <img src="/images/portfolio/footflare.png" alt="" />
                    </a>
                  </div>
                  <div className="demo-info">
                    <h4 className="dz-title"><a target="_blank" href={`${baseUrl}/xhtml/index-3.html?data-color=color_3`}>Home Page 03</a></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <a href="#SupportSection" className="need-any-help">
                <img src="/images/welcome/support.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                Need Any Help Link
              </a>
            </div>
          </div>
        </div>

        {/* Responsive Design Section */}
        <div className="section-full content-inner mobile-layout pb-3">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">RESPONSIVE SIZE</h6>
              <h2>Responsive Design For Mobile And Tablet</h2>
            </div>
            <div className="inner-frame owl-carousel site-demo-page owl-btn-center-lr owl-btn-3 m-b30">
              <div className="item wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
                <div className="layout-type phone">
                  <a href={`${baseUrl}/xhtml/index.html`} className="demobox" target="_blank" rel="noopener noreferrer">
                    <div className="media">
                      <div className="demo-page">
                        <img src="/images/portfolio/swigo.png" alt="" />
                      </div>
                    </div>
                    <div className="dz-title"></div>
                  </a>Home
                </div>
              </div>
              <div className="item wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="layout-type tab">
                  <a href={`${baseUrl}/xhtml/index.html`} className="demobox" target="_blank" rel="noopener noreferrer">
                    <div className="media">
                      <div className="demo-page">
                        <img src="/images/portfolio/plantzone.png" alt="" />
                      </div>
                    </div>
                    <div className="dz-title">Home</div>
                  </a>
                </div>
              </div>
              <div className="item wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                <div className="layout-type phone">
                  <a href={`${baseUrl}/xhtml/index-2.html`} className="demobox" target="_blank" rel="noopener noreferrer">
                    <div className="media">
                      <div className="demo-page">
                        <img src="/images/portfolio/gardenzone.png" alt="" />
                      </div>
                    </div>
                    <div className="dz-title">Home</div>
                  </a>
                </div>
              </div>
              <div className="item wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="layout-type tab">
                  <a href={`${baseUrl}/xhtml/index-2.html`} className="demobox" target="_blank" rel="noopener noreferrer">
                    <div className="media">
                      <div className="demo-page">
                        <img src="/images/portfolio/footflare.png" alt="" />
                      </div>
                    </div>
                    <div className="dz-title">Home</div>
                  </a>
                </div>
              </div>
              <div className="item wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s">
                <div className="layout-type phone">
                  <a href={`${baseUrl}/xhtml/index-3.html`} className="demobox" target="_blank" rel="noopener noreferrer">
                    <div className="media">
                      <div className="demo-page">
                        <img src="/images/portfolio/pixio.png" alt="" />
                      </div>
                    </div>
                    <div className="dz-title">Home</div>
                  </a>
                </div>
              </div>
              <div className="item wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                <div className="layout-type tab">
                  <a href={`${baseUrl}/xhtml/index-3.html`} className="demobox" target="_blank" rel="noopener noreferrer">
                    <div className="media">
                      <div className="demo-page">
                        <img src="/images/portfolio/bookland.png" alt="" />
                      </div>
                    </div>
                    <div className="dz-title">Home</div>
                  </a>
                </div>
              </div>
              <div className="item wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s">
                <div className="layout-type phone">
                  <a href={`${baseUrl}/xhtml/index-4.html`} className="demobox" target="_blank" rel="noopener noreferrer">
                    <div className="media">
                      <div className="demo-page">
                        <img src="/images/portfolio/inkvoice.png" alt="" />
                      </div>
                    </div>
                    <div className="dz-title">Home</div>
                  </a>
                </div>
              </div>
              <div className="item wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                <div className="layout-type tab">
                  <a href={`${baseUrl}/xhtml/index-4.html`} className="demobox" target="_blank" rel="noopener noreferrer">
                    <div className="media">
                      <div className="demo-page">
                        <img src="/images/portfolio/w3music.png" alt="" />
                      </div>
                    </div>
                    <div className="dz-title">Home</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-right">
              <a href="#SupportSection" className="need-any-help">
                <img src="/images/welcome/support.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                Need Any Help Link
              </a>
            </div>
          </div>
        </div>

        {/* Inner Pages Section */}
        <div className="section-full bg-shape bg-gray bg-img-fix content-inner ip-section pb-3">
          <div className="side-text wow fadeInLeft" data-wow-duration="0.2s" data-wow-delay="0.2s">All Required Pages For Developer</div>
          <div className="container-fluid">
            <div className="row sp50 justify-content-center">
              <div className="col-12">
                <div className="section-head title-box text-center">
                  <h6 className="sub-title text-secondary">40+ Inner Pages</h6>
                  <h2>Discover Your Website with Our Awesome Inner Pages</h2>
                </div>
              </div>
              {innerPages.map((page, index) => {
                // Map inner pages to portfolio images
                const portfolioImages = [
                  '/images/portfolio/clinicmaster.png', '/images/portfolio/inkvoice.png', '/images/portfolio/footflare.png',
                  '/images/portfolio/plantzone.png', '/images/portfolio/w3music.png', '/images/portfolio/pixio.png',
                  '/images/portfolio/powerzone.png', '/images/portfolio/swigo.png', '/images/portfolio/bodyclub.png',
                  '/images/portfolio/bodyshape.png', '/images/portfolio/akcel.png', '/images/portfolio/bookland.png',
                  '/images/portfolio/industry.png', '/images/portfolio/constructzilla.png', '/images/portfolio/agency.png',
                  '/images/portfolio/cargozone.png', '/images/portfolio/medico.png', '/images/portfolio/butterfly.png',
                  '/images/portfolio/jobboard.png', '/images/portfolio/yogazone.png', '/images/portfolio/gardenzone.png',
                  '/images/portfolio/construct.png', '/images/portfolio/beautyzone-html.png', '/images/portfolio/eduzone.png',
                  '/images/portfolio/archia.png', '/images/portfolio/wedding-manager.png', '/images/portfolio/covimap.png',
                  '/images/portfolio/restroking.png', '/images/portfolio/frost.png', '/images/portfolio/kingarchitect.png',
                  '/images/portfolio/lemars.png', '/images/portfolio/karciz.png', '/images/portfolio/curv.png',
                  '/images/portfolio/tradezone.png', '/images/portfolio/consultzone.png', '/images/portfolio/lavi.png',
                  '/images/portfolio/zapolo.png', '/images/portfolio/mazo.png', '/images/portfolio/shivaa.png',
                  '/images/portfolio/archcode.png', '/images/portfolio/visva.png', '/images/portfolio/codesign.png',
                  '/images/portfolio/samar.png', '/images/portfolio/sportszone.png', '/images/portfolio/bizmap.png',
                  '/images/portfolio/kelsey.png', '/images/portfolio/umang.png', '/images/portfolio/bucklin.png',
                  '/images/portfolio/smartclass.png', '/images/portfolio/smart.png', '/images/portfolio/mydiary.png',
                  '/images/portfolio/corella.png', '/images/portfolio/indiro.png'
                ];
                const portfolioImage = portfolioImages[index % portfolioImages.length];
                return (
                  <div key={index} className="col-md-6 col-xl-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay={`${(index % 10) * 0.1 + 0.1}s`}>
                    <div className="demo-box">
                      <div className="demo-area">
                        <a href={`${baseUrl}/xhtml/${page.link}`} className="demo-media" target="_blank" rel="noopener noreferrer">
                          <img src={portfolioImage} alt="" />
                        </a>
                        <div className="demo-info">
                          <h4 className="dz-title"><a href={`${baseUrl}/xhtml/${page.link}`} target="_blank" rel="noopener noreferrer">{page.name}</a></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-right">
              <a href="#SupportSection" className="need-any-help">
                <img src="/images/welcome/support.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                Need Any Help Link
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="section-full content-inner feature-wraper overlay-white-light" id="features" style={{backgroundImage: `url(/images/bg2.jpg)`, backgroundSize: 'cover'}}>
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Features</h6>
              <h2>Exclusive Features that Differentiate Our Website</h2>
            </div>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <div className={`features-item ${feature.class || ''} wow zoomIn`} data-wow-duration="0.5s" data-wow-delay={feature.delay}>
                    <div className="circle">
                      <img src={`/images/icons/${feature.icon}`} alt="" onError={(e) => e.target.style.display = 'none'} />
                    </div>
                    <h3 className="title">{feature.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Performance Section */}
        <div className="section-full content-inner optimized-area content-inner pb-3" style={{backgroundImage: `url(/images/axiom-pattern.png)`}}>
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Fast Time Load</h6>
              <h2>Extremely Fast and <br />Well Optimized</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.2s">
                <div className="pagespeed">
                  <div className="icon"><img src="/images/speed/icon1.png" alt="" onError={(e) => e.target.style.display = 'none'} /></div>
                  <div className="info">
                    <div className="speed green">A+</div>
                    <h4 className="dz-title">Google Pagespeed</h4>
                    <p className="score">Score <span>91%</span></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.4s">
                <div className="pagespeed">
                  <div className="icon"><img src="/images/speed/icon2.png" alt="" onError={(e) => e.target.style.display = 'none'} /></div>
                  <div className="info">
                    <div className="speed green">A+</div>
                    <h4 className="dz-title">Pingdom Pagespeed</h4>
                    <p className="score">Score <span>90%</span></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.6s">
                <div className="pagespeed">
                  <div className="icon"><img src="/images/speed/icon3.png" alt="" onError={(e) => e.target.style.display = 'none'} /></div>
                  <div className="info">
                    <div className="speed green">A+</div>
                    <h4 className="dz-title">GTMetrix Pagespeed</h4>
                    <p className="score">Score <span>95%</span></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.8s">
                <div className="pagespeed box">
                  <div className="icon"><img src="/images/rocket2.png" alt="" onError={(e) => e.target.style.display = 'none'} /></div>
                  <div className="info">
                    <h4 className="dz-title">Make your site the 1st-rank.</h4>
                    <p>All the necessary plugins for SEO Optimization are bundled.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <a href="#SupportSection" className="need-any-help">
                <img src="/images/welcome/support.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                Need Any Help Link
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="section-full content-inner bg-gray content-inner overflow-hidden">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Template Reviews</h6>
              <h2>What Our Customers <br />Are Saying</h2>
            </div>
            <div className="testimonial-two-dots owl-theme owl-dots-primary-full owl-loaded owl-carousel owl-none testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="item">
                  <div className="testimonial-2">
                    <div className="testimonial-text">
                      <div className="review-star">
                        <ul className="review">
                          {[1, 2, 3, 4, 5].map(i => <li key={i} className="fa fa-star"></li>)}
                        </ul>
                        <span>Or</span>
                        <h4>{testimonial.title}</h4>
                      </div>
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="testimonial-pic radius shadow">
                      <img src="/images/pic1.jpg" width="100" height="100" alt="" onError={(e) => e.target.style.display = 'none'} />
                    </div>
                    <div className="name-box">
                      <strong className="testimonial-name">{testimonial.author}</strong>
                      <span className="testimonial-position">Customer</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right">
              <a href="#SupportSection" className="need-any-help">
                <img src="/images/welcome/support.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                Need Any Help Link
              </a>
            </div>
          </div>
        </div>

        {/* Forms Section */}
        <div className="section-full content-inner pb-3">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-4">
                <div className="section-head title-box text-left m-b30 m-0">
                  <h6 className="sub-title text-secondary">Working Php Forms</h6>
                  <h2>Ready to Use <br />Awesome Form</h2>
                  <p>Don't go by our Words, checkout awesome demos and verify yourself. Save 1000s of hours of designing and coding work as we already did that for you.</p>
                </div>
                <ul className="list-check primary">
                  <li>Running Contact Form</li>
                  <li>Mailchimp Ready</li>
                </ul>
                <div className="testimonial-one-navigation owl-clienr-btn">
                  <span id="next-slide" className="btn prev"><i className="las la-long-arrow-alt-left"></i></span>
                  <span id="prev-slide" className="btn next"><i className="las la-long-arrow-alt-right"></i></span>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="responsive-carousel owl-carousel owl-none m-b30">
                  <div className="item">
                    <div className="layout-type phone">
                      <a href={`${baseUrl}/xhtml/contact-us.html`} target="_blank" rel="noopener noreferrer">
                        <div className="media">
                          <img src="/images/demo/contact-tab.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                        </div>
                        <div className="dz-title">Contact Us</div>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="layout-type tab">
                      <a href={`${baseUrl}/xhtml/contact-us.html`} target="_blank" rel="noopener noreferrer">
                        <div className="media">
                          <img src="/images/demo/contact-mobile.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                        </div>
                        <div className="dz-title">Contact Us</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <a href="#SupportSection" className="need-any-help">
                <img src="/images/welcome/support.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                Need Any Help Link
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="section-full video-presentation bg-img-fix" style={{backgroundImage: `url(/images/pngs/glasses-lie-laptop-reflecting-light-from-screen-dark.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          <div className="container-fluid">
            <div className="row align-items-center text-center text-lg-start">
              <div className="col-lg-9 text-white">
                <h2 className="m-tb10"><span className="font-weight-400">Ready to Transform Your Business?</span></h2>
                <p className="text-white mt-3">Start your digital journey with us today and experience the difference</p>
              </div>
              <div className="col-lg-3 m-tb10 text-lg-end">
                <a href="#" target="_blank" className="btn btn-secondary btn-lg btn-rounded DZBuyNowBtn btn-hover-1"><span>Get Started</span></a>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="section-full customize text-black" id="SupportSection">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center m-b30">
                <div className="title-box text-center">
                  <h6 className="sub-title text-secondary">Do You Need</h6>
                  <h2 className="m-b10">Do You Need Help To Customization</h2>
                </div>
                <h3 className="text-primary">After Purchase A Template...</h3>
                <h4>You Will Start Customizing According Your Requirement<br /> <span className="text-primary">BUT</span> What If You Don't Know</h4>
                <h3 className="text-black">SOLUTION IS <a target="_blank" href="https://wixor.com" rel="noopener noreferrer"><span className="text-primary font-weight-600">HIRE WIXOR</span></a></h3>
                <div className="hire">
                  <h4><span className="text-black">Hire Same Team For </span> <span className="text-primary">Quality Customization</span></h4>
                  <ul>
                    <li>In Order To Ensure Your Website Is Live, We Will Customize <br />The Template According To Your Requirements And Upload It to the Server.</li>
                  </ul>
                  <div className="m-t20">
                    <a href="#" target="_blank" className="btn btn-primary btn-rounded m-r10 button-md DZBuyNowBtn btn-hover-1"><span>Buy Now</span></a>
                    <a href="https://wixor.com" target="_blank" className="btn btn-secondary btn-rounded btn-hover-1" rel="noopener noreferrer"><span><i className="fa fa-envelope-o m-r5"></i> Support</span></a>
                  </div>
                </div>
              </div>
            </div>
            <img className="bg-image" src="/images/pngs/web-development-web-design-software-development-web-developer-png-favpng-a7VTaZKUh6SucwAvLKYCzRRa0-removebg-preview.png" alt="/" />
            <img className="bg-image1" src="/images/pngs/4-2-web-development-png-picture1-removebg-preview.png" alt="/" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="section-full theme-footer bg-dark text-white" style={{backgroundImage: `url(/images/portfolio/man-using-laptop-night-top-view-web-banner-with-copy-space.jpg)`}}>
          <div className="container-fluid text-center">
            <div className="news-letter">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Subscribe to get update, offers notification and information. </p>
              <div className="subscribe-form m-b20">
                <form className="dzSubscribe" action={`${baseUrl}/welcome/script/mailchamp.php`} method="post">
                  <div className="dzSubscribeMsg"></div>
                  <div className="input-group">
                    <input name="dzEmail" required className="form-control" placeholder="Your Email Address" type="email" />
                    <span className="input-group-btn">
                      <button name="submit" value="Submit" type="submit" className="btn btn-secondary btn-rounded btn-hover-1"><span>Subscribe</span></button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="requirement">
              <h2>Any Special <span>Requirement</span></h2>
              <h3>Write us At <a href="https://wixor.com" target="_blank" rel="noopener noreferrer">Wixor Support</a></h3>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="section-full bg-gray bg-img-fix content-inner pb-3">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Our Portfolio</h6>
              <h2>Explore Our Complete Template Collection</h2>
            </div>
            <div className="row sp50 justify-content-center">
              {[
                { title: 'ClinicMaster', category: 'Medical & Hospital', image: '/images/portfolio/clinicmaster.png', description: 'Medical Hospital & Doctor Multipurpose Bootstrap HTML Template' },
                { title: 'InkVoice', category: 'Blog & Magazine', image: '/images/portfolio/inkvoice.png', description: 'Creative Blog & Magazine Bootstrap HTML Template' },
                { title: 'Footflare', category: 'E-Commerce', image: '/images/portfolio/footflare.png', description: 'Shop & eCommerce Bootstrap HTML Template' },
                { title: 'PlantZone', category: 'E-Commerce', image: '/images/portfolio/plantzone.png', description: 'Shop & eCommerce Bootstrap HTML Template' },
                { title: 'W3Music', category: 'Music & Entertainment', image: '/images/portfolio/w3music.png', description: 'Music, Band, DJ Bootstrap HTML Template' },
                { title: 'Pixio', category: 'E-Commerce', image: '/images/portfolio/pixio.png', description: 'Shop & eCommerce Bootstrap HTML Template' },
                { title: 'PowerZone', category: 'Fitness & Gym', image: '/images/portfolio/powerzone.png', description: 'Fitness, Workout & Gym HTML Template' },
                { title: 'Swigo', category: 'Restaurant & Food', image: '/images/portfolio/swigo.png', description: 'Fast Food And Restaurant HTML Template' },
                { title: 'BodyClub', category: 'Fitness & Gym', image: '/images/portfolio/bodyclub.png', description: 'Fitness, Workout & Gym HTML Template' },
                { title: 'BodyShape', category: 'Fitness & Gym', image: '/images/portfolio/bodyshape.png', description: 'Fitness, Workout & Gym HTML Template' },
                { title: 'Akcel', category: 'Charity & Crowdfunding', image: '/images/portfolio/akcel.png', description: 'Crowdfunding & Charity HTML5 Template' },
                { title: 'Bookland', category: 'E-Commerce', image: '/images/portfolio/bookland.png', description: 'Bookstore E-commerce Bootstrap 5 HTML Template' },
                { title: 'Industry', category: 'Industrial & Factory', image: '/images/portfolio/industry.png', description: 'Factory & Industrial Template + RTL Ready' },
                { title: 'ConstructZilla', category: 'Construction', image: '/images/portfolio/constructzilla.png', description: 'Construction, Renovation & Building Bootstrap 4 & 5 Template With RTL Ready' },
                { title: 'Agency', category: 'Creative Agency', image: '/images/portfolio/agency.png', description: 'Creative Multipurpose HTML with RTL Ready' },
                { title: 'CargoZone', category: 'Transport & Logistics', image: '/images/portfolio/cargozone.png', description: 'Transport, Cargo, Logistics & Business Multipurpose HTML Template' },
                { title: 'MediCo', category: 'Medical & Hospital', image: '/images/portfolio/medico.png', description: 'Covid-19 & Hospital Doctor & Medical Clinic HTML Template' },
                { title: 'ButterFly', category: 'Beauty & Spa', image: '/images/portfolio/butterfly.png', description: 'Spa, Beauty Salon & Massage Template' },
                { title: 'Job Board', category: 'Job Portal', image: '/images/portfolio/jobboard.png', description: 'Job Portal HTML Template + RTL' },
                { title: 'YogaZone', category: 'Fitness & Yoga', image: '/images/portfolio/yogazone.png', description: 'Yoga, Fitness & Meditation Mobile Responsive Bootstrap Html Template' },
                { title: 'GardenZone', category: 'Agriculture', image: '/images/portfolio/gardenzone.png', description: 'Agriculture, Gardening & Landscaping Responsive HTML Template' },
                { title: 'Construct', category: 'Construction', image: '/images/portfolio/construct.png', description: 'Construction, Building & Maintenance Business Template' },
                { title: 'BeautyZone', category: 'Beauty & Spa', image: '/images/portfolio/beautyzone-html.png', description: 'Beauty Spa Salon & Massage HTML Template' },
                { title: 'EduZone', category: 'Education', image: '/images/portfolio/eduzone.png', description: 'Education Course & School Template + Admin Dashboard' },
                { title: 'Archia', category: 'Architecture', image: '/images/portfolio/archia.png', description: 'Architecture and Interior Design RTL Ready Template' },
                { title: 'Wedding Manager', category: 'Event Management', image: '/images/portfolio/wedding-manager.png', description: 'Manage Wedding Events and Vendor Listing Event Management WireFrame' },
                { title: 'CoviMap', category: 'Medical', image: '/images/portfolio/covimap.png', description: 'Coronavirus (Covid-19) Medical Prevention Template' },
                { title: 'RestroKing', category: 'Restaurant & Food', image: '/images/portfolio/restroking.png', description: 'Cake Pizza & Bakery Bootstrap 4 Template' },
                { title: 'Frost', category: 'Coming Soon', image: '/images/portfolio/frost.png', description: 'Coming Soon, Under Construction Bootstrap 4 Template' },
                { title: 'KingArchitect', category: 'Architecture', image: '/images/portfolio/kingarchitect.png', description: 'Creative Interior Design Website Template' },
                { title: 'LeMars', category: 'Blog', image: '/images/portfolio/lemars.png', description: 'Personal Blog Bootstrap 4 Template With PSD Files' },
                { title: 'Karciz', category: 'Event Management', image: '/images/portfolio/karciz.png', description: 'Event Ticketing Bootstrap Admin Template' },
                { title: 'CURV', category: 'Multipurpose', image: '/images/portfolio/curv.png', description: 'One Page Multipurpose Parallax' },
                { title: 'TradeZone', category: 'Industrial', image: '/images/portfolio/tradezone.png', description: 'Factory & Industrial One Page HTML Template' },
                { title: 'ConsultZone', category: 'Consulting', image: '/images/portfolio/consultzone.png', description: 'Multipurpose Consulting Bootstrap 5 HTML Template + RTL version' },
                { title: 'Lavi', category: 'Beauty & Spa', image: '/images/portfolio/lavi.png', description: 'Beauty Spa Salon Makeup Parlour Bootstrap 4 Template' },
                { title: 'Zapolo', category: 'Agency & Software', image: '/images/portfolio/zapolo.png', description: 'Agency App & Software Bootstrap 5 HTML Template' },
                { title: 'Mazo', category: 'Industrial', image: '/images/portfolio/mazo.png', description: 'Industry & Factory Bootstrap 5 HTML Template + RTL' },
                { title: 'Shivaa', category: 'Creative Agency', image: '/images/portfolio/shivaa.png', description: 'Creative Agency Bootstrap Template' },
                { title: 'ArchCode', category: 'Architecture', image: '/images/portfolio/archcode.png', description: 'Architecture Bootstrap 5 HTML Template' },
                { title: 'Visva', category: 'Architecture', image: '/images/portfolio/visva.png', description: 'Architect & Interior Design Bootstrap 5 Template' },
                { title: 'CoDesign', category: 'Architecture', image: '/images/portfolio/codesign.png', description: 'Architect & Interior Design HTML Template' },
                { title: 'Samar', category: 'Creative Agency', image: '/images/portfolio/samar.png', description: 'Creative Agency Bootstrap Template' },
                { title: 'SportsZone', category: 'Sports', image: '/images/portfolio/sportszone.png', description: 'Sports Club, New & Game Magazine Mobile Responsive Bootstrap HTML Template' },
                { title: 'BizMap', category: 'Business Directory', image: '/images/portfolio/bizmap.png', description: 'Business Directory Listing HTML Template' },
                { title: 'Kelsey', category: 'Blog', image: '/images/portfolio/kelsey.png', description: 'Creative Personal Blog HTML Template' },
                { title: 'Umang Academy', category: 'Education', image: '/images/portfolio/umang.png', description: 'Kindergarden, Kids Play School Template' },
                { title: 'Bucklin', category: 'Blog', image: '/images/portfolio/bucklin.png', description: 'Creative Personal Blog HTML Template' },
                { title: 'SmartClass', category: 'Education', image: '/images/portfolio/smartclass.png', description: 'Education Agency Coaching & Tuition HTML Template' },
                { title: 'SMART', category: 'Corporate Agency', image: '/images/portfolio/smart.png', description: 'Creative Corporate Agency Template' },
                { title: 'MyDiary', category: 'Blog & Magazine', image: '/images/portfolio/mydiary.png', description: 'Newspaper Magazine & Personal Blog HTML Template' },
                { title: 'Corella', category: 'Medical', image: '/images/portfolio/corella.png', description: 'Coronavirus (COVID-19) Social Awareness And Medical Prevention Template' },
                { title: 'Indiro', category: 'Industrial', image: '/images/portfolio/indiro.png', description: 'Factory and Industry Bootstrap 5 HTML Template + RTL' }
              ].map((item, index) => (
                <div key={index} className="col-md-6 col-xl-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay={`${(index % 10) * 0.1 + 0.1}s`}>
                  <div className="demo-box">
                    <div className="demo-area">
                      <a href="/portfolio" className="demo-media">
                        <img src={item.image} alt={item.title} />
                      </a>
                      <div className="demo-info">
                        <h4 className="dz-title"><a href="/portfolio">{item.title}</a></h4>
                        <p className="text-muted small">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center m-t30">
              <a href="/portfolio" className="btn btn-primary btn-lg btn-rounded btn-hover-1">
                <span>View All Templates</span>
              </a>
            </div>
            <div className="text-right">
              <a href="#SupportSection" className="need-any-help">
                <img src="/images/welcome/support.png" alt="" onError={(e) => e.target.style.display = 'none'} />
                Need Any Help Link
              </a>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="section-full content-inner-2">
          <div className="container-fluid">
            <div className="section-head title-box text-center">
              <h6 className="sub-title text-secondary">Awards Winning</h6>
              <h2>The Best of the Best - Our Winning Awards</h2>
            </div>
            <div className="awards-carousel owl-carousel owl-none">
              {awards.map((award, index) => (
                <div key={index} className="item">
                  <div className="awards-box">
                    <img src={`/images/awards/${award.img}`} alt="" onError={(e) => e.target.style.display = 'none'} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
