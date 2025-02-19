"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "user experiences",
    "growth strategies",
    "product roadmaps",
    "business solutions",
    "market solutions",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const handleMouseMove = (event) => {
    if (!isHovering) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className=" mt-16 p-8 bg-white overflow-hidden rounded-xl"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/50 rounded-full blur-3xl"></div>
            <div className="absolute top-4 w-72 h-72 bg-indigo-500/60 rounded-full blur-2xl"></div>
            <div className="absolute top-8 right-8 w-48 h-48 bg-purple-400/70 rounded-full blur-xl"></div>
            <div className="absolute top-14 w-48 h-48 bg-purple-400/70 rounded-full blur-xl"></div>
          </div>

          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-30"
            style={{
              WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 35%)`,
              mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 35%)`,
              opacity: isHovering ? 0.5 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></div>

          <div className="relative max-w-3xl">
            <div className="flex flex-col items-start">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 mb-8">
                <Image
                  src="/rprofile.png"
                  alt="Profile Picture"
                  width={160}
                  height={160}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold text-gray-900">
                  Hi, I&apos;m Rishabh — Product Manager
                </h1>
                <p className="text-3xl text-gray-600 font-light">
                  I enjoy crafting product strategies and driving business
                  growth. In simple terms, I develop{" "}
                  <span
                    className="relative inline-flex"
                    style={{ minWidth: "260px", height: "1.0em" }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={words[currentWordIndex]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-blue-600 font-bold absolute whitespace-nowrap"
                      >
                        {words[currentWordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>{" "}
                  that drive revenue and enhance user satisfaction.
                </p>

                <div className="flex gap-3">
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Strategy & Vision
                  </span>
                  <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                    Data Analytics
                  </span>
                  <span className="px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    User Research
                  </span>
                </div>

                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  Let&apos;s talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
