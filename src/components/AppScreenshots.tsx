import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const screenshots = [
  {
    image: "/assets/images/Homepage.jpg",
    caption: "Emergency SOS Screen with One-Tap Alert"
  },
  {
    image: "/assets/images/FakeCall.jpg",
    caption: "Fake Call Feature for Discreet Help"
  },
  {
    image: "/assets/images/SafetyMap.jpg",
    caption: "Area Safety Zones and Route Planning"
  },
  {
    image: "/assets/images/contact.png",
    caption: "Trusted Contacts and Emergency Alerts"
  },
  {
    image: "/assets/images/Login.jpg",
    caption: "User-Friendly Login and Registration"
  },
  {
    image: "/assets/images/registraion.jpg",
    caption: "Registration Screen with Easy Setup"
  },
  {
    image: "/assets/images/Friends.jpg",
    caption: "Friend List and Location Sharing"
  },
  {
    image: "/assets/images/profile.png",
    caption: "User Profile and Settings"
  },
  {
    image: "/assets/images/soslaert.png",
    caption: "SOS Alert Screen with Location Sharing"
  },
];

// CSS 3D Phone Component
const Phone3D = ({ screenshot }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative mx-auto"
      style={{ 
        width: '280px', 
        height: '580px',
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      initial={{ rotateY: 0 }}
      animate={{ 
        rotateY: isHovered ? 15 : 0,
        rotateX: isHovered ? -5 : 0
      }}
      transition={{ type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Phone frame */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] shadow-xl"
        style={{ 
          transformStyle: 'preserve-3d',
          boxShadow: isHovered ? 
            '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.1)' : 
            '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Phone screen */}
        <div 
          className="absolute overflow-hidden bg-white"
          style={{
            top: '12px',
            left: '12px',
            right: '12px',
            bottom: '12px',
            borderRadius: '32px',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(2px)'
          }}
        >
          <img 
            src={screenshot.image} 
            alt={screenshot.caption}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Home button */}
        <div 
          className="absolute bg-gray-500 rounded-full"
          style={{
            width: '60px',
            height: '4px',
            bottom: '12px',
            left: '50%',
            transform: 'translateX(-50%) translateZ(3px)',
            transformStyle: 'preserve-3d'
          }}
        ></div>
        
        {/* Camera */}
        <div 
          className="absolute bg-gray-900 rounded-full"
          style={{
            width: '12px',
            height: '12px',
            top: '24px',
            left: '50%',
            transform: 'translateX(-50%) translateZ(3px)',
            transformStyle: 'preserve-3d'
          }}
        ></div>
        
        {/* Side buttons */}
        <div 
          className="absolute bg-gray-700 rounded-l-lg"
          style={{
            width: '3px',
            height: '30px',
            top: '120px',
            left: '-2px',
            transform: 'translateZ(0px)',
            transformStyle: 'preserve-3d'
          }}
        ></div>
        
        <div 
          className="absolute bg-gray-700 rounded-l-lg"
          style={{
            width: '3px',
            height: '60px',
            top: '170px',
            left: '-2px',
            transform: 'translateZ(0px)',
            transformStyle: 'preserve-3d'
          }}
        ></div>
        
        <div 
          className="absolute bg-gray-700 rounded-r-lg"
          style={{
            width: '3px',
            height: '40px',
            top: '140px',
            right: '-2px',
            transform: 'translateZ(0px)',
            transformStyle: 'preserve-3d'
          }}
        ></div>
        
        {/* Reflections */}
        <div 
          className="absolute inset-0 rounded-[40px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)',
            transform: 'translateZ(3px)',
            transformStyle: 'preserve-3d'
          }}
        ></div>
      </div>
      
      {/* Phone shadow */}
      <div 
        className="absolute rounded-full bg-black/20 blur-xl"
        style={{
          width: '80%',
          height: '20px',
          bottom: '-30px',
          left: '10%',
          transform: isHovered ? 'translateY(10px) scaleX(1.2)' : 'translateY(0) scaleX(1)',
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
    </motion.div>
  );
};

const AppScreenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold">APP PREVIEW</span>
          <h2 className="text-4xl font-extrabold mt-4 mb-6 text-gray-800 tracking-tight">See Shield Sister in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our intuitive interface makes safety features accessible with just a few taps. Designed for speed and ease of use, especially in emergencies.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="rounded-2xl py-10"
        >
          {screenshots.map((screenshot, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Phone3D screenshot={screenshot} />
                  <p className="text-center mt-6 text-gray-700 font-medium">{screenshot.caption}</p>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AppScreenshots;