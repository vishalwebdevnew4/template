import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Hide loading screen after page load
    const loadingArea = document.getElementById('loading-area');
    if (loadingArea) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          loadingArea.style.display = 'none';
        }, 500);
      });
    }

    // Scroll to top button functionality
    const scrollTopBtn = document.querySelector('.scroltop-progress');
    if (scrollTopBtn) {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxHeight) * 100;
        const path = scrollTopBtn.querySelector('path');
        if (path) {
          const circumference = 307.919;
          const offset = circumference - (progress / 100) * circumference;
          path.style.strokeDashoffset = `${offset}px`;
        }
        if (scrolled > 100) {
          scrollTopBtn.classList.add('active-progress');
        } else {
          scrollTopBtn.classList.remove('active-progress');
        }
      };
      window.addEventListener('scroll', handleScroll);
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <Router>
      <div className="App" id="bg">
        {/* Loading Screen */}
        <div id="loading-area" className="loading-page-3">
          <img src="https://swigo.dexignzone.com/welcome/images/loading.gif" alt="" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        {/* Buy Now Button */}
        <a 
          rel="nofollow" 
          href="https://1.envato.market/dakAOy" 
          target="_blank" 
          className="DZ-bt-buy-now DZ-theme-btn theme-btn bt-buy-now"
        >
          <svg height="40" viewBox="0 -31 512.00026 512" width="40" xmlns="http://www.w3.org/2000/svg">
            <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"></path>
            <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path>
            <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path>
          </svg>
          <span>Buy Now</span>
        </a>
        {/* Support Button */}
        <a 
          href="https://wixor.com" 
          target="_blank" 
          className="DZ-bt-support-now DZ-theme-btn theme-btn bt-support-now"
          rel="noreferrer"
        >
          <svg id="Capa_1" enableBackground="new 0 0 512 512" height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m483.637 213.16c-10.222-6.317-21.601-7.603-31.637-6.615v-10.545c0-107.799-88.214-196-196-196-107.799 0-196 88.214-196 196v10.545c-10.036-.989-21.416.298-31.637 6.615-18.821 11.632-28.363 36.139-28.363 72.84 0 36.762 9.56 61.399 28.415 73.228 9.366 5.876 20.304 7.917 31.585 6.947v10.825c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-181c0-8.284-6.716-15-15-15h-44.315c7.608-84.529 78.839-151 165.315-151s157.707 66.471 165.315 151h-44.315c-8.284 0-15 6.716-15 15v181c0 8.284 6.716 15 15 15h45v15c0 24.813-20.187 45-45 45h-48.58c-6.192-17.458-22.865-30-42.42-30h-30c-24.813 0-45 20.187-45 45s20.187 45 45 45h30c19.555 0 36.228-12.542 42.42-30h48.58c41.355 0 75-33.645 75-75 0-18.271 0-28.969 0-40.826 11.282.97 22.221-1.072 31.585-6.947 18.855-11.828 28.415-36.465 28.415-73.227 0-36.701-9.542-61.208-28.363-72.84zm-423.637 122.821c-4.786.833-10.768.891-15.642-2.167-9.259-5.808-14.358-22.789-14.358-47.814 0-24.785 4.985-41.569 14.036-47.259 4.894-3.077 11.06-2.858 15.964-1.89zm60-124.981v151h-30v-151zm166 271h-30c-8.271 0-15-6.729-15-15s6.729-15 15-15h30c8.271 0 15 6.729 15 15s-6.729 15-15 15zm136-120h-30v-151h30zm45.749-28.253c-4.848 3.095-10.896 3.035-15.749 2.194v-99.089c4.904-.968 11.069-1.187 15.964 1.89 9.051 5.689 14.036 22.473 14.036 47.258 0 24.923-5.062 41.88-14.251 47.747z"></path>
            </g>
          </svg>
          <span>Support</span>
        </a>
        {/* Scroll to Top Button */}
        <div className="scroltop-progress scroltop-primary active-progress">
          <svg width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '24.3299px'}}></path>
          </svg>
        </div>
      </div>
    </Router>
  );
}

export default App;
