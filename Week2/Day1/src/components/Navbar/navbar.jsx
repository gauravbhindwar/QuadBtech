import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for menu toggle
import logo from "../../assets/images/navbar/SportNews.svg"

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(1); // Default to Home
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll for sticky behavior

  // Use useMemo to memoize the navItems array
  const navItems = useMemo(() => [
    { id: 1, name: 'Home', sectionId: 'home' },
    { id: 2, name: 'Category', sectionId: 'category' },
    { id: 3, name: 'Trending News', sectionId: 'trending' },
    { id: 4, name: 'Recent News', sectionId: 'recent' },
    { id: 5, name: 'Clubs Ranking', sectionId: 'recent' }, // Using the same News section
    { id: 6, name: 'Sports Article', sectionId: 'sports' },
  ], []); // Empty dependency array means this only runs once

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // Changed from 768 to 1024
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update isScrolled state based on scroll position
      setIsScrolled(scrollPosition > 20);
      
      const sections = document.querySelectorAll('section[id]');
      
      // Find the current section in view
      let currentSection = null;
      let closestDistance = Infinity;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const distance = Math.abs(scrollPosition - sectionTop);

        // If this section is closer to the current scroll position than the previously found one
        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = section.id;
        }
      });

      // Set the selected item based on the current section
      if (currentSection) {
        const activeItem = navItems.find(item => item.sectionId === currentSection);
        if (activeItem) {
          setSelectedItem(activeItem.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check when page loads
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  // Smooth scroll to section when nav item is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Toggle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = ''; // Reset
    }
    
    return () => {
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full h-auto lg:h-[92px] top-0 bg-white z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="h-full flex items-center justify-between max-w-[1440px] mx-auto px-4 sm:px-6 py-3 lg:py-0">
        {/* Left side - Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
            setSelectedItem(1);
          }}>
            <img src={logo} alt="SPORTS NEWS" className="h-8 sm:h-10 lg:h-12" />
          </a>
        </div>

        {/* Mobile Menu Button - Show on all screens except large desktop (lg) */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HiX className="h-7 w-7" />
            ) : (
              <HiMenu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Navbar content - Only show on large desktop (lg) */}
        <div className="hidden lg:flex items-center justify-between flex-grow ml-10">
          {/* Desktop Navigation */}
          <ul className="flex space-x-6 font-dm-sans">
            {navItems.map((item) => (
              <li key={item.id} className="whitespace-nowrap">
                <a
                  href={`#${item.sectionId}`}
                  className={`font-dm-sans text-sm leading-[42px] flex items-end tracking-wider transition duration-300 ${
                    selectedItem === item.id
                      ? 'font-bold text-gray-900 border-b-2 border-gray-900' 
                      : 'font-normal text-gray-600/60 hover:text-gray-800'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.sectionId);
                    setSelectedItem(item.id);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Search Box - Desktop */}
          <div className="relative bg-gray-400 rounded-md font-dm-sans w-[250px] h-[42px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-white" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-transparent text-white placeholder-white focus:outline-none sm:text-sm"
            />
          </div>
        </div>

        {/* Mobile Menu (Fullscreen) */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-[-100%] pointer-events-none'
          }`}
        >
          {/* Mobile menu header */}
          <div className="flex justify-between items-center p-4 border-b">
            <img src={logo} alt="SPORTS NEWS" className="h-8 sm:h-10" />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <HiX className="h-7 w-7" />
            </button>
          </div>
          
          {/* Mobile menu content */}
          <div className="mt-6 px-4 h-[calc(100vh-80px)] overflow-y-auto">
            <ul className="space-y-4 sm:space-y-6 font-dm-sans">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.sectionId}`}
                    className={`font-dm-sans text-lg block py-3 tracking-wider transition duration-300 ${
                      selectedItem === item.id
                        ? 'font-bold text-gray-900 border-l-4 border-gray-900 pl-4'
                        : 'font-normal text-gray-600/60 hover:text-gray-800 pl-4'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                      setSelectedItem(item.id);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Search Box */}
            <div className="relative bg-gray-400 rounded-md font-dm-sans w-full h-[42px] mt-8 sm:mt-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-transparent text-white placeholder-white focus:outline-none sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;