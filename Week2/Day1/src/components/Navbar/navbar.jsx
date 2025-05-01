import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  // Add state to track selected nav item
  const [selectedItem, setSelectedItem] = useState(1); // Default to Home

  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Category', path: '/category' },
    { id: 3, name: 'Trending News', path: '/trending' },
    { id: 4, name: 'Recent News', path: '/recent' },
    { id: 5, name: 'Clubs Ranking', path: '/clubs' },
    { id: 6, name: 'Sports Article', path: '/sports' },
  ];

  return (
    <nav className="absolute w-[1440px] h-[92px] left-0 top-0 bg-white z-50">
      <div className="h-full flex items-center justify-between ">
        {/* Left side - Logo */}
        <div className="flex-shrink-0 px-30">
          <img src="/src/assets/images/navbar/SportNews.svg" alt="SPORTS NEWS" className="h-12" />
        </div>

        {/* Center - Navigation Items */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 font-dm-sans">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className={`font-dm-sans text-sm leading-[42px] flex items-end tracking-wider transition duration-300 ${
                    selectedItem === item.id
                      ? 'font-bold text-gray-900' // Selected item style
                      : 'font-normal text-gray-600/60' // Non-selected item style
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedItem(item.id);
                    // Navigation would go here in a real app
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Search Box */}
        <div className="relative bg-gray-400 rounded-md font-dm-sans w-[100px] h-[35px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-white" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="block w-full pl-10 pr-3 py-2 border-transparent rounded-md leading-5 bg-transparent text-white placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;