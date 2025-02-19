"use client";

import React from "react";
import { ArrowRight, Building2, Rocket, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "For businesses",
      description:
        "I drive product strategy and develop sustainable solutions that create long-term value for customers. My approach combines data-driven insights with practical implementation strategies to ensure successful outcomes.",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "For startups",
      description:
        "I help identify market opportunities and develop strategic MVPs that resonate with users. Through careful analysis and rapid iteration, I provide guidance on tools and technologies that accelerate your product development journey.",
      icon: <Rocket className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "For product teams",
      description:
        "I lead growth initiatives and help teams approach challenges with strategic frameworks. By implementing effective processes and methodologies, I enable teams to build successful products that scale and deliver measurable results.",
      icon: <Users className="w-6 h-6 text-purple-600" />,
    },
  ];

  return (
    <div className="mt-16 p-4 bg-white overflow-hidden">
      {/* Background gradient similar to HeroSection */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/2 bottom-1/3 right-0 w-96 h-96 bg-purple-400/70 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/60 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-orange-500/50 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            What I can do for you ?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Helping businesses and teams build better products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
