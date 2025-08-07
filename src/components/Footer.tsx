'use client';

import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">abhinavgambhir1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#experience" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Experience
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Projects
              </a>
            </div>
          </div>

          

          <div className="space-y-5">
            <h3 className="text-white text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/abhinavgambhir/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Abhinav Gambhir. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 