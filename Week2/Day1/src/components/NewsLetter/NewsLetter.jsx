import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import spiralImg from '../../assets/images/newsletter/spiral.svg'
import playerImg from '../../assets/images/newsletter/image.png'

const NewsLetter = () => {
  return (
    <div className="relative w-full max-w-[1168px] h-auto mx-auto my-8 sm:my-16 px-4 sm:px-0">
      {/* Main container with background */}
      <div className="relative w-full bg-[#EBEEF3] rounded-md flex flex-col sm:flex-row overflow-hidden">
        
        {/* Content container - left side */}
        <div className="flex flex-col p-6 sm:p-8 md:p-12 sm:w-3/5 md:w-2/3">
          {/* Newsletter Title */}
          <div className="mb-6 sm:mb-12">
            <h2 className="font-sequel-sans font-extrabold text-2xl xs:text-3xl sm:text-[45px] md:text-[65px] leading-tight sm:leading-[60px] tracking-[0.01em] uppercase"
                style={{
                  background: 'linear-gradient(180deg, #262626 0%, #B8C2CE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
              NEWSLETTER SUBSCRIPTION
            </h2>
          </div>
          
          {/* Input form */}
          <div className="w-full">
            <div className="relative w-full sm:max-w-[514px] h-[58px]">
              <input 
                type="email" 
                placeholder="gaurav.12bhindwar@gmail.com"
                className="w-full h-full border border-[#262626] rounded-md pl-4 pr-16 text-base sm:text-[21px] font-dm-sans font-normal text-[rgba(38,38,38,0.37)]"
              />
              <button className="absolute right-0 top-0 w-[60px] sm:w-[74px] h-[58px] bg-[#262626] rounded-r-md flex items-center justify-center">
                <BsArrowRight className="text-[#EBEEF3] text-2xl sm:text-4xl transform rotate-[-45deg] translate-x-[-4px]" /> 
              </button>
            </div>
          </div>
          
          {/* Spiral SVG background */}
          <div className="hidden md:block absolute right-1/3 top-0 w-[312px] h-[248px] pointer-events-none">
            <img 
              src={spiralImg} 
              alt="Decorative spiral" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Player image container - right side for tablets and desktop */}
        <div className="hidden sm:block sm:w-2/5 md:w-1/3 relative">
          <img 
            src={playerImg} 
            alt="American football player" 
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ objectPosition: "50% 20%" }}
          />
        </div>
        
        {/* Mobile player image - bottom for phones */}
        <div className="sm:hidden w-full h-[250px] relative overflow-hidden">
          <img 
            src={playerImg} 
            alt="American football player" 
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 20%" }}
          />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter