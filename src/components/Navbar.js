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
    const sections = ['home', 'why-prajwal', 'go-elite', 'about-prajwal', 'about-us', 'testimonials', 'contact-us'];
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
      if (targetId === 'go-elite') {
        // When scrolled, nav height is 60px. We want 50px margin.
        // Card top should be at 60 + 50 = 110px.
        // Card's actual position is section.offsetTop + 100px (from section padding).
        // So, scroll to (section.offsetTop + 100) - 110 = section.offsetTop - 10.
        // The offset to subtract is 10.
        const goEliteScrolledOffset = 10;
        
        // When not scrolled, nav height is 88px. We want 50px margin.
        // Card top should be at 88 + 50 = 138px.
        // Card's actual position is section.offsetTop + 100px.
        // So, scroll to (section.offsetTop + 100) - 138 = section.offsetTop - 38.
        // The offset to subtract is 38.
        const goEliteInitialOffset = 38;

        offset = isScrolled ? goEliteScrolledOffset : goEliteInitialOffset;
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
    { id: 'why-prajwal', label: 'Why Prajwal?' },
    { id: 'go-elite', label: 'Go Elite', isButton: true },
    { id: 'about-prajwal', label: 'About Prajwal' },
    { id: 'about-us', label: 'About Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact-us', label: 'Contact Us' }
  ];

  return (
    <nav className={`fixed z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'top-4 left-5 right-5 h-[60px] rounded-full bg-background/80 backdrop-blur-xl shadow-2xl' : 'top-0 w-full h-[88px]'}`}>
      <div className="flex justify-center items-center gap-x-8 h-full px-6">
        <Link href="/" className="block">
            <Image
              src="/images/medhwan_logo.svg"
              alt="Medhwan Logo"
            width={isScrolled ? 170 : 210}
            height={isScrolled ? 48 : 64}
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-16'}`}
            />
          </Link>
          
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map(link => {
            if (link.isButton) {
              const isGoEliteActive = activeMenu === link.id;
              return (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => handleLinkClick(e, link.id)} 
                  className={`group px-6 py-2 text-lg font-extrabold rounded-full transition-all duration-300
                    ${isGoEliteActive ? 'bg-black' : 'bg-transparent'}
                    hover:bg-black
                  `}
                  style={{ fontSize: isScrolled ? '1.1rem' : '1.35rem', letterSpacing: '0.01em' }}
                >
                  <span className={isGoEliteActive ? 'hidden' : 'shimmer-text-dark group-hover:hidden'}>
                    {link.label}
                  </span>
                  <span className={isGoEliteActive ? 'inline text-white' : 'hidden text-white group-hover:inline'}>
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
                className={`group relative text-[1.08rem] font-bold text-foreground hover:text-foreground transition-colors ${activeMenu === link.id ? 'text-foreground' : ''}`}
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
          className="md:hidden p-2"
          type="button"
          aria-label="Toggle navigation"
        >
          {/* Hamburger Icon */}
        </button>
      </div>
      {/* Mobile menu would go here, preserving structure */}
    </nav>
  )
} 