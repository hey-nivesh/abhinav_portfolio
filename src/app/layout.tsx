import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Acheivements";
import { Projects } from "@/components/projects";
import WorkExperienceTimeline from "@/components/WorkExperienceTimeline";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abhinav Gambhir - Portfolio",
  description: "Solutions Specialist - Apps & Infra - Microsoft",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-schibsted bg-black text-white">
        <Header />
        <Hero />
        <About />
        <WorkExperienceTimeline />
        <Projects />
        <Certifications />
        <Achievements />
        <Footer />
      </body>
    </html>
  );
}


