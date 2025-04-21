
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          spaceBetween={20}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
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
          className="rounded-2xl"
        >
          {screenshots.map((screenshot, index) => (
            // <SwiperSlide key={index}>
            //   <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2">
            //     <div style={{ aspectRatio: '9/20' }}>
            //       <img
            //         src={screenshot.image}
            //         alt={`App Screenshot ${index + 1}`}
            //         className="w-full h-full object-cover"
            //       />
            //     </div>
            //     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            //     <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            //       <p className="text-white text-base font-semibold text-center">{screenshot.caption}</p>
            //     </div>
            //   </div>
            // </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto w-[240] md:w-[280]" style={{ aspectRatio: '9/20' }}>
                <img
                  src={screenshot.image}
                  alt={`App Screenshot ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AppScreenshots;
