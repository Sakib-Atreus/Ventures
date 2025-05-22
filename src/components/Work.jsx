import { ArrowUpRight } from "lucide-react";

const workItems = [
  {
    image: "https://alhenaventures.com/assets/img/home2/portfolio-01.jpg", 
    title: "Smart Design, Smarter Solutions.",
    tags: ["Logo", "Color", "Typography"],
  },
  {
    image: "https://alhenaventures.com/assets/img/home2/portfolio-02.jpg",
    title: "Where Vision Meets Technology.",
    tags: ["Logo", "Color", "Typography"],
  },
  {
    image: "https://alhenaventures.com/assets/img/home2/portfolio-03.jpg", 
    title: "Smart Design, Smarter Solutions.",
    tags: ["Logo", "Color", "Typography"],
  },
  {
    image: "https://alhenaventures.com/assets/img/home2/portfolio-04.jpg",
    title: "Where Vision Meets Technology.",
    tags: ["Logo", "Color", "Typography"],
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-[#121212] p-8 font-sans">
        <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <h1 className="text-white text-6xl font-bold mb-4 md:mb-0">
          Work{" "}
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-lg">
            22
          </span>
        </h1>
        <div className="text-gray-300">
          <p className="font-semibold text-white mb-1">
            Explore More{" "}
            <span className="text-yellow-400 inline-block transform -rotate-45">
              ↗
            </span>
          </p>
          <p className="text-gray-400 text-sm max-w-md">
            Offer a wide range of services to help businesses establish and
            enhance their online presence.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#1b1b1b] rounded-xl overflow-hidden p-4"
          >
            <div className="flex gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-black px-3 py-1 text-white text-sm rounded-full font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl object-cover w-full h-84"
              />
              <div className="absolute bottom-4 right-4 bg-black text-white p-2 rounded-full group-hover:scale-105 transition">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <h3 className="text-white text-lg font-semibold mt-4">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Work;
