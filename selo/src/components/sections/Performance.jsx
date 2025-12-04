import './Performance.css';

const Performance = () => {
  const scores = [
    { name: 'Google Pagespeed', score: '91%', grade: 'A+' },
    { name: 'Pingdom Pagespeed', score: '90%', grade: 'A+' },
    { name: 'GTMetrix Pagespeed', score: '95%', grade: 'A+' }
  ];

  return (
    <section className="performance-section section">
      <div className="container">
        <div className="section-title">
          <span className="section-badge">Fast Time Load</span>
          <h2>Extremely Fast and Well Optimized</h2>
        </div>
        <div className="row">
          {scores.map((item, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-md-6 mb-4"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={index * 200}
            >
              <div className="performance-card">
                <div className="performance-grade">{item.grade}</div>
                <h4>{item.name}</h4>
                <div className="score-circle">
                  <div className="score-value">{item.score}</div>
                  <p>Score</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="performance-footer text-center mt-5">
          <h3>Make your site the 1st-rank.</h3>
          <p>All the necessary plugins for SEO Optimization are bundled.</p>
          <a href="#help" className="help-link">Need Any Help Link</a>
        </div>
      </div>
    </section>
  );
};

export default Performance;

