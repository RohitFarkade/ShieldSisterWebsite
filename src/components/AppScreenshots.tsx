import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    image: "https://images.pexels.com/photos/6007873/pexels-photo-6007873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Emergency SOS Screen with One-Tap Alert"
  },
  {
    image: "https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Live Location Sharing with Trusted Contacts"
  },
  {
    image: "https://images.pexels.com/photos/6146939/pexels-photo-6146939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Area Safety Scores and Route Planning"
  }
];

const AppScreenshots: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === screenshots.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? screenshots.length - 1 : current - 1);
  };

  return (
    <section id="screenshots" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold">APP PREVIEW</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-800">See Shield Sister in action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our intuitive interface makes safety features accessible with just a few taps.
            Designed for speed and ease of use, especially in emergency situations.
          </p>
        </div>
        
        {/* Mobile Carousel */}
        <div className="relative md:hidden">
          <div className="overflow-hidden rounded-2xl shadow-xl h-[500px]">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                  index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <img 
                  src={screenshot.image} 
                  alt={`App Screenshot ${index + 1}`} 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                  <p className="text-white text-lg font-semibold">{screenshot.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
          
          <div className="flex justify-center mt-4 gap-2">
            {screenshots.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2">
              <img 
                src={screenshot.image} 
                alt={`App Screenshot ${index + 1}`} 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-semibold">{screenshot.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;