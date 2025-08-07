"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { motion } from "framer-motion";

export function Projects() {
    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" as const } },
    };
    return (
        <div id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-white text-6xl font-bold text-center mb-16">PROJECTS</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[400px] lg:min-h-[350px]"
                        className=""
                    >
                        <div className="max-w-xs z-10 relative">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                                Datacenter procurement automation system for HPE Bangalore R&D Labs
                            </h2>
                            <p className="mt-4 text-left text-base/6 text-neutral-200">
                                Smart Procurement Automation
                            </p>
                        </div>
                        <img
                            src="/project1.png"
                            width={600}
                            height={600}
                            alt="Datacenter procurement automation system"
                            className="absolute right-0 bottom-0 w-64 h-64 lg:w-80 lg:h-80 object-contain rounded opacity-90 hidden sm:block"
                        />
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 min-h-[350px] bg-gray-800">
                        <div className="z-10 relative">
                            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                                Infrastructure recommendation engine built using reverse engineering and CNCF open-source tools like FluentD.
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                Cloud-Native Infrastructure Intelligence
                            </p>
                        </div>
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[350px]">
                        <div className="max-w-sm z-10 relative">
                            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                                RedHat OpenStack implementation on distributed ledger technology with HPE R&D Labs.
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                Blockchain-Powered Cloud Infrastructure
                            </p>
                        </div>
                        <img
                            src="/project2.png"
                            width={500}
                            height={500}
                            alt="RedHat OpenStack implementation"
                            className="absolute right-4 bottom-0 w-64 h-64 lg:w-80 lg:h-80 object-contain  rounded opacity-90 hidden sm:block"
                        />
                    </WobbleCard>
                </div>
            </div>
        </div>
    );
}
