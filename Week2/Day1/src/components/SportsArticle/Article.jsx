import React from "react";
import basketballImg from "../../assets/images/sportsArticle/basketball.png";
import hockeyImg from "../../assets/images/sportsArticle/hockey.png";
import badmintonImg from "../../assets/images/sportsArticle/badminton.png";
import jakeProfile from "../../assets/images/sportsArticle/people/jake.png";
import foxiProfile from "../../assets/images/sportsArticle/people/foxi.png";
import bongProfile from "../../assets/images/sportsArticle/people/bong.png";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Article = () => {
  const articles = [
    {
      id: 1,
      image: basketballImg,
      category: "Basketball",
      title:
        "5 Exercises Basketball Players Should Be Using To Develop Strength",
      author: "Jake Will.",
      authorImg: jakeProfile,
      date: "04 June 2023",
      description:
        "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn't all about a massive body mass or ripped muscles.",
    },
    {
      id: 2,
      image: hockeyImg,
      category: "Hockey",
      title:
        "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
      author: "Foxi.zacon",
      authorImg: foxiProfile,
      date: "03 June 2023",
      description:
        "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
    },
    {
      id: 3,
      image: badmintonImg,
      category: "Badminton",
      title: "'Outdoor' Badminton Gets Support From Local Federation",
      author: "Bong Lozada",
      authorImg: bongProfile,
      date: "01 June 2023",
      description:
        "The Badminton World Federation is developing Air Badminton and the country's governing body, Philippine Badminton Association.",
    },
  ];

  return (
    <div className="w-full max-w-[1170px] px-4 sm:px-6 mx-auto my-8 md:my-16">
      <h2 className="text-[22px] md:text-[28px] font-normal mb-6 md:mb-8 font-sequel-sans text-[#262626]">
        Sports Article
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8">
        {articles.map((article) => (
          <div key={article.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-22px)] relative">
            {/* Article Image */}
            <div className="relative mb-4 md:mb-6">
              <img
                src={article.image}
                alt={article.category}
                className="w-full h-[200px] sm:h-[220px] md:h-[248px] object-cover rounded-md"
              />
              <div className="absolute top-[14px] right-[14px] px-[10px] py-[6px] bg-transparent border border-[#EBEEF3] rounded-md">
                <span className="text-[12px] text-[#EBEEF3] font-dm-sans capitalize">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mb-3 md:mb-5">
              <img
                src={article.authorImg}
                alt={article.author}
                className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-[46px]"
              />
              <div className="text-[14px] font-[600] text-[#3E3232] font-roboto tracking-[0.1px]">
                {article.author}
              </div>
            </div>

            {/* Date */}
            <div className="text-[13px] md:text-[14px] font-medium text-[rgba(38,38,38,0.6)] mb-3 md:mb-4 font-dmsans">
              {article.date}
            </div>

            {/* Title */}
            <h3 className="text-[18px] md:text-[22px] font-medium leading-[26px] md:leading-[29px] text-[#262626] mb-2 md:mb-3 font-sequel-sans">
              {article.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] font-medium text-[#696868] leading-[123.9%] font-dm-sans">
              {article.description}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center md:justify-start mt-8 md:mt-10 gap-5">
        <button className="w-[50px] h-[36px] md:w-[60px] md:h-[40px] bg-[#BAB8B8] rounded flex items-center justify-center">
          <BsArrowLeft className="text-[#EBEEF3] text-base md:text-lg" />
        </button>
        <button className="w-[50px] h-[36px] md:w-[60px] md:h-[40px] bg-[#262626] rounded flex items-center justify-center">
          <BsArrowRight className="text-[#EBEEF3] text-base md:text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Article;
