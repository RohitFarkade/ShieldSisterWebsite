
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    navigate('/download-confirmation');
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white text-gray-800 shadow-md py-3'
            : 'bg-transparent text-white py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center">
              <Shield
                className={`w-6 h-6 mr-2 ${
                  isScrolled ? 'text-purple-600' : 'text-pink-400'
                }`}
              />
              <span className="text-xl font-bold">Shield Sister</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-pink-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-pink-400 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#about"
                className="hover:text-pink-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-pink-400 transition-colors"
              >
                Contact
              </a>
              <button
                onClick={handleDownload}
                className={`${
                  isScrolled
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white'
                } py-2 px-5 rounded-full transition-colors font-medium`}
              >
                Download App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute left-0 right-0 top-full bg-white text-gray-800 shadow-md transition-all duration-300 overflow-hidden z-50 ${
              isOpen ? 'max-h-[400px] py-4' : 'max-h-0'
            }`}
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a
                href="#features"
                className="py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#about"
                className="py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleDownload();
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-5 rounded-lg transition-colors font-medium text-center"
              >
                Download App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Click-outside Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
