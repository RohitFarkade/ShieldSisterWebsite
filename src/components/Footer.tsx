

import React from 'react';
import { Shield, Github, Mail, Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 mr-2 text-pink-400" />
              <h3 className="text-xl font-bold">Shield Sister</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your personal safety companion, designed to keep you protected and give you peace of mind.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:shieldsister.app@gmail.com"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/RohitFarkade/ShieldSisterWebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors hover:underline">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors hover:underline">How It Works</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors hover:underline">About Us</a></li>
              <li><a href="#screenshots" className="text-gray-400 hover:text-white transition-colors hover:underline">App Screenshots</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Download + GitHub */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Get the App</h4>
              <p className="text-gray-400 mb-4">Install Shield Sister on your device</p>
              <a
                href="/apks/ShieldSister.apk"
                download="ShieldSister.apk"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition-colors"
              >
                <Download className="w-4 h-4" /> Download App
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">GitHub Repositories</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/RohitFarkade/Front_End"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    <Github className="w-4 h-4" /> App Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RohitFarkade/ShieldSisterWebsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    <Github className="w-4 h-4" /> Website Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            Empowering women with technology, one shield at a time.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Shield Sister. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
