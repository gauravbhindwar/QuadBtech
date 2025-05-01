import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="mx-auto w-[1168px] py-6 bg-white">
      <div className="container flex justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex gap-3">
          {/* Facebook Icon */}
          <div className="bg-[#262626] w-10 h-10 flex items-center justify-center rounded">
            <FaFacebookF className="text-white text-lg" />
          </div>
          
          {/* Instagram Icon */}
          <div className="bg-[#262626] w-10 h-10 flex items-center justify-center rounded">
            <FaInstagram className="text-white text-lg" />
          </div>
          
          {/* Twitter Icon */}
          <div className="bg-[#262626] w-10 h-10 flex items-center justify-center rounded">
            <FaTwitter className="text-white text-lg" />
          </div>
        </div>
        
        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          {/* Left Button */}
          <button className="w-[60px] h-[40px] bg-[#BAB8B8] rounded flex items-center justify-center">
            <BsArrowLeft className="text-[#EBEEF3] text-lg" />
          </button>
          
          {/* Page Numbers */}
          <div className="flex items-center gap-8 mx-6">
            {/* Page 1 - Active */}
            <div className="relative">
              <div className="absolute w-[30px] h-[30px] -left-[8px] top-[0px]  bg-[#262626] rounded-full"></div>
              <span className="font-sequel-sans font-normal text-xl text-[#EBEEF3] tracking-wider uppercase relative z-10 ml-0.5">1</span>
            </div>
            
            {/* Page 2-4 - Inactive */}
            <span className="font-sequel-sans font-normal text-xl text-[rgba(38,38,38,0.61)] tracking-wider uppercase">2</span>
            <span className="font-sequel-sans font-normal text-xl text-[rgba(38,38,38,0.61)] tracking-wider uppercase">3</span>
            <span className="font-sequel-sans font-normal text-xl text-[rgba(38,38,38,0.61)] tracking-wider uppercase">4</span>
          </div>
          
          {/* Right Button */}
          <button className="w-[60px] h-[40px] bg-[#262626] rounded flex items-center justify-center">
            <BsArrowRight className="text-[#EBEEF3] text-lg" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer