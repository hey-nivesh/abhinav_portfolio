"use client";

import { Trophy } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Certifications() {
    return (
        <div id="certifications" className="py-20 bg-black">
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<Trophy className="h-6 w-6 text-yellow-400" />}
                    title="Microsoft Certified: Azure Fundamentals"
                    description="Demonstrates foundational knowledge of cloud services and how those services are provided with Microsoft Azure"
                />
                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Trophy className="h-6 w-6 text-yellow-400" />}
                    title="Amazon Web Services Cloud Practitioner"
                    description="Validates foundational, high-level understanding of AWS Cloud, services, and terminology. Ideal for individuals in technical, managerial, sales, purchasing, or financial roles."
                />
                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<Trophy className="h-6 w-6 text-yellow-400" />}
                    title="HPE ATP - Hybrid IT Solutions V2"
                    description="Certifies expertise in HPE Hybrid IT solutions, including server, storage, and networking technologies, with focus on designing and implementing hybrid cloud architectures."
                />
                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Trophy className="h-6 w-6 text-yellow-400" />}
                    title="Introduction to Amazon Elastic Compute Cloud (EC2)"
                    description="Demonstrates understanding of AWS EC2 fundamentals, including instance types, pricing models, security groups, and best practices for scalable cloud computing."
                />
                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Trophy className="h-6 w-6 text-yellow-400" />}
                    title="Cisco Certified Network Associate"
                    description="Validates ability to install, configure, operate, and troubleshoot medium-size routed and switched networks, including implementation and verification of connections."
                />
            </ul>
        </div>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-black border-gray-700">
                <GlowingEffect
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-black">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-yellow-300 bg-yellow-900 p-3 shadow-lg">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};