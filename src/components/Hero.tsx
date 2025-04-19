import React from 'react';
import { Download, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white min-h-[90vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 mr-2 text-pink-400" />
            <h3 className="text-xl font-bold">Shield Sister</h3>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Personal <span className="text-pink-400">Safety</span>{' '}
            Companion
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Never walk alone again. Shield Sister provides real-time protection,
            emergency response, and peace of mind for women on the go.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" /><a href="\assets\apks\ShieldSister.apk" download="ShieldSister.apk">
              Download App</a>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-[280px] md:w-[320px]">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-purple-600/30 rounded-[40px] blur-xl"></div>
            <img
              src="/assets/images/Homepage.jpg"
              alt="Shield Sister App"
              className="relative z-10 rounded-[32px] shadow-2xl border-8 border-gray-800 object-cover h-[580px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent rounded-[32px] z-20"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
