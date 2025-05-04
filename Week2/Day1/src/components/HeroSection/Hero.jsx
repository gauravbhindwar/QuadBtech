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
    <section className="relative w-full h-auto min-h-[1100px] sm:min-h-[1150px] md:min-h-[750px] lg:h-[650px] mt-[-55px] overflow-hidden">

    <div className="bg-gray-100 pb-10 md:pb-0">
      {/* Basketball icon background - positioned behind everything */}
      <div 
          className="absolute w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[450px] md:h-[350px] lg:w-[716px] lg:h-[513px] top-[100px] left-0 sm:left-5 md:left-5 lg:left-25 grayscale mix-blend-luminosity opacity-50 md:opacity-70 lg:opacity-100"
          style={{ backgroundImage: `url(${basketballIcon})` }}
      />
      
      {/* Heading text */}
      <h1 className="absolute w-[280px] sm:w-[350px] md:w-[300px] lg:w-[470px] h-auto top-[120px] md:top-[120px] lg:top-[190px] font-sequel-sans font-bold text-[38px] sm:text-[50px] md:text-[45px] lg:text-[75px] leading-[45px] sm:leading-[60px] md:leading-[55px] lg:leading-[85px] uppercase bg-gradient-to-b from-gray-900 to-gray-400 bg-clip-text text-transparent z-10 left-5 sm:left-10 md:left-8 lg:left-55">
          Top scorer to the final match
      </h1>
      
      {/* Basketball player image */}
      <div 
          className="absolute w-[90%] sm:w-[80%] md:w-[400px] lg:w-[720px] h-[250px] sm:h-[300px] md:h-[320px] lg:h-[580px] left-[5%] sm:left-[10%] md:left-[350px] lg:left-[435px] top-[300px] md:top-[120px] lg:top-[99px] bg-contain bg-center bg-no-repeat md:bg-cover z-20"
          style={{ backgroundImage: `url(${basketballPlayer})` }}
      />
      
      {/* Description text */}
      <p className="absolute w-[80%] sm:w-[70%] md:w-[300px] lg:w-[364px] left-[10%] sm:left-[15%] md:left-[50px] lg:left-[595px] top-[580px] md:top-[460px] lg:top-[562px] font-dm-sans text-base md:text-lg leading-[22px] md:leading-[25px] text-gray-900 z-20 text-center md:text-left">
          The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
      </p>
      
      {/* Continue reading button */}
      <button className="absolute flex items-center justify-center py-2 md:py-3 px-6 md:px-8 w-[250px] md:w-[230px] lg:w-[285px] left-[50%] transform -translate-x-1/2 md:left-[90px] md:translate-x-0 lg:left-[590px] top-[680px] md:top-[550px] lg:top-[661px] bg-gray-900 rounded-md border-none cursor-pointer z-20">
          <span className="font-sequel-sans font-bold text-xs md:text-sm tracking-wider uppercase text-gray-100">
              CONTINUE READING
          </span>
      </button>
      
      {/* Right section with news cards */}
      <div className="absolute w-[270px] h-[350px] sm:h-[550px] md:h-[450px] left-[50%] transform -translate-x-1/2 md:translate-x-0 md:left-[450px] lg:right-[175px] lg:left-auto top-[730px] sm:top-[730px] md:top-[120px] lg:top-[150px] z-20 overflow-visible">
          {/* Today label */}
          <div className="sticky top-0 z-30 flex justify-center items-center px-4 py-1 w-[89px] h-[34px] bg-gray-100 rounded mb-4">
              <span className="font-dm-sans font-medium text-xl capitalize text-gray-400">
                  Today
              </span>
          </div>
          
          {/* News Cards Container - Scrollable */}
          <div className="h-[280px] sm:h-[400px] md:h-[320px] lg:h-[450px] overflow-y-auto pb-4 pr-1 custom-scrollbar">
              {newsCards.map((card, index) => (
                  <div 
                      key={card.id} 
                      className={`relative w-[270px] h-[180px] sm:h-[200px] md:h-[190px] lg:h-[233px] ${
                        index !== newsCards.length - 1 ? 'mb-6' : ''
                      } overflow-hidden rounded-md shadow-md`}
                  >
                      {/* Card Image */}
                      <div 
                          className={`absolute w-full h-full left-0 top-0 bg-cover bg-center ${index === 0 ? 'mix-blend-multiply' : ''}`}
                          style={{ backgroundImage: `url(${card.image})` }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute w-full h-[100px] sm:h-[120px] md:h-[120px] lg:h-[132px] left-0 bottom-0 bg-gradient-to-t from-gray-100 from-[35.23%] to-transparent to-100%"/>
                      
                      {/* Post details */}
                      <div className={`absolute left-[18px] bottom-[12px] ${index === 0 ? 'w-[200px]' : 'w-[234px]'}`}>
                          {/* Category and date */}
                          <p className="text-xs font-dm-sans font-medium text-gray-600/60">
                              {`${card.category} - ${card.date}`}
                          </p>
                          
                          {/* Title */}
                          <p className="mt-1 font-sequel-sans font-normal text-sm md:text-base leading-tight text-gray-900">
                              {card.title}
                          </p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    
        </div>
    </section>
  )
}

export default Hero