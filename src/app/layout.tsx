import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/Certifications";
import { Acheivements } from "@/components/Acheivements";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhinav Gambhir - Portfolio",
  description: "Solutions Specialist - Apps & Infra - Microsoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-schibsted">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Acheivements />
        {children}
      </body>
    </html>
  );
}


