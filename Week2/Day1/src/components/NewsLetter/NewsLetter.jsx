import React from 'react'

const NewsLetter = () => {
  return (
    <div className="relative w-full max-w-[1168px] h-[427px] mx-auto my-16">
      {/* Main container with background */}
      <div className="absolute w-full h-[385px] bg-[#EBEEF3] rounded-md mt-[42px]">
        
        {/* Newsletter Title */}
        <div className="absolute left-[68px] top-[84px]">
          <h2 className="font-['Sequel_Sans'] font-normal text-[60px] leading-[60px] tracking-[0.01em] uppercase w-[614px]"
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
        <div className="absolute left-[68px] top-[247px] flex">
          <div className="relative w-[514px] h-[58px]">
            <input 
              type="email" 
              placeholder="shovon.khan0099@gmail.com"
              className="w-full h-full border border-[#262626] rounded-md pl-4 text-[21px] font-['DM_Sans'] font-normal text-[rgba(38,38,38,0.37)]"
            />
            <button className="absolute right-0 top-0 w-[74px] h-[58px] bg-[#262626] rounded-r-md flex items-center justify-center">
              <div className="w-[24px] h-0 border-t-2 border-[#EBEEF3] transform rotate-[-45deg] translate-x-[-4px]"></div>
            </button>
          </div>
        </div>
        
       <div>
         {/* Spiral SVG background */}
         <div className=" absolute right-48 top-0 w-[312px] h-[248px]">
          <img 
            src="/src/assets/images/newsletter/spiral.svg" 
            alt="Decorative spiral" 
            className="w-full h-full object-contain"
          />
        </div>
        
         {/*player image - right side */}
         <div className="z-[1] absolute right-0 top-0 w-[520px] h-[385px] overflow-hidden rounded-r-md">
          <img 
            src="/src/assets/images/newsletter/image.png" 
            alt="American football player" 
            className="w-full h-full object-cover"
          />
        </div>
       </div>
      </div>
    </div>
  )
}

export default NewsLetter