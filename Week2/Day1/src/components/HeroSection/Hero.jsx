import React from 'react'
import basketballPlayer from '../../assets/images/hero/basketball-player-action-sunset 1.png'
import basketballIcon from '../../assets/images/hero/basketball_sport_icon_in_minimalist_3d_render_2 1.png'
import runnerImage from '../../assets/images/hero/beautiful-young-african-woman-sports-clothing-running-against-gray-background 1.png'
import raceCarImage from '../../assets/images/hero/fastaccelerating-race-car-formula-one-racing-amid-sunset-generative-ai 1.png'

const Hero = () => {
  // Mock data for news cards
  const newsCards = [
    {
      id: 1,
      category: 'Race98',
      date: '03 June 2023',
      title: 'Ethiopian runners took the top four spots.',
      image: runnerImage
    },
    {
      id: 2, 
      category: 'INDYCAR',
      date: '03 June 2023',
      title: 'IndyCar Detroit: Dixon quickest in second practice',
      image: raceCarImage
    }
  ]

  return (
    <section className="relative w-[1400px] h-[750px] mt-[10px] overflow-hidden">
        <div className="bg-gray-100">
            
      {/* Basketball icon background - positioned behind everything */}
      <div 
          className="absolute w-[716px] h-[513px] top-[100px] grayscale mix-blend-luminosity"
          style={{ backgroundImage: `url(${basketballIcon})` }}
      />
      
      {/* Heading text */}
      <h1 className="absolute w-[470px] h-auto min-h-[300px] left-[135px] top-[204px] font-sequel-sans font-bold text-[75px] leading-[85px] uppercase bg-gradient-to-b from-gray-900 to-gray-400 bg-clip-text text-transparent z-10">
          Top scorer to the final match
      </h1>
      
      {/* Basketball player image */}
      <div 
          className="absolute w-[720px] h-[580px] left-[334px] top-[99px] bg-cover bg-center z-20"
          style={{ backgroundImage: `url(${basketballPlayer})` }}
      />
      
      {/* Description text */}
      <p className="absolute w-[364px] left-[556px] top-[562px] font-dm-sans text-lg leading-[25px] text-gray-900 z-20">
          The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
      </p>
      
      {/* Continue reading button */}
      <button className="absolute flex items-center justify-center py-3 px-8 w-[285px] left-[555px] top-[661px] bg-gray-900 rounded-md border-none cursor-pointer z-20">
          <span className="font-sequel-sans font-bold text-sm tracking-wider uppercase text-gray-100">
              CONTINUE READING
          </span>
      </button>
      
      {/* Right section with news cards */}
      <div className="absolute w-[270px] right-[1px] top-[131px] z-20">
          {/* Today label */}
          <div className="absolute flex justify-center items-center px-4 py-1 w-[89px] h-[34px] left-0 top-0 bg-gray-100 rounded">
              <span className="font-dm-sans font-medium text-xl capitalize text-gray-400">
                  Today
              </span>
          </div>
          
          {/* News Cards */}
          {newsCards.map((card, index) => (
              <div 
                  key={card.id} 
                  className={`absolute w-[270px] h-[233px] left-0 ${index === 0 ? 'top-[58px]' : 'top-[321px]'} overflow-hidden rounded-md`}
              >
                  {/* Card Image */}
                  <div 
                      className={`absolute w-full h-full left-0 top-0 bg-cover bg-center ${index === 0 ? 'mix-blend-multiply' : ''}`}
                      style={{ backgroundImage: `url(${card.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute w-full h-[132px] left-0 bottom-0 bg-gradient-to-t from-gray-100 from-[35.23%] to-transparent to-100%"/>
                  
                  {/* Post details */}
                  <div className={`absolute left-[18px] bottom-[12px] ${index === 0 ? 'w-[200px]' : 'w-[234px]'}`}>
                      {/* Category and date */}
                      <p className="text-xs font-dm-sans font-medium text-gray-600/60">
                          {`${card.category} - ${card.date}`}
                      </p>
                      
                      {/* Title */}
                      <p className="mt-1 font-sequel-sans font-normal text-base leading-tight text-gray-900">
                          {card.title}
                      </p>
                  </div>
              </div>
          ))}
      </div>
    
        </div>
    </section>
  )
}

export default Hero