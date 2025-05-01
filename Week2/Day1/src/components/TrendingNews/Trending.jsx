import React from 'react'
// Import trending images
import raceHorseImage from '../../assets/images/trending/race-hose 1.png'
import cyclingImage from '../../assets/images/trending/cyclist-leads-actionfront-view-man-riding-bicycle-racing-road 1.png'
import boxingImage from '../../assets/images/trending/empty-boxing-arena-waiting-new-round-d-render-illustration 1.png'
import cyclistDrinkingImage from '../../assets/images/trending/sportsman-drinking-water-training-stationary-bike 1.png'

const Trending = () => {
  // Sample trending news data
  const trendingNews = [
    {
      id: 1,
      category: 'Race98',
      date: '03 June 2023',
      title: '6-Year-Old Horse Dies at Belmont Park After Race Injury',
      description: 'NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week\'s',
      image: raceHorseImage
    },
    {
      id: 2,
      category: 'JonyLs',
      date: '03 June 2023',
      title: 'Savilia Blunk Embraces Longer Season With World Cup',
      description: 'Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some',
      image: cyclingImage
    },
    {
      id: 3,
      category: 'King F',
      date: '03 June 2023',
      title: 'Ryan Garcia is fighting again, this time on social media',
      description: 'Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on',
      image: boxingImage
    }
  ]

  return (
    <section className="relative w-[1170px] h-[609px] mx-auto my-8">
      {/* Main container - background */}
      <div className="absolute w-full h-full bg-[#EBEEF3] rounded-md"></div>
      
      {/* Section Title */}
      <h2 className="absolute left-[36px] top-[29px] font-sequel-sans font-normal text-[28px] leading-[38px] text-[#262626]">
        Trending News
      </h2>
      
      {/* Left Section - Trending News Posts */}
      <div className="absolute left-[36px] top-[83px] w-[499px]">
        {/* Post 1 */}
        <div className="relative w-[499px] h-[150px] mb-5">
          <img 
            src={raceHorseImage}
            alt="Race Horse" 
            className="absolute w-[234px] h-[150px] left-0 top-0 object-cover rounded-md"
          />
          <div className="absolute left-[254px] top-[14px]">
            <p className="font-dm-sans font-medium text-[10px] leading-[10px] text-[#262626] opacity-60">
              {trendingNews[0].category} - {trendingNews[0].date}
            </p>
            <h3 className="font-sequel-sans font-normal text-[18px] leading-[25px] w-[245px] mt-1 text-[#262626]">
              {trendingNews[0].title}
            </h3>
            <p className="font-dm-sans font-normal text-[12px] leading-[15px] w-[239px] mt-3 text-[#696868]">
              {trendingNews[0].description}
            </p>
          </div>
        </div>
        
        {/* Post 2 */}
        <div className="relative w-[499px] h-[150px] mb-5">
          <img 
            src={cyclingImage}
            alt="Cycling" 
            className="absolute w-[234px] h-[150px] left-0 top-0 object-cover rounded-md"
          />
          <div className="absolute left-[254px] top-[14px]">
            <p className="font-dm-sans font-medium text-[10px] leading-[10px] text-[#262626] opacity-60">
              {trendingNews[1].category} - {trendingNews[1].date}
            </p>
            <h3 className="font-sequel-sans font-normal text-[18px] leading-[25px] w-[245px] mt-1 text-[#262626] capitalize">
              {trendingNews[1].title}
            </h3>
            <p className="font-dm-sans font-normal text-[12px] leading-[15px] w-[239px] mt-3 text-[#696868]">
              {trendingNews[1].description}
            </p>
          </div>
        </div>
        
        {/* Post 3 */}
        <div className="relative w-[499px] h-[150px]">
          <img 
            src={boxingImage}
            alt="Boxing" 
            className="absolute w-[234px] h-[150px] left-0 top-0 object-cover rounded-md"
          />
          <div className="absolute left-[254px] top-[14px]">
            <p className="font-dm-sans font-medium text-[10px] leading-[10px] text-[#262626] opacity-60">
              {trendingNews[2].category} - {trendingNews[2].date}
            </p>
            <h3 className="font-sequel-sans font-normal text-[18px] leading-[25px] w-[245px] mt-1 text-[#262626]">
              {trendingNews[2].title}
            </h3>
            <p className="font-dm-sans font-normal text-[12px] leading-[15px] w-[239px] mt-3 text-[#696868]">
              {trendingNews[2].description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Section - Featured Cycling Post */}
      <div className="absolute w-[570px] h-[609px] right-0 top-0">
        {/* Background Image */}
        <img 
          src={cyclistDrinkingImage} 
          alt="Cyclist drinking water" 
          className="absolute w-full h-full object-cover rounded-md"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
        
        {/* Category tag */}
        <div className="absolute left-[36px] top-[30px] border border-[#EBEEF3] rounded px-[26px] py-[29px] flex justify-center items-center">
          <span className="font-dm-sans font-medium text-[20px] leading-[26px] text-[#EBEEF3] capitalize">
            Cycling
          </span>
        </div>
        
        {/* Bottom content */}
        <div className="absolute left-[36px] bottom-[36px]">
          <p className="font-dm-sans font-normal text-[18px] leading-[18px] text-white mb-[14px]">
            Debits - 03 June 2023
          </p>
          <h3 className="font-sequel-sans font-normal text-[36px] leading-[42px] w-[509px] text-white capitalize">
            DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Trending