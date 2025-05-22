import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import banner from "../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="max-w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 px-10 py-20 bg-gradient-to-tr from-[#391060] via-[#1A1A1A] to-[#391060]">
      <div className="max-w-5xl mx-auto text-white flex flex-col gap-5">
        <h1 className="text-4xl lg:text-[80px] font-bold tracking-wide leading-[130%]">
          We Compose <br />
          <span className="text-3xl lg:text-7xl font-thin tracking-widest">
            Software
          </span>{" "}
          <br />
          Masterpieces.
        </h1>
        <p className="text-md md:text-lg lg:text-lg text-gray-400 lg:ps-64 md:ps-52 my-6 font-medium">
          Alhena Ventures offers custom software, mobile app, and <br />
          website development services{" "}
          <span className="text-white">
            with expertise in solutions <br /> and powered tool.
          </span>
        </p>
        <div className="md:flex lg:flex items-center gap-5 mt-8">
          <p className="text-sm font-semibold">
            Review On <br />
            <span className="text-2xl font-semibold">Clutch</span>
          </p>
          <div className="flex md:flex-col lg:flex-col my-6 lg:my-0 md:my-0 gap-3 justify-items-center text-center">
            <div className="flex items-center gap-1">
              <FaStar className="text-red-500" />
              <FaStar className="text-red-500" />
              <FaStar className="text-red-500" />
              <FaStar className="text-red-500" />
              <FaStarHalfAlt className="text-red-500" />
            </div>
            <div>
              <p>(50 reviews)</p>
            </div>
          </div>
          <div className="lg:ms-12 md:ms-12">
            <button className="bg-[#F4CB0A] text-black px-8 font-semibold py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              Schedule a Call
              <span className="text-xl font-semibold">↗</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={banner} alt="" className="w-[90%] h-[90%]" />
      </div>
    </div>
  );
};

export default Banner;
