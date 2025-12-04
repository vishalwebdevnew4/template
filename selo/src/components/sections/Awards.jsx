import './Awards.css';

const Awards = () => {
  const awards = [
    {
      icon: 'fas fa-sync-alt',
      title: 'Reliable and Regular Updates',
      description: 'Get a lifetime reliable & regular updates with your purchase.'
    },
    {
      icon: 'fas fa-award',
      title: '8 Years+ Envato Exclusive Author',
      description: 'DexignZone is a time-tested author with year\'s experience.'
    },
    {
      icon: 'fas fa-star',
      title: '5-Star Customer Support',
      description: 'More than 3000 resolved inquiries and happy customer reviews.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Customers Feedback Appreciative',
      description: 'Have a good idea or improvement? It can be ended up in our updates!'
    }
  ];

  return (
    <section className="awards-section section">
      <div className="container">
        <div className="section-title">
          <span className="section-badge">Awards Winning</span>
          <h2>The Best of the Best - Our Winning Awards</h2>
        </div>
        <div className="row">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-6 mb-4"
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay={index * 150}
            >
              <div className="award-card">
                <div className="award-icon">
                  <i className={award.icon}></i>
                </div>
                <h4>{award.title}</h4>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

