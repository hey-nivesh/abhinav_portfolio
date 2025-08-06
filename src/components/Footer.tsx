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
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+91 9606216439</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">abhinav.gambhir@microsoft.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Bangalore, India</span>
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

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <span className="block text-gray-300 text-sm">Cloud Architecture</span>
              <span className="block text-gray-300 text-sm">DevOps Solutions</span>
              <span className="block text-gray-300 text-sm">Infrastructure Design</span>
              <span className="block text-gray-300 text-sm">Azure Migration</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/abhinav-gambhir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/abhinavgambhir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com/abhinavgambhir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
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