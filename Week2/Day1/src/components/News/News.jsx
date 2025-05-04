import React from 'react'
import karateFighter from '../../assets/images/news/karate-fighters.png'
import golfImage from '../../assets/images/news/golfball.png'
import taekwondoImage from '../../assets/images/news/boxing.png'
import cricketImage from '../../assets/images/news/cricketball.png'
import manchesterCityLogo from '../../assets/images/news/clubs/manchester-city.png'
import liverpoolLogo from '../../assets/images/news/clubs/liverpool.png'
import chelseaLogo from '../../assets/images/news/clubs/chelsea.png'
import tottenhamLogo from '../../assets/images/news/clubs/tottenham.png'
import arsenalLogo from '../../assets/images/news/clubs/arsenal.png'
import manchesterUnitedLogo from '../../assets/images/news/clubs/manchester_united.png'
import arrowIcon from '../../assets/Arrow4.svg'

const News = () => {
  const clubsRankingData = [
    {
      position: 1,
      name: 'Manchester City',
      logo: manchesterCityLogo,
      stats: {
        gp: 38,
        w: 29,
        d: 6,
        l: 3,
        f: 99,
        a: 26,
        gd: 73
      }
    },
    {
      position: 2,
      name: 'Liverpool',
      logo: liverpoolLogo,
      stats: {
        gp: 38,
        w: 28,
        d: 8,
        l: 2,
        f: 94,
        a: 26,
        gd: 68
      }
    },
    {
      position: 3,
      name: 'Chelsea',
      logo: chelseaLogo,
      stats: {
        gp: 38,
        w: 21,
        d: 11,
        l: 6,
        f: 76,
        a: 33,
        gd: 43
      }
    },
    {
      position: 4,
      name: 'Tottenham Hotspur',
      logo: tottenhamLogo,
      stats: {
        gp: 38,
        w: 22,
        d: 5,
        l: 11,
        f: 69,
        a: 40,
        gd: 29
      }
    },
    {
      position: 5,
      name: 'Arsenal',
      logo: arsenalLogo,
      stats: {
        gp: 38,
        w: 22,
        d: 3,
        l: 13,
        f: 61,
        a: 48,
        gd: 13
      }
    },
    {
      position: 6,
      name: 'Manchester United',
      logo: manchesterUnitedLogo,
      stats: {
        gp: 38,
        w: 16,
        d: 10,
        l: 12,
        f: 57,
        a: 57,
        gd: 0
      }
    }
  ]

  const recentNews = [
    {
      image: taekwondoImage,
      tag: '#Pollar. 87 - 12 July 2023',
      title: 'Baku 2023 Taekwondo Championships'
    },
    {
      image: golfImage,
      tag: '#Goft. Toni - 20 July 2023',
      title: 'Open Championship Royal Liverpool Golf'
    },
    {
      image: cricketImage,
      tag: '#Cricket. Toni - 27 July 2023',
      title: 'Ireland Tour of England Test 2023'
    }
  ]

  return (
    <section id="recent" className="w-full px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto my-10 sm:my-16">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-6">
        {/* Recent News Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-sequel-sans font-normal text-2xl sm:text-[28px] leading-[38px] text-[#262626] mb-6">Recent News</h2>
          
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 h-[240px] sm:h-[300px] rounded-[6px] overflow-hidden mb-6 sm:mb-0 sm:mr-[30px]">
              <div className="relative w-full h-full">
                <img src={karateFighter} alt="Karate Fighter" className="w-full h-full object-cover rounded-[6px]" />
                <div className="absolute bottom-0 left-0 w-full h-[82px] bg-gradient-to-tr from-[rgba(255,255,255,0.24)] to-[rgba(255,255,255,0.06)] backdrop-blur-[50px] rounded-b-[6px] p-2 pl-4 box-border">
                  <span className="font-dm-sans font-medium text-[10px] leading-[100.9%] text-[#EBEEF3]">Day 5 Highlights</span>
                  <h3 className="font-sequel-sans font-normal text-[16px] leading-[123.9%] text-[#EBEEF3] mt-1">Baku 2023 World Taekwondo Championships</h3>
                </div>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2 flex flex-col gap-[10px]">
              {recentNews.map((news, index) => (
                <div className="flex h-[70px] mb-[10px]" key={index}>
                  <div className="w-[70px] h-[70px] rounded-[3px] overflow-hidden mr-3">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="font-dm-sans font-medium text-[10px] leading-[100.9%] text-[rgba(38,38,38,0.6)] mb-1">{news.tag}</span>
                    <h4 className="font-sequel-sans font-normal text-[16px] leading-[123.9%] text-[#262626] m-0">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-4 sm:mt-[15px]">
            <button className="flex items-center justify-center gap-1 py-[6px] px-[12px] w-[80px] h-[28px] bg-[#B8C2CE] rounded-[3px] font-dm-sans font-medium text-[14px] leading-[16px] text-white border-none cursor-pointer">
              More
              <img src={arrowIcon} alt="arrow" className="w-[12px] h-[8px]" />
            </button>
          </div>
        </div>
        
        {/* Clubs Ranking Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-sequel-sans font-normal text-2xl sm:text-[28px] leading-[38px] text-[#262626] mb-6">Clubs Ranking</h2>
          
          <div className="w-full bg-[#EBEEF3] rounded-[6px] overflow-hidden">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[570px]">
                <div className="flex justify-between px-[15px] py-5 border-b border-[#B8C2CE] border-opacity-50">
                  <div className="w-[200px] flex items-center font-sequel-sans font-bold text-[16px] leading-[19px] capitalize text-[#262626]">Club</div>
                  <div className="flex gap-6 items-center">
                    {['GP', 'W', 'D', 'L', 'F', 'A', 'GD'].map((label) => (
                      <span key={label} className="w-6 text-center font-sequel-sans font-bold text-[16px] leading-[19px] capitalize text-[#262626]">{label}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  {clubsRankingData.map((club, index) => (
                    <div 
                      className={`flex justify-between px-[15px] py-[10px] ${index !== clubsRankingData.length - 1 ? 'border-b border-[#B8C2CE] border-opacity-50' : ''} ${index % 2 === 1 ? 'bg-[#EBEEF3]' : ''}`} 
                      key={index}
                    >
                      <div className="flex items-center w-[200px]">
                        <span className="font-sequel-sans font-normal text-[13px] leading-[15px] capitalize text-[#262626] mr-[15px]">{club.position}</span>
                        <div className="w-6 h-6 mr-[10px]">
                          <img src={club.logo} alt={club.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-sequel-sans font-normal text-[13px] leading-[15px] capitalize text-[#262626]">{club.name}</span>
                      </div>
                      <div className="flex gap-6">
                        {['gp', 'w', 'd', 'l', 'f', 'a', 'gd'].map(stat => (
                          <span className="w-6 text-center font-sequel-sans font-normal text-[16px] leading-[19px] text-[#262626]" key={stat}>{club.stats[stat]}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News