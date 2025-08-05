"use client";

import { Trophy } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Acheivements() {
  return (
    <div className="py-20" style={{ backgroundColor: '#00013b' }}>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Trophy className="h-6 w-6 text-yellow-400" />}
          title="Winner - Partner Champion of the Quarter (Q1, 2022)"
          description="Recognized for outstanding performance in delivering Microsoft Azure OpenShift solutions"
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Trophy className="h-6 w-6 text-yellow-400" />}
          title="Distinguished Speaker at IEEE Global Conference (Sri Lanka, 2019)"
          description="Invited as a distinguished speaker and panelist at the IEEE Global Conference"
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Trophy className="h-6 w-6 text-yellow-400" />}
          title="Speaker at Salesforce Conference (San Francisco, 2016)"
          description="Delivered a session on &quot;Getting started with Service &amp; Sales cloud&quot; at the Salesforce user and developer conference in San Francisco, USA, educating participants on Salesforce solutions."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Trophy className="h-6 w-6 text-yellow-400" />}
          title="Global Program Lead - IEEE Blockchain Initiative"
          description="Selected to lead IEEE Blockchain Initiative launched in January 2018, driving standards development, learning courses, and industry collaborations worldwide."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Trophy className="h-6 w-6 text-yellow-400" />}
          title="IEEE Outstanding Volunteer Award"
          description="Awarded by IEEE Piscataway, New Jersey, USA, for exceptional contributions to IEEE programs and community initiatives."
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

      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3" style={{ backgroundColor: '#fcfbe3' }}>
        
        <GlowingEffect
          spread={80}
          glow={true}
          disabled={false}
          proximity={100}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]" style={{ backgroundColor: '#fcfbe3' }}>
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-yellow-300 bg-yellow-100 p-3 shadow-lg">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
