import React from 'react';
import { Shield, MapPin, AlertCircle, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-800">
              Making the world safer for women
            </h2>
            <p className="text-gray-600 mb-6">
              Shield Sister was created with a single mission: to empower women to feel safe anywhere they go.
              Our team of security experts, engineers, and community advocates came together to build a solution
              that combines cutting-edge technology with practical safety features.
            </p>
            <p className="text-gray-600 mb-6">
              Built with Flutter and Firebase, Shield Sister utilizes real-time data to keep users informed 
              and protected. Our system helps prevent crimes using live location sharing, safety zone mapping, 
              and instant emergency response capabilities.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <h4 className="font-semibold">End-to-end Encrypted</h4>
                  <p className="text-sm text-gray-600">Your data stays private</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <h4 className="font-semibold">Global Coverage</h4>
                  <p className="text-sm text-gray-600">Works worldwide</p>
                </div>
              </div>
              <div className="flex items-center">
                <AlertCircle className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <h4 className="font-semibold">24/7 Monitoring</h4>
                  <p className="text-sm text-gray-600">Always on alert</p>
                </div>
              </div>
              <div className="flex items-center">
                <User className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <h4 className="font-semibold">Community Driven</h4>
                  <p className="text-sm text-gray-600">Built with user feedback</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
            
            <div className="relative bg-white rounded-xl shadow-xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full -mr-12 -mt-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Impact</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-pink-500">50K+</p>
                    <p className="text-gray-600">Active Users</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">100+</p>
                    <p className="text-gray-600">Cities Covered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-pink-500">1000+</p>
                    <p className="text-gray-600">Emergency Alerts</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">4.8/5</p>
                    <p className="text-gray-600">User Rating</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="italic text-gray-700">
                    "Shield Sister gave me the confidence to walk home at night after late shifts. 
                    It's not just an app, it's peace of mind."
                  </p>
                  <p className="text-sm font-semibold mt-2">— Sarah, Nurse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;