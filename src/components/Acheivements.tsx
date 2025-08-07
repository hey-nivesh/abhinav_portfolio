"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Achievements() {
    return (
        <div id="achievements" className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-blue-400 items-center justify-center relative overflow-hidden">
            <h1 className="text-white text-3xl xs:text-4xl sm:text-6xl font-bold text-center mb-10 sm:mb-40">ACHIEVEMENTS</h1>
            <div className="w-full px-2 sm:px-0 flex justify-center">
                <div className="rounded-md sm:rounded-md flex flex-col items-center justify-center relative overflow-hidden w-full">
                    <div className="w-full flex justify-center">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="extra-slow"
                            className="mb-10 sm:mb-30 text-xs xs:text-sm sm:text-base px-2 py-3 sm:px-6 sm:py-6 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const testimonials = [
    {
        quote: "Recognized for outstanding performance in delivering Microsoft Azure OpenShift solutions",
        name: "Partner Award",
        title: "Winner - Partner Champion of the Quarter (Q1, 2022)"
    },
    {
        quote: "Invited as a distinguished speaker and panelist at the IEEE Global Conference",
        name: "IEEE Speaker",
        title: "Distinguished Speaker & Panelist - IEEE Global Conference Sri Lanka"
    },
    {
        quote: "Delivered a session on 'Getting started with Service & Sales cloud' at the Salesforce user and developer conference in San Francisco, USA",
        name: "Salesforce Speaker",
        title: "Speaker at Salesforce User and Developer Conference"
    },
    {
        quote: "Selected to lead IEEE Blockchain Initiative launched in January 2018, driving standards development, learning courses, and industry collaborations worldwide",
        name: "IEEE Blockchain",
        title: "Global Program Lead - IEEE Blockchain Initiative"
    },
    {
        quote: "Awarded by IEEE Piscataway, New Jersey, USA, for exceptional contributions to IEEE programs and community initiatives",
        name: "IEEE Award",
        title: "IEEE Outstanding Volunteer Award"
    },
    {
        quote: "Selected as one of only 3 webmasters across Asia Pacific region to manage IEEE India Council digital presence and initiatives",
        name: "IEEE Webmaster",
        title: "Webmaster - IEEE India Council Region 10"
    },
    {
        quote: "Elected to lead IEEE Delhi Section's digital initiatives and organized numerous events and industry visits for junior members",
        name: "IEEE Delhi",
        title: "Webmaster - IEEE Delhi Section"
    },
    {
        quote: "Founded and served as President of IEEE Section Student Network, significantly increasing membership strength and community engagement",
        name: "IEEE President",
        title: "President - IEEE Student Branch"
    },
    {
        quote: "Successfully organized ICROIT paper presentation conference at Manav Rachna campus, facilitating academic research collaboration",
        name: "Conference Organizer",
        title: "Conference Organizer - ICROIT Paper Presentation"
    },
    {
        quote: "Represented IEEE at Region 10 SGW 2013 in Hyderabad alongside global delegates including IEEE President and international candidates",
        name: "IEEE Delegate",
        title: "IEEE Region 10 Student Gateway Delegate"
    },
    {
        quote: "Appointed as Vice-Chairman for IEEE Asia Pacific initiatives, contributing to regional technology advancement programs",
        name: "IEEE Vice-Chairman",
        title: "Vice-Chairman - IEEE Asia Pacific"
    },
    {
        quote: "Recognized by IEEE Computer Society for outstanding contributions to technical community and professional development initiatives",
        name: "IEEE CS",
        title: "IEEE Computer Society Recognition"
    }
];