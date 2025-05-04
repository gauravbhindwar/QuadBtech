import React from 'react'
// Import the images from the assets directory
import footballImage from '../../assets/images/category/soccer-ball-green-grass-soccer-field-generative-ai 1.png'
import basketballImage from '../../assets/images/category/close-up-basketball-outdoors 1.png'
import carSportImage from '../../assets/images/category/sport-car-is-drifting-track-with-smoke-around-it 1.png'
import tableTennisImage from '../../assets/images/category/red-ping-pong-racket-sports-equipment 1.png'

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "FOOTBALL",
      image: footballImage,
      layout: "title-top" // Layout variant
    },
    {
      id: 2,
      title: "BASKETBALL",
      image: basketballImage,
      layout: "title-bottom" // Layout variant
    },
    {
      id: 3,
      title: "CAR SPORT",
      image: carSportImage,
      layout: "title-top" // Layout variant
    },
    {
      id: 4,
      title: "TABLE TENNIS",
      image: tableTennisImage,
      layout: "title-bottom" // Layout variant
    }
  ];

  // Split the word for BASKETBALL on mobile
  const formatTitle = (title) => {
    if (title === "BASKETBALL") {
      return (
        <>
          <div>BASKET</div>
          <div>BALL</div>
        </>
      );
    }
    return title;
  };

  return (
    <section id="category" className="w-full px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto my-10 sm:my-16 md:my-20">
      {/* Category Heading */}
      <h2 className="text-2xl sm:text-[28px] leading-[38px] font-sequel-sans font-normal text-[#262626] mb-8 sm:mb-10 md:mb-14">
        Category
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-5">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col h-full">
            {category.layout === "title-top" ? (
              <>
                {/* Title Box on Top */}
                <div className="w-full h-[90px] sm:h-[100px] md:h-[116px] bg-[#EBEEF3] rounded-[6px] flex items-center justify-center mb-4">
                  <h2 className="font-sequel-sans font-extrabold text-2xl sm:text-3xl md:text-[37px] leading-tight text-center uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent px-2">
                    {formatTitle(category.title)}
                  </h2>
                </div>
                
                {/* Image Below */}
                <div className="w-full h-[200px] sm:h-[220px] md:h-[288px] overflow-hidden rounded-[6px]">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image on Top */}
                <div className={`w-full ${category.title === "TABLE TENNIS" ? 'h-[200px] sm:h-[230px] md:h-[286px] bg-[#010101]' : 'h-[180px] sm:h-[200px] md:h-[235px]'} overflow-hidden rounded-[6px] mb-4`}>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className={`w-full h-full object-cover ${category.title === "TABLE TENNIS" ? 'object-contain' : ''}`}
                  />
                </div>
                
                {/* Title Box Below */}
                <div className="w-full h-[120px] sm:h-[140px] md:h-[169px] bg-[#EBEEF3] rounded-[6px] flex items-center justify-center">
                  <h2 className="font-sequel-sans font-extrabold text-2xl sm:text-3xl md:text-[37px] leading-tight text-center uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent px-2">
                    {formatTitle(category.title)}
                  </h2>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category