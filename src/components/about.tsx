"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function About() {
  return (
    <div id="about">
      <WavyBackground 
        className="max-w-4xl mx-auto px-4" 
        height="700px"
        waveOpacity={0.3}
      >
        <div className="text-center space-y-8 ">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
              I&apos;m Abhinav Gambhir, a Cloud Solutions Architect with 9+ years of experience helping enterprises modernize their infrastructure and applications. Currently serving as a Solutions Specialist at Microsoft, I&apos;ve guided organizations through complex Azure migrations and hybrid cloud transformations across my tenure at HPE, Red Hat, and Microsoft.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed mt-6">
              My expertise spans containerization, Kubernetes, and enterprise-scale solutions, with a passion for translating business challenges into scalable technical architectures. Beyond my professional work, I actively contribute to IEEE&apos;s global technology initiatives and speak at international conferences. I believe in creating solutions that not only solve today&apos;s problems but scale for tomorrow&apos;s opportunities.
            </p>
          </div>
          
        </div>
      </WavyBackground>
    </div>
  );
}

