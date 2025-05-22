import React from "react";
import { ArrowUpRight } from "lucide-react";

const techCategories = ["Front-end", "Backend", "Mobile"];
const techStack = [
  { name: "HTML", logo: "🌐" },
  { name: "CSS", logo: "🎨" },
  { name: "JavaScript", logo: "🟨" },
  { name: "Vue Js", logo: "🟩" },
  { name: "React Js", logo: "⚛️" },
  { name: "Angular Js", logo: "🅰️" },
  { name: "D3Js", logo: "📊" },
  { name: "jQuery", logo: "💠" },
  { name: "TypeScript", logo: "🟦" },
  { name: "GraphQL", logo: "🔺" },
];

const articles = [
  {
    image: "https://alhenaventures.com/assets/img/home2/blog-01.jpg",
    category: "App/AI",
    date: "03 April, 2023",
    title: "Consulting evolves amid business changes.",
  },
  {
    image: "https://alhenaventures.com/assets/img/home2/blog-02.jpg",
    category: "IT Consulting",
    date: "03 April, 2023",
    title: "FutureForge Tech: Forging the Future of Innovation.",
  },
  {
    image: "https://alhenaventures.com/assets/img/home2/blog-03.jpg",
    category: "Software",
    date: "03 April, 2023",
    title: "CodeMosaic Showcase: Weaving Digital Brilliance",
  },
];

const Technology = () => {
  return (
    <div className="font-sans bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto">
      {/* Tech Section */}
      <section className="p-10">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <h2 className="text-5xl font-bold">We Used Advance</h2>
            <h3 className="text-2xl text-gray-300 mt-1">TECHNOLOGY</h3>
          </div>
          <p className="text-gray-400 max-w-md mt-4 md:mt-0">
            Offer a wide range of services to help businesses establish and enhance their online presence.
          </p>
        </div>

        <div className="flex gap-4 mb-6 flex-wrap">
          {techCategories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full font-medium ${
                cat === "Front-end" ? "bg-yellow-400 text-black" : "bg-[#1b1b1b] text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="bg-[#1b1b1b] h-32 flex flex-col justify-center items-center rounded-lg"
            >
              <div className="text-3xl mb-2">{tech.logo}</div>
              <p className="text-sm font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Article Section */}
      <section className="bg-white text-black px-10 py-16 mt-24">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-5xl font-bold">Our Latest</h2>
            <h3 className="text-2xl text-gray-600">ARTICLE</h3>
          </div>
          <div className="text-right max-w-xs">
            <p className="font-semibold">
              Explore More{" "}
              <span className="inline-block transform -rotate-45">
                ↗
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Services to help businesses establish and enhance their online presence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div key={i} className="bg-white border rounded-md shadow hover:shadow-lg transition">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover rounded-t-md"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">
                  {article.category} &nbsp; | &nbsp; {article.date}
                </p>
                <h4 className="font-semibold mb-2">{article.title}</h4>
                <p className="text-sm text-blue-600 font-medium flex items-center gap-1">
                  Read More{" "}
                  <ArrowUpRight className="inline-block" size={14} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default Technology;
