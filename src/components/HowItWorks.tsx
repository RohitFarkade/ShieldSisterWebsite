import React from 'react';
import { CheckCircle, Circle, UserPlus, Navigation, MessageCircle } from 'lucide-react';

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
};

const Step: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {icon}
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
        )}
      </div>
      <div className="ml-6 pb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 max-w-lg">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Register & Add Trusted Contacts",
      description: "Create an account and add trusted friends and family members who will be notified in case of an emergency.",
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Enable Live Tracking or Send SOS",
      description: "Use live location tracking when traveling in unfamiliar areas or send an immediate SOS alert with one tap when you feel unsafe.",
      icon: <Navigation className="w-6 h-6" />
    },
    {
      number: 3,
      title: "Stay Informed With Safety Scores",
      description: "Get real-time updates about the safety of different areas and receive alerts when entering high-risk zones.",
      icon: <MessageCircle className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-800">Simple steps to stay safe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Shield Sister is designed to be intuitive and easy to use, especially in emergency situations
            when every second counts.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16">
          {steps.map((step, index) => (
            <Step 
              key={index} 
              {...step} 
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;