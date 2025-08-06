'use client';

import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('#home')}
              className="text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Abhinav
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  item.active
                    ? 'bg-blue-600/80 text-white border border-blue-500/50 backdrop-blur-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone size={16} className="text-blue-400" />
              <span className="text-sm font-medium">+91 9606216439</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 bg-black/20 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-left ${
                    item.active
                      ? 'bg-blue-600/80 text-white border border-blue-500/50 backdrop-blur-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="flex items-center space-x-2 px-4 py-3 text-gray-300 border-t border-white/10 mt-2 pt-4">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm font-medium">+91 9606216439</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;