'use client';

import { useState } from 'react';
import { Phone, Menu, X, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about', active: false },
    { name: 'Experience', href: '#experience', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'Certifications', href: '#certifications', active: false },
    { name: 'Achievements', href: '#achievements', active: false },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Abhinav
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 sm:space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                  item.active
                    ? 'bg-white-600/80 text-white border backdrop-blur-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2 text-gray-300">
             <Mail size={14} className="text-blue-400" />
            <span className="text-xs sm:text-sm">abhinavgambhir1@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-2 sm:py-4 bg-black/80 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 text-left ${
                    item.active
                      ? 'bg-blue-600/80 text-white border border-blue-500/50 backdrop-blur-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="flex items-center space-x-2 px-3 py-2 text-gray-300 border-t border-white/10 mt-2 pt-3">
                <Mail size={14} className="text-blue-400" />
                <span className="text-xs sm:text-sm font-medium">abhinavgambhir1@gmail.com</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;