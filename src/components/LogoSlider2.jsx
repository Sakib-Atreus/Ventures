// LogoMarquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const companies = [
  {
    title: "software Agency",
  },
  {
    title: "cyber security",
  },
  {
    title: "web development",
  },
  {
    title: "mobile app development",
  },
  {
    title: "software development",
  },
  {
    title: "digital marketing",
  },
  {
    title: "UI/UX design",
  },
  {
    title: "cloud computing",
  },
  {
    title: "data science",
  },
  {
    title: "AI & ML",
  },
];

const LogoSlider2 = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-12 shadow">
        <h1 className="text-gray-700 text-xl font-semibold mb-12 px-4">
          Our trusted persons <hr/>
        </h1>
        <Marquee pauseOnHover gradient={false} speed={80}>
          {companies.map((company, index) => (
            <div key={index} className="flex items-center gap-2 mx-8">
              <span className="text-2xl text-black font-semibold">
                {company.title}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSlider2;
