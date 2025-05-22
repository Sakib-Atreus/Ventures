// LogoMarquee.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';

const companies = [
  {
    title: "software Agency"
  },
  {
    title: "cyber security"
  },
  {
    title: "web development"
  },
  {
    title: "mobile app development"
  },
  {
    title: "software development"
  },
  {
    title: "digital marketing"
  },
  {
    title: "UI/UX design"
  },
  {
    title: "cloud computing"
  },
  {
    title: "data science"
  },
  {
    title: "AI & ML"
  }
];

const LogoSlider = () => {
  return (
    <div className="w-full bg-[#E3E5D8] py-8 shadow">
      <Marquee pauseOnHover gradient={false} speed={50}>
        {companies.map((company, index) => (
          <div key={index} className="flex items-center gap-2 mx-8">
            <span className="text-2xl text-black font-semibold">{company.title}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;
