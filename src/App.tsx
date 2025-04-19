
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import AppScreenshots from './components/AppScreenshots';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DownloadConfirmation from './components/DownloadConformation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/download-confirmation" element={<DownloadConfirmation />} />
        <Route path="/" element={
          <div className="font-sans">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <About />
            <AppScreenshots />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;