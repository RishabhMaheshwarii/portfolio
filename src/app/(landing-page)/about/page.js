"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  BookOpen,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Coffee,
  BookMarked,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categoryColors = {
  "Product Strategy & Management": {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  "Data & Analytics": {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200",
  },
  "Technical & Tools": {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
  },
};

const skillsets = [
  {
    category: "Product Strategy & Management",
    skills: [
      { name: "Product Strategy", level: "Expert" },
      { name: "Roadmap Planning", level: "Expert" },
      { name: "Agile/Scrum", level: "Expert" },
      { name: "Product Discovery", level: "Advanced" },
      { name: "Sprint Planning", level: "Expert" },
      { name: "Stakeholder Management", level: "Expert" },
      { name: "Go-to-Market", level: "Advanced" },
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Product Analytics", level: "Expert" },
      { name: "A/B Testing", level: "Advanced" },
      { name: "User Research", level: "Expert" },
      { name: "Market Analysis", level: "Advanced" },
      { name: "Data-Driven Decisions", level: "Expert" },
      { name: "KPI Definition", level: "Expert" },
    ],
  },
  {
    category: "Technical & Tools",
    skills: [
      { name: "Jira", level: "Expert" },
      { name: "Figma", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "API Design", level: "Advanced" },
      { name: "Product Specs", level: "Expert" },
      { name: "PRD Writing", level: "Expert" },
      { name: "Confluence", level: "Advanced" },
      { name: "Click Up", level: "Expert" },
    ],
  },
];
const quickInfo = {
  location: {
    city: "Delhi, India",
    coordinates: {
      lat: 28.6139,
      lng: 77.209,
    },
  },
  currentlyReading: [
    {
      title: "Inspired: How to Create Tech Products Customers Love",
      author: "Marty Cagan",
      progress: 75,
      imageUrl: "/insipred.jpg",
    },
    {
      title: "Empowered: Ordinary People, Extraordinary Products",
      author: "Marty Cagan",
      progress: 45,
      imageUrl: "/empowered.jpg",
    },
  ],
  funFacts: [
    {
      icon: <Coffee className="w-5 h-5" />,
      label: "Coffee Consumed",
      value: "∞ cups",
    },
    {
      icon: <BookMarked className="w-5 h-5" />,
      label: "Books Read in 2024",
      value: "5",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Products Shipped",
      value: "12+",
    },
  ],
};
const experiences = [
  {
    title: "Product Manager",
    company: "FuelBuddy",
    period: "May 2024 - Present",
    description: [
      "Developing Customer Native app, post PWA rated 1.7 on play store",
      "Leading from design to complete development of customer app launching on 15th Nov (PAN India)",
      "End to end CRM development, Improved Wallet architecture for postpaid clients",
      "Ensuring better delivery UX, API optimization by reduction in API cost by 25%",
    ],
    skills:
      "Jira, Stakeholder Management, Risk Management, Metabase, ERP Management, Testing",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Product Manager",
    company: "Fastor7 Technologies",
    period: "JAN 2024 – APR 2024",
    description: [
      "Led the development of Business Launchpad Application & Service front for Software development",
      "Managed dedicated team of 28 members across Engineering, Designing, Quality Assurance",
      "Led Product Road mapping with clients for Indipik platform, SmokeTrak, and Recycle Elaka",
      "Responsible for Staging to UAT (PreProd) DevOps",
    ],
    skills:
      "Google Suite, Cross functional collaboration, Technical Acumen, User Lifecycle, User Centric",
    icon: <Briefcase className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "Product Manager",
    company: "EducationLoanGuru - Infinite Group",
    period: "Sep 2022 – Jan 2024",
    description: [
      "Sole Product Manager in company of 125+ employees, built products from scratch",
      "Developed products in BFSI Segment – Loan Documentation, CRM, B2B & B2C application",
      "MAU 1376+, Loan disbursed <20Cr (163 Loans)",
      "Enhanced onboarding, GTM Strategy, Onboarded – 600+ Partners",
    ],
    skills:
      "Click Up, MS Office, Agile Development, UI/UX, Wireframing, Design Thinking",
    icon: <Briefcase className="w-6 h-6 text-purple-600" />,
  },
];

const education = [
  {
    degree: "Bachelor of Computer Application",
    school: "Indraprastha University (GGSIPU)",
    period: "2017 - 2020",
    highlights: [
      "Football Team Vice Captain for 3 years",
      "Interned as Web Developer & Freelance Digital Marketing Trainer",
    ],
  },
  {
    degree: "Intermediate: Science",
    school: "D.A.V Centenary Public School, Chander Nagar",
    period: "2016",
    highlights: [
      "Silver Medal in 800m race at Sports Meet",
      "Captain of Football Team at DAV Nationals",
    ],
  },
];

const AboutPage = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 p-8 bg-white overflow-hidden rounded-xl relative">
          {/* Background gradient */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/60 rounded-full blur-2xl"></div>
            <div className="absolute center-0 right-1/3 w-48 h-48 bg-orange-400/70 rounded-full blur-xl"></div>
          </div>
          

          <div className="relative">
            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <h3 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Location
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD2xvA5Tvf3WgijrgazyDI98X8e7_IjQ4Y&q=${quickInfo.location.coordinates.lat},${quickInfo.location.coordinates.lng}&zoom=12`}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-gray-600">{quickInfo.location.city}</p>
              </motion.div>

              {/* Currently Reading Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <h3 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                  <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                  Currently Reading
                </h3>
                <div className="space-y-4">
                  {quickInfo.currentlyReading.map((book, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-20 h-28 relative rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={book.imageUrl}
                          alt={book.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {book.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">
                          by {book.author}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-orange-600 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${book.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {book.progress}% complete
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fun Facts Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  {quickInfo.funFacts.map((fact, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg text-purple-600">
                        {fact.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{fact.label}</p>
                        <p className="font-medium text-gray-900">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillsets.map((category, index) => {
                  const colors = categoryColors[category.category];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-2xl border ${colors.border} shadow-sm hover:shadow-md transition-all duration-200 ${colors.bg}`}
                    >
                      <h3 className={`text-lg font-bold ${colors.text} mb-4`}>
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-sm bg-white/80 text-gray-700 rounded-lg border border-white/50 
                hover:shadow-sm transition-all duration-200 backdrop-blur-sm"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            {/* Experience Section */}
            <div className="mb-16 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-gray-900">
                              {exp.title} • {exp.company}
                            </h3>
                            <span className="text-sm text-gray-500">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="mt-4 space-y-2">
                            {exp.description.map((item, i) => (
                              <li
                                key={i}
                                className="text-gray-600 flex items-start"
                              >
                                <span className="mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.skills.split(", ").map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-gray-900">
                              {edu.degree}
                            </h3>
                            <span className="text-sm text-gray-500">
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-1">{edu.school}</p>
                          <ul className="mt-4 space-y-2">
                            {edu.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="text-gray-600 flex items-start"
                              >
                                <span className="mr-2">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
