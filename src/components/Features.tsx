import React from 'react';
import { BellRing, MapPin, Star, Users } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, accentColor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className={`${accentColor} rounded-full w-14 h-14 flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BellRing className="w-7 h-7 text-white" />,
      title: "Emergency SOS",
      description: "Quickly send alerts to emergency services and trusted contacts with one tap in dangerous situations.",
      accentColor: "bg-red-500"
    },
    {
      icon: <MapPin className="w-7 h-7 text-white" />,
      title: "Live Location Sharing",
      description: "Share your real-time location with trusted contacts when you're on the move or feeling unsafe.",
      accentColor: "bg-blue-500"
    },
    {
      icon: <Star className="w-7 h-7 text-white" />,
      title: "Safe Area Zones",
      description: "Get safety zones for areas and routes before you travel, with real-time community updates.",
      accentColor: "bg-purple-500"
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: "Trusted Contacts",
      description: "Add family and friends who will be notified during emergencies with your exact location.",
      accentColor: "bg-pink-500"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-800">Safety tools designed for you</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Shield Sister combines powerful safety features to keep you protected
            anywhere, anytime. Never feel alone again.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;