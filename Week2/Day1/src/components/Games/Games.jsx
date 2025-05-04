import React, { useState } from 'react';
import footballImage from '../../assets/images/games/two-opposing-players-give-handshake-end-game 1.png';
// Import additional images from category directory for temporary use as slide backgrounds
import basketballImage from '../../assets/images/category/close-up-basketball-outdoors 1.png';
import soccerImage from '../../assets/images/category/soccer-ball-green-grass-soccer-field-generative-ai 1.png';
import racingImage from '../../assets/images/category/sport-car-is-drifting-track-with-smoke-around-it 1.png';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Games = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample news data for the slider
  const newsSlides = [
    {
      id: 1,
      category: 'Football',
      source: 'Agence France-Presse',
      date: '04 June 2023',
      title: 'Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms',
      description: 'The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals',
      image: footballImage
    },
    {
      id: 2,
      category: 'Basketball',
      source: 'ESPN',
      date: '03 June 2023',
      title: 'NBA Finals Set To Begin With Historic Matchup',
      description: 'The NBA Finals are set to begin with two teams that have demonstrated exceptional skill and teamwork throughout the playoffs',
      image: basketballImage
    },
    {
      id: 3,
      category: 'Soccer',
      source: 'Sky Sports',
      date: '02 June 2023',
      title: 'Champions League Final Attracts Record Viewership',
      description: 'The UEFA Champions League final between Manchester City and Inter Milan set new records for global viewership',
      image: soccerImage
    },
    {
      id: 4,
      category: 'Racing',
      source: 'Motorsport',
      date: '01 June 2023',
      title: 'Formula 1 Announces New Team Entry For 2026 Season',
      description: 'Formula 1 has officially confirmed a new team will join the grid in 2026, expanding the field to 11 teams',
      image: racingImage
    }
  ];

  // Get the current slide data
  const currentNews = newsSlides[currentSlide];

  // Total number of slides
  const totalSlides = newsSlides.length;

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto my-8 sm:my-12 md:my-16">
      {/* Main container */}
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[618px] rounded-md overflow-hidden">
        {/* Background container */}
        <div className="absolute w-full h-full left-0 top-0 bg-gray-200 opacity-60 rounded-md">
        </div>

        {/* Background image */}
        <div 
          className="absolute w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[518px] left-0 top-0 bg-cover bg-center rounded-t-md"
          style={{ backgroundImage: `url(${currentNews.image})` }}
        >
        </div>

        {/* Black overlay */}
        <div className="absolute w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[518px] left-0 top-0 bg-black opacity-60 rounded-t-md">
        </div>

        {/* Category label */}
        <div className="absolute flex flex-col justify-center items-center w-[110px] sm:w-[125px] h-[32px] sm:h-[36px] left-4 sm:left-8 md:left-12 top-4 sm:top-6 md:top-8 border border-gray-100 rounded">
          {/* Category text */}
          <span className="font-dm-sans font-medium text-lg sm:text-xl leading-[26px] capitalize text-gray-100">
            {currentNews.category}
          </span>
        </div>

        {/* Source and date */}
        <div className="absolute w-full sm:w-[375px] h-[14px] left-4 sm:left-8 md:left-12 top-[180px] sm:top-[220px] md:top-[260px] lg:top-[289px] font-dm-sans font-normal text-base sm:text-lg text-gray-50">
          {currentNews.source} - {currentNews.date}
        </div>

        {/* Title */}
        <h2 className="absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[760px] left-4 sm:left-8 md:left-12 top-[205px] sm:top-[245px] md:top-[285px] lg:top-[313px] font-sequel-sans font-extrabold sm:text-3xl md:text-3xl lg:text-4xl leading-tight sm:leading-[43px] uppercase text-gray-50">
          {currentNews.title}
        </h2>

        {/* Description */}
        <p className="absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[697px] h-auto left-4 sm:left-8 md:left-12 top-[270px] sm:top-[310px] md:top-[355px] lg:top-[417px] font-dm-sans font-medium text-base sm:text-lg md:text-xl leading-tight sm:leading-7 text-white">
          {currentNews.description}
        </p>

        {/* Navigation controls */}
        <div className="absolute flex items-center justify-between w-full sm:justify-end sm:w-auto sm:right-8 left-0 px-4 sm:px-0 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[50px]">
          {/* Left button */}
          <button onClick={prevSlide} className="w-[50px] h-[36px] sm:w-[60px] sm:h-[40px] bg-[#BAB8B8] rounded flex items-center justify-center">
            <BsArrowLeft className="text-[#EBEEF3] text-base sm:text-lg" />
          </button>
          
          {/* Page numbers - Hidden on small screens */}
          <div className="hidden sm:flex items-center mx-4 md:mx-6">
            {[1, 2, 3, 4].map((num, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-8 h-8 sm:w-9 sm:h-9 mx-2 sm:mx-3 md:mx-4 rounded-full border-none cursor-pointer flex justify-center items-center
                  ${currentSlide === index ? 'bg-gray-900' : 'bg-transparent'}`}
              >
                <span className={`font-sequel-sans text-xl sm:text-2xl leading-[60px] tracking-wider uppercase
                  ${currentSlide === index ? 'font-medium text-gray-100' : 'font-normal text-gray-500'}`}>
                  {num}
                </span>
              </button>
            ))}
          </div>
          
          {/* Right button */}
         <button onClick={nextSlide} className="w-[50px] h-[36px] sm:w-[60px] sm:h-[40px] bg-[#262626] rounded flex items-center justify-center">
            <BsArrowRight className="text-[#EBEEF3] text-base sm:text-lg" />
          </button>
        </div>
        
        {/* Mobile indicator dots */}
        <div className="absolute sm:hidden flex justify-center w-full bottom-16">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 mx-1 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;