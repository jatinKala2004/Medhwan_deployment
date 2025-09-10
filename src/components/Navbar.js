'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState('home')
  const isClickScrolling = useRef(false)
  const scrollTimeout = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isClickScrolling.current) return;
    const sections = ['home', 'about-prajwal', 'get-elite', 'testimonials', 'faqs', 'about-us', 'contact-us'];
      let current = '';
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= window.scrollY + 100) {
          current = id;
        }
      }
      if (current) {
        setActiveMenu(current);
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveMenu(targetId);
    isClickScrolling.current = true;

    const element = document.getElementById(targetId);
    if(element) {
      let offset;
      if (targetId === 'get-elite') {
        // Adjusted offsets for more space above the section
        const getEliteScrolledOffset = 40;
        const getEliteInitialOffset = 70;
        offset = isScrolled ? getEliteScrolledOffset : getEliteInitialOffset;
      } else {
        // Standard offset for other links
        offset = isScrolled ? 70 : 100;
      }

      const top = element.offsetTop - offset;

    window.scrollTo({
        top: top,
        behavior: 'smooth',
    });
    }

    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about-prajwal', label: 'About Prajwal' },
    { id: 'get-elite', label: 'Get Elite', isButton: true },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact-us', label: 'Contact Us' }
  ];

  return (
    <nav className={`fixed z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'top-4 left-5 right-5 h-[60px] rounded-full bg-white shadow-md' : 'top-0 w-full h-[88px]'}`}>
      <div className="flex justify-between items-center h-full px-4 sm:px-6 gap-x-4 md:gap-x-8">
        <Link href="/" className="block">
            <Image
              src="/images/medhwan_logo.png"
              alt="Medhwan Logo"
            width={isScrolled ? 170 : 210}
            height={isScrolled ? 48 : 64}
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-18' : 'h-18'}`}
            />
          </Link>
          
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map(link => {
            if (link.isButton) {
              const isGoEliteActive = activeMenu === link.id;
              return (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => handleLinkClick(e, link.id)} 
                  className={`group relative text-[1.08rem] font-extrabold text-foreground transition-colors rounded-full py-2
                    ${isGoEliteActive ? 'bg-black' : 'bg-transparent hover:bg-black'}
                  `}
                  style={{ letterSpacing: '0.01em' }}
                >
                  <span className={
                    `${isGoEliteActive ? 'hidden' : 'shimmer-text-dark group-hover:hidden'} relative z-10 px-3`
                  }>
                    {link.label}
                  </span>
                  <span className={
                    `${isGoEliteActive ? 'inline text-white' : 'hidden text-white group-hover:inline'} relative z-10 px-3`
                  }>
                    {link.label}
                  </span>
                </a>
              )
            }
            return (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleLinkClick(e, link.id)} 
                className={`group relative text-[1.08rem] font-bold text-foreground hover:text-foreground transition-colors py-2 px-3 ${activeMenu === link.id ? 'text-foreground' : ''}`}
                style={{ letterSpacing: '0.01em' }}
                >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeMenu === link.id ? 'scale-x-100' : ''}`}></span>
              </a>
            )
          })}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
        >
          {/* Animated Hamburger/X Icon */}
          <span className="relative block w-6 h-6">
            <span
              className={`absolute left-0 top-1 w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : ''}`}
            ></span>
            <span
              className={`absolute left-0 top-3 w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`absolute left-0 top-5 w-6 h-0.5 bg-foreground rounded transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : ''}`}
            ></span>
          </span>
        </button>
      </div>
      {/* Mobile menu as roll-down drawer below navbar */}
      <div
        className={`lg:hidden absolute left-0 w-full bg-gray-700 shadow-lg z-50 border-b border-border px-6 flex flex-col items-start gap-2 transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{
          top: isScrolled ? '60px' : '88px',
          height: isOpen ? (isScrolled ? 'calc(100vh - 60px)' : 'calc(100vh - 88px)') : '0px',
          willChange: 'height, opacity',
        }}
        aria-hidden={!isOpen}
      >
        <div className={`w-full flex flex-col items-start ${isOpen ? 'pt-8' : 'pt-0'}`} style={{transition: 'padding 0.5s'}}>
          {navLinks.map(link => {
            const isActive = activeMenu === link.id;
            const isGetElite = link.id === 'get-elite';
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={e => handleLinkClick(e, link.id)}
                className={`block w-full text-left py-3 text-lg px-4 transition-colors rounded-lg
                  ${isActive ? 'bg-gray-600 border border-gray-500' : ''}
                  ${!isGetElite && isActive ? 'text-white font-bold' : ''}
                  ${!isGetElite && !isActive ? 'text-gray-100' : ''}
                  hover:bg-gray-600`}
              >
                {isGetElite ? (
                  <span className={isActive ? 'shimmer-text-mobile-active' : 'shimmer-text-mobile text-blue-400'}>
                    {link.label}
                  </span>
                ) : (
                  link.label
                )}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
} 