import './HomePages.css';

const HomePages = () => {
  const homePages = [
    {
      id: 1,
      title: 'Home Page 04',
      technologies: ['HTML', 'Django', 'WordPress', 'React', 'Vue Js', 'Asp.net', 'React Tailwind', 'Tailwind']
    },
    {
      id: 2,
      title: 'Home Page 01',
      technologies: ['HTML', 'Django', 'WordPress', 'React', 'Vue Js', 'React Tailwind', 'Tailwind']
    },
    {
      id: 3,
      title: 'Home Page 02',
      technologies: ['HTML', 'Django', 'WordPress', 'React', 'Vue Js', 'React Tailwind', 'Tailwind']
    },
    {
      id: 4,
      title: 'Home Page 03',
      technologies: ['HTML', 'Django', 'WordPress', 'React', 'Vue Js', 'React Tailwind', 'Tailwind']
    }
  ];

  return (
    <section id="home-pages" className="home-pages-section section">
      <div className="container">
        <div className="section-title">
          <span className="section-badge">04+ Home Pages</span>
          <h2>Stunning Diverse Website Introduction</h2>
        </div>
        <div className="row">
          {homePages.map((page, index) => (
            <div 
              key={page.id} 
              className="col-lg-3 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={200 * (index + 1)}
            >
              <div className="home-page-card animate__animated animate__fadeIn">
                <div className="home-page-preview">
                  <img 
                    src={`/images/demo/${page.id === 1 ? 'index-4-full.png' : page.id === 2 ? 'index-full.png' : page.id === 3 ? 'index-2-full.png' : 'index-3-full.png'}`}
                    alt={page.title}
                    className="preview-image"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&q=80`;
                    }}
                  />
                  <div className="preview-overlay">
                    <span>{page.title}</span>
                  </div>
                </div>
                <div className="home-page-info">
                  <h4>{page.title}</h4>
                  <div className="technologies">
                    {page.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
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

export default HomePages;

