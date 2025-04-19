

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    image: "/assets/images/Homepage.jpg",
    caption: "Emergency SOS Screen",
    description: "Trigger alerts to contacts or authorities with one tap."
  },
  {
    image: "/assets/images/FakeCall.jpg",
    caption: "Fake Call Feature",
    description: "Simulate a call to discreetly exit unsafe situations."
  },
  {
    image: "/assets/images/SafetyMap.jpg",
    caption: "Safety Zones & Routes",
    description: "Plan safer routes with real-time safety data."
  },
  {
    image: "/assets/images/Manual.jpg",
    caption: "Safety Tips & Manual",
    description: "Access guides to enhance your safety preparedness."
  }
];

const AppScreenshots = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = () => {
    setCurrent(current === screenshots.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? screenshots.length - 1 : current - 1);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoSliding) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current, isAutoSliding]);

  // Touch swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoSliding(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    setIsAutoSliding(true);
  };

  return (
    <section id="screenshots" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold tracking-wide">
            APP PREVIEW
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6 text-gray-900">
            Discover Shield Sister
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access powerful safety tools through a sleek, intuitive interface designed for emergencies.
          </p>
        </div>

        {/* Mobile Carousel (9:16 Aspect Ratio) */}
        <div
          className="relative md:hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl w-full aspect-[9/16] max-w-[360px] mx-auto">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                  index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <img
                  src={screenshot.image}
                  alt={`App Screenshot ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                  <p className="text-white text-lg font-semibold">{screenshot.caption}</p>
                  <p className="text-white/80 text-sm mt-2">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="flex justify-center mt-6 gap-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-purple-600 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={screenshot.image}
                alt={`App Screenshot ${index + 1}`}
                className="w-full aspect-[9/16] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xl font-semibold">{screenshot.caption}</p>
                <p className="text-white/80 text-sm mt-2">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;