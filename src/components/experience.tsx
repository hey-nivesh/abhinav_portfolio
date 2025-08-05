"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
    {
      title: "Senior Manager - Oracle Cloud Infrastructure (OCI)",
      description:
        "Leading Oracle cloud solutions and infrastructure modernization initiatives. Managing enterprise-scale OCI implementations and driving digital transformation strategies for global customers.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="https://i0.wp.com/www.cloverinfotech.com/wp-content/uploads/2023/01/Oracle_1280x720.jpg?fit=640%2C360&ssl=1"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Leadership Team - IEEE",
      description:
        "Global Program Lead for IEEE Blockchain Initiative and Webmaster for Asia Pacific region. Organizing international conferences and driving technology standardization across IEEE's worldwide network.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxT9G3gSxNZESl4NJH1NzcPq0kBF1XNyHcA&s"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Azure Specialist Microsoft - Full-time",
      description:
        "Solutions Specialist for Apps & Infrastructure modernization on Azure. Designing cloud architectures, leading customer migrations, and delivering technical demos for enterprise clients across commercial sectors.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY4Sg1LI6hHh4S0crKjTRRBJt3elPQ591qQ&s"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Cloud Solution Architect Red Hat - Full-time",
      description:
        "Partner Solutions Architect specializing in hybrid cloud solutions with AWS and Azure. Expert in OpenShift, containerization, and Red Hat enterprise workloads. Winner of Partner Champion Award Q1 2022.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://dxc.scene7.com/is/image/dxc/logo-redhat-1050x1050?qlt=90&wid=1200&ts=1657782475575&$square_desktop$&dpr=off"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Senior Solutions Architect Hewlett Packard Enterprise - Full-time",
      description:
        "Presales Solutions Architect designing enterprise infrastructure and application modernization solutions. Specialized in datacenter migrations, hybrid cloud deployments, and CI/CD automation implementations.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NEARHxGAo0CVWtEaUdzhW0eNXL7jfC8cJQ&s"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Technology Lead IEEE Computer Society",
      description:
        "Vice-Chairman for IEEE Asia Pacific and President of IEEE Delhi Section. Led student networks, organized technical conferences, and increased membership engagement across the region.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCd50KpxRd5fgWuO5b8fQDSePKb9TvVps64w&s"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Software Engineer - Sopra Steria",
      description:
        "Full-stack software development and enterprise application implementation. Worked on large-scale software projects with focus on system integration and client-facing solutions.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://pbs.twimg.com/profile_images/1410588343562293250/_z9gX43o_400x400.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Software Engineer - Endeavour Software Technologies (a Genpact Company)",
      description:
        "Entry-level software development role focusing on enterprise applications and system development. Gained foundational experience in software engineering and business process automation.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://content3.jdmagicbox.com/v2/comp/bangalore/99/080p6000899/catalogue/endeavour-software-technologies-pvt-ltd-jp-nagar-3rd-phase-bangalore-computer-software-developers-48351ts.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    }
  ];
export function Experience() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
