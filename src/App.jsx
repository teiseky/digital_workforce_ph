import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
  <Hero />
  <Solutions />
  <Testimonials />
  <About />
      <Contact />
    </div>
  );
}

export default App;