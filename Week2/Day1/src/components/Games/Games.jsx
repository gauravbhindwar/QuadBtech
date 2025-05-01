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
    <section className="relative w-[1168px] h-[618px] mx-auto my-8">
      {/* Main container */}
      <div className="absolute w-full h-full left-1/2 -translate-x-1/2 top-0 bg-gray-200 opacity-60 rounded-md">
      </div>

      {/* Background image */}
      <div 
        className="absolute w-full h-[518px] left-0 top-0 bg-cover bg-center rounded-t-md"
        style={{ backgroundImage: `url(${currentNews.image})` }}
      >
      </div>

      {/* Black overlay */}
      <div className="absolute w-full h-[518px] left-1/2 -translate-x-1/2 top-0 bg-black opacity-60 rounded-t-md">
      </div>

      {/* Category label */}
      <div className="absolute flex flex-col justify-center items-center w-[125px] h-[36.09px] left-12 top-8 border border-gray-100 rounded">
        {/* Category text */}
        <span className="w-[107.6px] h-[36.09px] font-dm-sans font-medium mt-1 text-xl leading-[26px] capitalize text-gray-100">
          {currentNews.category}
        </span>
      </div>

      {/* Source and date */}
      <div className="absolute w-[375px] h-[14px] left-12 top-[289px] font-dm-sans font-normal text-lg text-gray-50">
        {currentNews.source} - {currentNews.date}
      </div>

      {/* Title */}
      <h2 className="absolute w-[760px] h-28 left-12 top-[313px] font-sequel-sans font-extrabold text-4xl leading-[43px] uppercase text-gray-50">
        {currentNews.title}
      </h2>

      {/* Description */}
      <p className="absolute w-[697px] h-14 left-12 top-[417px] font-dm-sans font-medium text-xl leading-7 text-white">
        {currentNews.description}
      </p>

      {/* Navigation controls */}
      <div className="absolute flex w-[470px] h-[60px] left-[673px] top-[550px]">
        {/* Left button */}
        <button onClick={prevSlide} className="w-[60px] h-[40px] bg-[#BAB8B8] rounded flex items-center justify-center">
          <BsArrowLeft className="text-[#EBEEF3] text-lg" />
        </button>
        {/* Page numbers */}
        {[1, 2, 3, 4].map((num, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`absolute w-9 h-9 top-[5px] rounded-full border-none cursor-pointer flex justify-center items-center
              ${index === 0 ? 'left-[113px]' : ''}
              ${index === 1 ? 'left-[183px]' : ''}
              ${index === 2 ? 'left-[253px]' : ''}
              ${index === 3 ? 'left-[323px]' : ''}
              ${currentSlide === index ? 'bg-gray-900' : 'bg-transparent'}`}
          >
            <span className={`font-sequel-sans text-2xl leading-[60px] tracking-wider uppercase
              ${currentSlide === index ? 'font-medium text-gray-100' : 'font-normal text-gray-500'}`}>
              {num}
            </span>
          </button>
        ))}
        {/* Right button */}
       <button onClick={nextSlide} className="w-[60px] h-[40px] bg-[#262626] rounded flex items-center justify-center ml-auto">
          <BsArrowRight className="text-[#EBEEF3] text-lg" />
        </button>
      </div>
    </section>
  );
};

export default Games;