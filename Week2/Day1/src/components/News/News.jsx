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
    <div className="relative w-[1170px] h-[354px] mx-auto ">
      <div className="flex justify-between">
        {/* Recent News Section */}
        <div className="w-[570px]">
          <h2 className="font-['Sequel_Sans'] font-normal text-[28px] leading-[38px] text-[#262626] mb-6">Recent News</h2>
          
          <div className="relative w-[270px] h-[300px] rounded-[6px] overflow-hidden mr-[30px] float-left">
            <div className="relative w-full h-full">
              <img src={karateFighter} alt="Karate Fighter" className="w-full h-full object-cover rounded-[6px]" />
              <div className="absolute bottom-0 left-0 w-full h-[82px] bg-gradient-to-tr from-[rgba(255,255,255,0.24)] to-[rgba(255,255,255,0.06)] backdrop-blur-[50px] rounded-b-[6px] p-4 box-border">
                <span className="font-['DM_Sans'] font-medium text-[10px] leading-[100.9%] text-[#EBEEF3]">Day 5 Highlights</span>
                <h3 className="font-['Sequel_Sans'] font-normal text-[16px] leading-[123.9%] text-[#EBEEF3] mt-1">Baku 2023 World Taekwondo Championships</h3>
              </div>
            </div>
          </div>
          
          <div className="w-[270px] flex flex-col gap-[10px]">
            {recentNews.map((news, index) => (
              <div className="flex h-[70px] mb-[10px]" key={index}>
                <div className="w-[70px] h-[70px] rounded-[3px] overflow-hidden mr-3">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="font-['DM_Sans'] font-medium text-[10px] leading-[100.9%] text-[rgba(38,38,38,0.6)] mb-1">{news.tag}</span>
                  <h4 className="font-['Sequel_Sans'] font-normal text-[16px] leading-[123.9%] text-[#262626] m-0">{news.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-[15px]">
            <button className="flex flex-row justify-center items-center py-[6px] px-[7px] pr-[12px] gap-1 w-[80px] h-[28px] bg-[#B8C2CE] rounded-[3px] font-['DM_Sans'] font-medium text-[14px] leading-[42px] text-white border-none cursor-pointer">
              More
              <span className="w-[10px] h-0 border-t border-white">→</span>
            </button>
          </div>
        </div>
        
        {/* Clubs Ranking Section */}
        <div className="w-[570px]">
          <h2 className="font-['Sequel_Sans'] font-normal text-[28px] leading-[38px] text-[#262626] mb-6">Clubs Ranking</h2>
          
          <div className="w-full h-[354px] bg-[#EBEEF3] rounded-[6px] overflow-hidden">
            <div className="flex justify-between px-[15px] py-5 border-b border-[#B8C2CE] border-opacity-50">
              <div className="w-[200px] flex items-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] capitalize text-[#262626]">Club</div>
              <div className="flex gap-6 items-center">
                <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] capitalize text-[#262626]">GP</span>
                <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] capitalize text-[#262626]">W</span>
                <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] capitalize text-[#262626]">D</span>
                <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] capitalize text-[#262626]">L</span>
                <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] capitalize text-[#262626]">F</span>
                <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] capitalize text-[#262626]">A</span>
                <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] capitalize text-[#262626]">GD</span>
              </div>
            </div>
            
            <div>
              {clubsRankingData.map((club, index) => (
                <div 
                  className={`flex justify-between px-[15px] py-[10px] border-b border-[#B8C2CE] border-opacity-50 ${index % 2 === 1 ? 'bg-[#EBEEF3]' : ''}`} 
                  key={index}
                >
                  <div className="flex items-center w-[200px]">
                    <span className="font-['Sequel_Sans'] font-normal text-[13px] leading-[15px] capitalize text-[#262626] mr-[15px]">{club.position}</span>
                    <div className="w-6 h-6 mr-[10px]">
                      <img src={club.logo} alt={club.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-['Sequel_Sans'] font-normal text-[13px] leading-[15px] capitalize text-[#262626]">{club.name}</span>
                  </div>
                  <div className="flex gap-6">
                    <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] text-[#262626]">{club.stats.gp}</span>
                    <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] text-[#262626]">{club.stats.w}</span>
                    <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] text-[#262626]">{club.stats.d}</span>
                    <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] text-[#262626]">{club.stats.l}</span>
                    <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] text-[#262626]">{club.stats.f}</span>
                    <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] text-[#262626]">{club.stats.a}</span>
                    <span className="w-6 text-center font-['Sequel_Sans'] font-normal text-[16px] leading-[19px] text-[#262626]">{club.stats.gd}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News