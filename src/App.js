import React, { useEffect } from 'react'
import About from './components/About'
import Card from './components/Card'
import Footer from './components/Footer'
import Skills from './components/Skills'
import ContactMe from './components/contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
        
    })
  })
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
        <Skills />
        <ContactMe />
        <Footer />

      </div>
    </div>
  );
}
export default App;
