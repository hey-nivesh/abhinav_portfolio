import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden rounded-md bg-gradient-to-br from-blue-50 to-white antialiased">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#3b82f6"
      />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 min-h-screen">
          {/* Left Section - Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight">
                <span className="block">Hi I&apos;m</span>
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Abhinav Gambhir
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
                  Solutions Specialist
                </h2>
              </div>
              
              <h3 className="text-lg md:text-xl text-blue-600 font-medium">
                Apps & Infra - Microsoft
              </h3>
            </div>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              To groom myself into a seasoned professional utilizing my strengths like Analytical
              Skills, Problem Solving Skills, and Interpersonal skills thereby contributing to the
              organization and my personal success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Download CV
              </button>
            </div>
          </div>
          
          {/* Right Section - Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute rounded-full bg-blue-400 opacity-20 blur-xl"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-blue-400  shadow-2xl">
                <Image
                  src="/hero_img.png"
                  alt="Abhinav Gambhir"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
