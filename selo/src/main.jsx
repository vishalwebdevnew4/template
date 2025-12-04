import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import 'wow.js/css/libs/animate.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './styles/original-style.css'
import './index.css'

// jQuery is loaded from CDN in index.html before this script runs
// Ensure it's available globally
if (typeof window !== 'undefined' && window.$) {
  window.jQuery = window.$
}

// Now import Owl Carousel - it will find jQuery on window
import 'owl.carousel'

// Import WOW.js
import WOW from 'wow.js'

import App from './App.jsx'

// Initialize WOW.js
if (typeof window !== 'undefined') {
  window.WOW = WOW;
  new WOW().init();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
