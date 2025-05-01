import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(1); // Default to Home

  // Use useMemo to memoize the navItems array
  const navItems = useMemo(() => [
    { id: 1, name: 'Home', sectionId: 'home' },
    { id: 2, name: 'Category', sectionId: 'category' },
    { id: 3, name: 'Trending News', sectionId: 'trending' },
    { id: 4, name: 'Recent News', sectionId: 'recent' },
    { id: 5, name: 'Clubs Ranking', sectionId: 'recent' }, // Using the same News section
    { id: 6, name: 'Sports Article', sectionId: 'sports' },
  ], []); // Empty dependency array means this only runs once

  // Update active menu item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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
  };

  return (
    <nav className="fixed w-full h-[92px] top-0 bg-white z-50 shadow-sm">
      <div className="h-full flex items-center justify-between max-w-[1440px] mx-auto px-4">
        {/* Left side - Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
            setSelectedItem(1);
          }}>
            <img src="/src/assets/images/navbar/SportNews.svg" alt="SPORTS NEWS" className="h-12" />
          </a>
        </div>

        {/* Center - Navigation Items */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 font-dm-sans">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.sectionId}`}
                  className={`font-dm-sans text-sm leading-[42px] flex items-end tracking-wider transition duration-300 ${
                    selectedItem === item.id
                      ? 'font-bold text-gray-900' // Selected item style
                      : 'font-normal text-gray-600/60' // Non-selected item style
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
        </div>

        {/* Right side - Search Box */}
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
    </nav>
  );
};

export default Navbar;