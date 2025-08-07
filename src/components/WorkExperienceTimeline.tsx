'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experienceData = [
  {
    company: "Oracle",
    role: "Senior Manager - Oracle Cloud Infrastructure (OCI)",
    duration: "Present",
    description: "Leading Oracle cloud solutions and infrastructure modernization initiatives. Managing enterprise-scale OCI implementations and driving digital transformation strategies for global customers.",
    color: "bg-orange-500",
    dotColor: "border-orange-500"
  },
  {
    company: "IEEE",
    role: "Leadership Team",
    duration: "Present",
    description: "Global Program Lead for IEEE Blockchain Initiative and Webmaster for Asia Pacific region. Organizing international conferences and driving technology standardization across IEEE's worldwide network.",
    color: "bg-blue-600",
    dotColor: "border-blue-600"
  },
  {
    company: "Microsoft",
    role: "Azure Specialist - Full-time",
    duration: "Nov 2022 - Present",
    description: "Solutions Specialist for Apps & Infrastructure modernization on Azure. Designing cloud architectures, leading customer migrations, and delivering technical demos for enterprise clients across commercial sectors.",
    color: "bg-blue-500",
    dotColor: "border-blue-500"
  },
  {
    company: "Red Hat, Inc (An IBM company)",
    role: "Cloud Solution Architect - Full-time",
    duration: "Aug 2021 - Oct 2022",
    description: "Partner Solutions Architect specializing in hybrid cloud solutions with AWS and Azure. Expert in OpenShift, containerization, and Red Hat enterprise workloads. Winner of Partner Champion Award Q1 2022.",
    color: "bg-red-500",
    dotColor: "border-red-500"
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Senior Solutions Architect - Full-time",
    duration: "Oct 2015 - Jul 2021",
    description: "Presales Solutions Architect designing enterprise infrastructure and application modernization solutions. Specialized in datacenter migrations, hybrid cloud deployments, and CI/CD automation implementations.",
    color: "bg-yellow-500",
    dotColor: "border-yellow-500"
  },
  {
    company: "IEEE Computer Society",
    role: "Technology Lead",
    duration: "2014 - 2017",
    description: "Vice-Chairman for IEEE Asia Pacific and President of IEEE Delhi Section. Led student networks, organized technical conferences, and increased membership engagement across the region.",
    color: "bg-blue-400",
    dotColor: "border-blue-400"
  },
  {
    company: "Sopra Steria",
    role: "Software Engineer",
    duration: "2013 - 2014",
    description: "Full-stack software development and enterprise application implementation. Worked on large-scale software projects with focus on system integration and client-facing solutions.",
    color: "bg-purple-500",
    dotColor: "border-purple-500"
  },
  {
    company: "Endeavour Software Technologies (a Genpact Company)",
    role: "Software Engineer",
    duration: "2012 - 2013",
    description: "Entry-level software development role focusing on enterprise applications and system development. Gained foundational experience in software engineering and business process automation.",
    color: "bg-pink-500",
    dotColor: "border-pink-500"
  }
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" as const } },
};

const WorkExperienceTimeline = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const handlePrev = () => setCurrent((prev) => (prev === 0 ? experienceData.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === experienceData.length - 1 ? 0 : prev + 1));
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 bg-black">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">My Work Experience</h2>
      </div>

    
      {/* Desktop timeline */}
      <div className="relative hidden md:block">
       
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>

        
        <div className="space-y-16">
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="relative flex items-center justify-center"
                initial={isLeft ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                {isLeft ? (
                  <>
                    <div className="w-5/12 pr-12">
                      <div className="bg-black rounded-lg shadow-sm border border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.company}</h3>
                          <h4 className="text-sm font-medium text-gray-300 mb-2">{item.role}</h4>
                          <span className="inline-block text-sm text-black bg-white px-3 py-1 rounded-full mb-3">
                            {item.duration}
                          </span>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${item.dotColor} bg-black flex-shrink-0 z-10`}></div>
                    <div className="w-5/12 pl-12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12 pr-12"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${item.dotColor} bg-black flex-shrink-0 z-10`}></div>
                    <div className="w-5/12 pl-12">
                      <div className="bg-black rounded-lg shadow-sm border border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
                        <h3 className="text-lg font-semibold text-white mb-1">{item.company}</h3>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">{item.role}</h4>
                        <span className="inline-block text-sm text-black bg-white px-3 py-1 rounded-full mb-3">
                          {item.duration}
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

     
      {/* Mobile carousel timeline */}
      <div className="md:hidden">
        <div className="relative flex flex-col items-center">
          <div className="flex items-center w-full justify-center">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-black border border-white text-white mr-2 disabled:opacity-50"
              aria-label="Previous"
              disabled={experienceData.length <= 1}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="relative w-full max-w-xs flex flex-col items-center">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black -z-10"></div>
              <div className="flex flex-col items-center w-full">
                <div className={`relative z-10 w-4 h-4 rounded-full border-4 ${experienceData[current].dotColor} bg-black flex-shrink-0 mb-2`}></div>
                <div className="bg-black rounded-lg shadow-sm border border-gray-700 p-6 w-full">
                  <h3 className="text-base font-semibold text-white mb-1 text-center">{experienceData[current].company}</h3>
                  <h4 className="text-xs font-medium text-gray-300 mb-2 text-center">{experienceData[current].role}</h4>
                  <span className="inline-block text-xs text-gray-400 bg-black px-2 py-0.5 rounded-full mb-2 text-center">
                    {experienceData[current].duration}
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed text-center">
                    {experienceData[current].description}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-black border border-white text-white ml-2 disabled:opacity-50"
              aria-label="Next"
              disabled={experienceData.length <= 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;