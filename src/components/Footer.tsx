import React from 'react';
import { Shield, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 mr-2 text-pink-400" />
              <h3 className="text-xl font-bold">Shield Sister</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your personal safety companion, designed to keep you protected and give you peace of mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#screenshots" className="text-gray-400 hover:text-white transition-colors">App Screenshots</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Download</h4>
            <p className="text-gray-400 mb-4">Get Shield Sister on your device</p>
            <div className="flex flex-col space-y-3">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded flex items-center">
                <img src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg" alt="App Store" className="h-8" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors p-2 rounded flex items-center">
                <img src="https://cdn.worldvectorlogo.com/logos/google-play-badge.svg" alt="Google Play" className="h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Shield Sister. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;