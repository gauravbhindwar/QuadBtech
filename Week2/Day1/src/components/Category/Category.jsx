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
    },
    {
      id: 2,
      title: "BASKETBALL",
      image: basketballImage,
    },
    {
      id: 3,
      title: "CAR SPORT",
      image: carSportImage,
    },
    {
      id: 4,
      title: "TABLE TENNIS",
      image: tableTennisImage,
    }
  ];

  return (
    <section className="relative w-[1170px] h-[488px] mx-auto my-20">
      {/* Category Heading */}
      <h2 className="text-[28px] leading-[38px] font-sequel-sans font-normal text-[#262626] mb-14">
        Category
      </h2>
      
      <div className="relative w-full h-[400px]">
        {/* Football Category */}
        <div className="absolute left-[34px] top-0">
          {/* Football Title Box */}
          <div className="absolute w-[270px] h-[116px] bg-[#EBEEF3] rounded-[6px]">
            <h2 className="absolute w-[203px] h-[75px] left-[34px] top-[20px] font-sequel-sans font-normal text-[37px] leading-[75px] text-center uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
              {categories[0].title}
            </h2>
          </div>
          
          {/* Football Image */}
          <div className="absolute w-[270px] h-[288px] top-[130px] overflow-hidden rounded-[6px]">
            <img 
              src={categories[0].image} 
              alt="Football" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Basketball Category */}
        <div className="absolute left-[334px] top-0">
          {/* Basketball Image */}
          <div className="absolute w-[270px] h-[235px] rounded-[6px] overflow-hidden">
            <img 
              src={categories[1].image} 
              alt="Basketball" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Basketball Title Box */}
          <div className="absolute w-[270px] h-[169px] top-[249px] bg-[#EBEEF3] rounded-[6px]">
            <div className="absolute w-[210px] left-[30px] top-[45px] font-sequel-sans font-normal text-[37px] leading-[39px] text-center uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
              <div>BASKET</div>
              <div>BALL</div>
            </div>
          </div>
        </div>
        
        {/* Car Sport Category */}
        <div className="absolute left-[634px] top-0">
          {/* Car Sport Title Box */}
          <div className="absolute w-[270px] h-[116px] bg-[#EBEEF3] rounded-[6px]">
            <h2 className="absolute w-[248px] h-[39px] left-[11px] top-[38px] font-sequel-sans font-normal text-[37px] leading-[39px] text-center uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
              {categories[2].title}
            </h2>
          </div>
          
          {/* Car Sport Image */}
          <div className="absolute w-[270px] h-[288px] top-[130px] overflow-hidden rounded-[6px]">
            <img 
              src={categories[2].image} 
              alt="Car Sport" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Table Tennis Category */}
        <div className="absolute left-[934px] top-0">
          {/* Table Tennis Image */}
          <div className="absolute w-[270px] h-[198px] top-[46px] overflow-hidden rounded-[6px] bg-[#010101]">
            <img 
              src={categories[3].image} 
              alt="Table Tennis" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Table Tennis Title Box */}
          <div className="absolute w-[270px] h-[118px] top-[258px] bg-[#EBEEF3] rounded-[6px]">
            <h2 className="absolute w-[210px] h-[78px] left-[30px] top-[20px] font-sequel-sans font-normal text-[37px] leading-[39px] text-center uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
              {categories[3].title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category