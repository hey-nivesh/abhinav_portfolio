"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";

export function Hero() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I'm",
    },
    {
      text: "\n",
    },
    {
      text: "Abhinav",
    },
    {
      text: "Gambhir",
      className: "text-white",
    },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Abhinav Gambhir Resume.pdf';
    link.download = 'Abhinav_Gambhir_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewMyWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-10 mx-auto w-full max-w-7xl p-2 sm:p-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 min-h-[60vh] lg:min-h-screen">
            {/* Image first on mobile */}
            <div className="flex flex-col w-full lg:hidden">
              <motion.div 
                initial={{ opacity: 0, x: 0, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="flex justify-center mb-4"
              >
                <div className="relative w-44 h-44 xs:w-56 xs:h-56 sm:w-72 sm:h-72">
                  <div className="absolute rounded-full bg-white opacity-20 blur-xl"></div>
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-2xl">
                    <Image
                      src="/hero_img.png"
                      alt="Abhinav Gambhir"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="space-y-3 text-center"
              >
                <div className="flex flex-col items-center">
                  <TypewriterEffectSmooth words={words} className="text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-10 h-1 bg-white rounded-full"></div>
                  <h2 className="text-base xs:text-lg font-semibold text-white">
                    Solutions Specialist
                  </h2>
                </div>
                <h3 className="text-sm xs:text-base text-white font-medium">
                  Apps & Infra - Microsoft
                </h3>
                <p className="text-sm xs:text-base text-gray-300 leading-relaxed max-w-xs xs:max-w-sm mx-auto">
                  To groom myself into a seasoned professional utilizing my strengths like Analytical
                  Skills, Problem Solving Skills, and Interpersonal skills thereby contributing to the
                  organization and my personal success.
                </p>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <button 
                    onClick={handleViewMyWork}
                    className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm"
                  >
                    View My Work
                  </button>
                  <button 
                    onClick={handleDownloadCV}
                    className="px-5 py-2.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-sm"
                  >
                    Download CV
                  </button>
                </div>
              </motion.div>
            </div>
            {/* Desktop (lg+) layout: image right, content left */}
            <div className="hidden lg:flex flex-1 flex-row items-center justify-between w-full gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="flex-1 space-y-6 text-left"
              >
                <div className="space-y-4">
                  <div className="flex flex-col items-start">
                    <TypewriterEffectSmooth words={words} className="text-white text-2xl md:text-3xl" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                    <h2 className="text-xl md:text-2xl font-semibold text-white">
                      Solutions Specialist
                    </h2>
                  </div>
                  <h3 className="text-lg md:text-xl text-white font-medium">
                    Apps & Infra - Microsoft
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                  To groom myself into a seasoned professional utilizing my strengths like Analytical
                  Skills, Problem Solving Skills, and Interpersonal skills thereby contributing to the
                  organization and my personal success.
                </p>
                <div className="flex flex-row gap-4 justify-start">
                  <button 
                    onClick={handleViewMyWork}
                    className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    View My Work
                  </button>
                  <button 
                    onClick={handleDownloadCV}
                    className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    Download CV
                  </button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="flex-1 flex justify-end"
              >
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute rounded-full bg-white opacity-20 blur-xl"></div>
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="/hero_img.png"
                      alt="Abhinav Gambhir"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
