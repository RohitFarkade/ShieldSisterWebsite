
// import React from 'react';
// import { Shield, MapPin, AlertCircle, User } from 'lucide-react';
// import { motion } from 'framer-motion';

// const developers = [
//   {
//     name: "Developer One",
//     email: "dev1@example.com",
//     github: "https://github.com/dev1",
//   },
//   {
//     name: "Developer Two",
//     email: "dev2@example.com",
//     github: "https://github.com/dev2",
//   },
//   {
//     name: "Developer Three",
//     email: "dev3@example.com",
//     github: "https://github.com/dev3",
//   },
//   {
//     name: "Developer Four",
//     email: "dev4@example.com",
//     github: "https://github.com/dev4",
//   },
//   {
//     name: "Developer Five",
//     email: "dev5@example.com",
//     github: "https://github.com/dev5",
//   },
// ];

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold">ABOUT US</span>
//             <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-800">
//               Making the world safer for women
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Shield Sister was created with a single mission: to empower women to feel safe anywhere they go.
//               Our team of security experts, engineers, and community advocates came together to build a solution
//               that combines cutting-edge technology with practical safety features.
//             </p>
//             <p className="text-gray-600 mb-6">
//               Currently in development, Shield Sister is being built with Flutter and Firebase to ensure a seamless 
//               and secure experience. Our goal is to provide real-time safety updates, emergency alerts, and location sharing — 
//               all in one easy-to-use app.
//             </p>

//             <div className="grid grid-cols-2 gap-4 mt-8">
//               <div className="flex items-center">
//                 <Shield className="w-6 h-6 text-purple-600 mr-3" />
//                 <div>
//                   <h4 className="font-semibold">End-to-end Encrypted</h4>
//                   <p className="text-sm text-gray-600">Your data stays private</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="w-6 h-6 text-purple-600 mr-3" />
//                 <div>
//                   <h4 className="font-semibold">Global Coverage</h4>
//                   <p className="text-sm text-gray-600">Works worldwide</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <AlertCircle className="w-6 h-6 text-purple-600 mr-3" />
//                 <div>
//                   <h4 className="font-semibold">24/7 Monitoring</h4>
//                   <p className="text-sm text-gray-600">Always on alert</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <User className="w-6 h-6 text-purple-600 mr-3" />
//                 <div>
//                   <h4 className="font-semibold">Community Driven</h4>
//                   <p className="text-sm text-gray-600">Built with user feedback</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
//             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-xl"></div>

//             <div className="relative bg-white rounded-xl shadow-xl p-8 overflow-hidden">
//               <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full -mr-12 -mt-12"></div>

//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>

//                 <div className="grid grid-cols-2 gap-6 mb-8">
//                   <div>
//                     <p className="text-3xl font-bold text-pink-500">Launching Soon</p>
//                     <p className="text-gray-600">Be one of the first users</p>
//                   </div>
//                   <div>
//                     <p className="text-3xl font-bold text-purple-600">Safety First</p>
//                     <p className="text-gray-600">Designed for real-world security</p>
//                   </div>
//                   <div>
//                     <p className="text-3xl font-bold text-pink-500">Community Focused</p>
//                     <p className="text-gray-600">Built with your feedback</p>
//                   </div>
//                   <div>
//                     <p className="text-3xl font-bold text-purple-600">Peace of Mind</p>
//                     <p className="text-gray-600">Anytime, anywhere</p>
//                   </div>
//                 </div>

//                 <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
//                   <p className="italic text-gray-700">
//                     "We're building Shield Sister to give every woman the confidence to move freely, safely, and independently. 
//                     It's not just tech — it's our promise."
//                   </p>
//                   <p className="text-sm font-semibold mt-2">— The Shield Sister Team</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Developer Info Section */}
//         <div className="mt-20">
//           <motion.h3
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left"
//           >
//             Meet the Developers
//           </motion.h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {developers.map((dev, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="w-20 h-20 mb-4 sm:mb-0 sm:w-16 sm:h-16 bg-gray-200 rounded-full overflow-hidden">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
//                     alt={dev.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <h4 className="font-semibold text-gray-800">{dev.name}</h4>
//                   <p className="text-sm text-gray-600">{dev.email}</p>
//                   <a
//                     href={dev.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-purple-600 text-sm hover:underline"
//                   >
//                     GitHub Profile
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { Shield, MapPin, AlertCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';

const developers = [
  {
    name: "Developer One",
    email: "dev1@example.com",
    github: "https://github.com/dev1",
  },
  {
    name: "Developer Two",
    email: "dev2@example.com",
    github: "https://github.com/dev2",
  },
  {
    name: "Developer Three",
    email: "dev3@example.com",
    github: "https://github.com/dev3",
  },
  {
    name: "Developer Four",
    email: "dev4@example.com",
    github: "https://github.com/dev4",
  },
  {
    name: "Developer Five",
    email: "dev5@example.com",
    github: "https://github.com/dev5",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold animate-bounce">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-gray-900 leading-tight">Making the world safer for women</h2>
            <p className="text-lg text-gray-700 mb-6">
              Shield Sister was created with a single mission: to empower women to feel safe anywhere they go.
              Our team of security experts, engineers, and community advocates came together to build a solution
              that combines cutting-edge technology with practical safety features.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Currently in development, Shield Sister is being built with Flutter and Firebase to ensure a seamless 
              and secure experience. Our goal is to provide real-time safety updates, emergency alerts, and location sharing — 
              all in one easy-to-use app.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[{
                icon: Shield,
                title: 'End-to-end Encrypted',
                desc: 'Your data stays private'
              }, {
                icon: MapPin,
                title: 'Global Coverage',
                desc: 'Works worldwide'
              }, {
                icon: AlertCircle,
                title: '24/7 Monitoring',
                desc: 'Always on alert'
              }, {
                icon: User,
                title: 'Community Driven',
                desc: 'Built with user feedback'
              }].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start"
                >
                  <feature.icon className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl p-10 overflow-hidden transition-transform transform hover:scale-[1.01]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full -mr-12 -mt-12"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h3>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {[
                    ['Launching Soon', 'Be one of the first users', 'text-pink-500'],
                    ['Safety First', 'Designed for real-world security', 'text-purple-600'],
                    ['Community Focused', 'Built with your feedback', 'text-pink-500'],
                    ['Peace of Mind', 'Anytime, anywhere', 'text-purple-600']
                  ].map(([title, desc, color], index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <p className={`text-2xl font-bold ${color}`}>{title}</p>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-purple-50 rounded-xl p-5 border-l-4 border-purple-500 shadow"
                >
                  <p className="italic text-gray-700">
                    "We're building Shield Sister to give every woman the confidence to move freely, safely, and independently. 
                    It's not just tech — it's our promise."
                  </p>
                  <p className="text-sm font-semibold mt-2">— The Shield Sister Team</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Developer Info Section */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10 text-gray-900 text-center"
          >
            Meet the Developers
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {developers.map((dev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-24 h-24 mb-4 bg-gray-200 rounded-full overflow-hidden shadow-md">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    alt={dev.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-gray-800">{dev.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{dev.email}</p>
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 text-sm hover:underline"
                  >
                    GitHub Profile
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
