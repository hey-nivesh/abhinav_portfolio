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
      className: "text-blue-400",
    },
  ];

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
          className="relative z-10 mx-auto w-full max-w-7xl p-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 min-h-screen">
            {/* Left Section - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex-1 space-y-6 text-center lg:text-left"
            >
              <div className="space-y-4">
                <div className="flex flex-col items-center lg:items-start">
                  <TypewriterEffectSmooth words={words} className="text-white" />
                </div>
                
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-16 h-1 bg-white rounded-full"></div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Solutions Specialist
                  </h2>
                </div>
                
                <h3 className="text-lg md:text-xl text-white font-medium">
                  Apps & Infra - Microsoft
                </h3>
              </div>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                To groom myself into a seasoned professional utilizing my strengths like Analytical
                Skills, Problem Solving Skills, and Interpersonal skills thereby contributing to the
                organization and my personal success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white transition-colors duration-200 shadow-lg hover:shadow-xl">
                  View My Work
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white-200 transition-colors duration-200">
                  Download CV
                </button>
              </div>
            </motion.div>
            
            {/* Right Section - Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex-1 flex justify-center lg:justify-end"
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
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
