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
    <section className="relative w-full max-w-[1170px] mx-auto my-8 px-4 sm:px-6 lg:px-0">
      {/* Main container - background */}
      <div className="relative bg-[#EBEEF3] rounded-md p-6 lg:p-8 lg:pl-10">
        
        {/* Section Title */}
        <h2 className="font-sequel-sans font-normal text-2xl sm:text-[28px] leading-tight sm:leading-[38px] text-[#262626] mb-6">
          Trending News
        </h2>
        
        {/* Main layout container - preserve original on large screens */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left Section - Trending News Posts */}
          <div className="w-full lg:w-[429px] space-y-5">
            {trendingNews.map((news) => (
              <div key={news.id} className="flex flex-col sm:flex-row gap-4">
                <img 
                  src={news.image}
                  alt={news.title} 
                  className="w-full sm:w-[150px] lg:w-[234px] h-[110px] sm:h-[120px] lg:h-[150px] object-cover rounded-md"
                />
                <div className="mt-2 sm:mt-0 sm:max-w-[calc(100%-150px-1rem)] lg:max-w-[calc(429px-234px-1rem)]">
                  <p className="font-dm-sans font-medium text-[10px] leading-[10px] text-[#262626] opacity-60">
                    {news.category} - {news.date}
                  </p>
                  <h3 className="font-sequel-sans font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-tight lg:leading-[25px] mt-1 text-[#262626]">
                    {news.title}
                  </h3>
                  <p className="font-dm-sans font-normal text-[10px] sm:text-[11px] lg:text-[12px] leading-[15px] mt-2 text-[#696868] line-clamp-2 lg:line-clamp-3">
                    {news.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Section - Featured Cycling Post */}
          <div className="w-full lg:w-[670px] h-[300px] sm:h-[350px] lg:h-[500px] relative mt-6 lg:mt-0">
            {/* Background Image */}
            <img 
              src={cyclistDrinkingImage} 
              alt="Cyclist drinking water" 
              className="absolute w-full h-full object-cover rounded-md"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
            
            {/* Category tag */}
            <div className="absolute left-4 sm:left-6 lg:left-[36px] top-4 lg:top-[30px] h-[30px] lg:h-[36px] px-3 lg:px-4 border border-[#EBEEF3] rounded flex justify-center items-center">
              <span className="font-dm-sans font-medium text-sm sm:text-base lg:text-[20px] leading-tight lg:leading-[26px] text-[#EBEEF3] capitalize">
                Cycling
              </span>
            </div>
            
            {/* Bottom content */}
            <div className="absolute left-4 sm:left-6 lg:left-[36px] bottom-4 lg:bottom-[36px] p-2 lg:p-0">
              <p className="font-dm-sans font-normal text-xs sm:text-sm lg:text-[18px] leading-tight lg:leading-[18px] text-white mb-2 lg:mb-[14px]">
                Debits - 03 June 2023
              </p>
              <h3 className="font-sequel-sans font-extrabold text-lg sm:text-xl md:text-2xl lg:text-[36px] leading-tight lg:leading-[42px] text-white capitalize tracking-tight">
                DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending