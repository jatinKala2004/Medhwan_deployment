'use client'
import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#181A1B] text-white relative overflow-hidden">
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#181A1B] via-[#1a1d1e] to-[#181A1B] opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          
          {/* Company Branding */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Medhwan Edutech
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Empowering the next generation with cutting-edge educational technology and innovative learning solutions.
              </p>
            </div>
            
            {/* Social Media Section */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://www.linkedin.com/company/medhwan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  <FaLinkedin size={20} className="text-white" />
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/medhwan_edutech?igsh=MTFnYzBrcXh1aDFqeA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/25">
                  <FaInstagram size={20} className="text-white" />
                </div>
              </a>
              
              <a 
                href="https://www.youtube.com/@MedhwanEdutech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/25">
                  <FaYoutube size={20} className="text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <div className="space-y-4">
              <a 
                href="https://medhwan-edutech.github.io/prajwal_public/#privacy_policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2"
              >
                Privacy Policy
              </a>
              <a 
                href="https://medhwan-edutech.github.io/prajwal_public/#t&c" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center justify-center lg:justify-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Ready to transform education?
              </p>
              <p className="text-sm text-gray-400">
                Join thousands of students already learning with Medhwan
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Medhwan Edutech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-500">Made with ❤️ for education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 