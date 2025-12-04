import { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      author: 'vgnocchi',
      type: 'Customer',
      title: 'Code Quality',
      text: 'Mind Blowing design and coding quality, easy to customize, easy to use and I just loving to work with this template. I can use it\'s any section any where easily. CSS, JS and even HTML everything is perfect and I can say for this item , this is really Created With Love, Thank you so much Team.'
    },
    {
      author: 'ary-themes',
      type: 'Customer',
      title: 'Flexibility',
      text: 'I like it\'s beautiful design and fast support of team. 5 beautiful home screens make me happy, I can change screen any time and home page I can choose for my blog. Thank you team'
    },
    {
      author: 'wilson765',
      type: 'Customer',
      title: 'Design Quality',
      text: 'This has been a really great template to work with. Well documented and robust. Contacted support with one thing I needed help with and they got back in minutes with the solution - brilliant. Will keep an eye out for their work in the future.'
    },
    {
      author: 'martincamellia',
      type: 'Customer',
      title: 'Flexibility',
      text: 'Hey, I loved it\'s great design and using this for my online book selling website [ readtheworld.eu ]. I am thankful to the support team. They setup my website and give me paid services also for my custom requirements and make my website a complete booking selling website. finally I am happy to work with technology experts.'
    },
    {
      author: 'brokerc3',
      type: 'Customer',
      title: 'Design Quality',
      text: 'I purchased the GardenZone template yesterday and it is fantastic. The html built well and well commented, as is the css and js. This gives me a great starting point and save me loads of work. The support team is also great and very fast at responding.'
    },
    {
      author: '2goodtech',
      type: 'Customer',
      title: 'Design Quality',
      text: 'Design looks great. Code-wise.. I can rate this 9/10. Easy to customize. Easy to edit. I don\'t like the heavy rev slider but I re-coded what I needed with Owl. Good theme. Gets the job done.'
    },
    {
      author: 'diegommagno',
      type: 'Customer',
      title: 'Design Quality',
      text: 'My client was in need of a website with a deadline of 4 days. It was perfect to find MediCo., a lightweight template where you have all the pages and features you may need already designed in the best possible way.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviews-section section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <span className="section-badge">Template Reviews</span>
          <h2>What Our Customers Are Saying</h2>
        </div>
        <div className="reviews-carousel" data-aos="fade-up" data-aos-delay="200">
          <div className="review-card animate__animated animate__fadeIn">
            <div className="review-header">
              <div className="review-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <h4>{reviews[currentIndex].title}</h4>
            </div>
            <p className="review-text">{reviews[currentIndex].text}</p>
            <div className="review-author">
              <strong>{reviews[currentIndex].author}</strong> {reviews[currentIndex].type}
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={prevReview} className="carousel-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-dots">
              {reviews.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
            <button onClick={nextReview} className="carousel-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="#help" className="help-link">Need Any Help Link</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

