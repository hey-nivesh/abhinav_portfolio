"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Certifications() {
  return (
    
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-white dark:bg-grid-blue-400 items-center justify-center relative overflow-hidden">
      <h1 className="text-blue-800 text-6xl font-bold text-center mb-40">CERTIFICATIONS</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow" className="mb-30"
      />
    </div>
  );
}

const testimonials = [
    {
      "quote": "Fundamental understanding of cloud services and Azure platform capabilities",
      "name": "AZ-900",
      "title": "Microsoft Certified: Azure Fundamentals"
    },
    {
      "quote": "Foundational knowledge of AWS cloud platform and services",
      "name": "CLF-C01",
      "title": "Amazon Web Services Cloud Practitioner"
    },
    {
      "quote": "Advanced technical proficiency in HPE hybrid IT infrastructure solutions",
      "name": "HPE ATP",
      "title": "HPE ATP - Hybrid IT Solutions V2"
    },
    {
      "quote": "Hands-on experience with AWS EC2 compute services and instances",
      "name": "EC2 Intro",
      "title": "Introduction to Amazon Elastic Compute Cloud (EC2)"
    },
    {
      "quote": "Strategic consulting methodologies and business transformation frameworks",
      "name": "BCG Program",
      "title": "BCG Strategy Consulting Program"
    },
    {
      "quote": "Comprehensive understanding of cloud computing fundamentals and concepts",
      "name": "Cloud 101",
      "title": "Cloud Computing Basics (Cloud 101)"
    },
    {
      "quote": "Identity and access management principles in cloud environments",
      "name": "Cloud Identity",
      "title": "Introduction to Cloud Identity"
    },
    {
      "quote": "Agile project management and Scrum framework implementation expertise",
      "name": "LSTM",
      "title": "Licensed Scrum Team Member"
    },
    {
      "quote": "Network infrastructure design, implementation, and troubleshooting skills",
      "name": "CCNA",
      "title": "Cisco Certified Network Associate"
    },
    {
      "quote": "Server hardware and software installation, configuration, and maintenance",
      "name": "Server+",
      "title": "CompTIA Server+"
    },
    {
      "quote": "Practical software development experience and industry exposure",
      "name": "Training Cert",
      "title": "Certificate of Summer Training"
    },
    {
      "quote": "Outstanding contribution to IEEE initiatives and technical community leadership",
      "name": "IEEE Award",
      "title": "IEEE Award"
    }
  ]