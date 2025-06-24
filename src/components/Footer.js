'use client'
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#3674B5] text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#A1E3F9]">Medhwan Edutech</h3>
            <p>
              Empowering students with quality education and innovative learning solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#A1E3F9]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#A1E3F9] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#A1E3F9] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[#A1E3F9] transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-[#A1E3F9] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#A1E3F9] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#A1E3F9]">Contact Info</h4>
            <ul className="space-y-2">
              <li>123 Education Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@medhwanedutech.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#A1E3F9]">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#A1E3F9] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-[#A1E3F9] transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-[#A1E3F9] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-[#A1E3F9] transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#A1E3F9] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Medhwan Edutech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 