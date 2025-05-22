import React from "react";

const solutions = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Conducting research to understand the target audience, behaviors.",
    tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
  },
  {
    id: 2,
    title: "App Development",
    description:
      "The process of creating software applications for mobile devices, such as smartphones.",
    tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
  },
  {
    id: 3,
    title: "Block-Chain",
    description:
      "Conducting research to understand the target audience, behaviors.",
    tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Web development is the process of building and maintaining websites or web applications.",
    tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
  },
  {
    id: 5,
    title: "Cloud Service",
    description:
      "Conducting research to understand the target audience, behaviors.",
    tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
  },
  {
    id: 6,
    title: "Cyber Security",
    description:
      "Conducting research to understand the target audience, behaviors.",
    tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
  },
];

const SmartSolutions = () => {
  return (
    <div className="bg-[#F8F8F8] my-18">
        <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-4xl text-black font-bold max-w-xl leading-[150%] tracking-wider">
          TO PROVIDE SMART <br />
          <span className="text-gray-900 font-thin">SOLUTION</span>
        </h2>
        <div>
          <button className="mt-2 text-black font-semibold hover:underline flex items-center gap-1">
            Explore More <span className="text-lg">↗</span>
          </button>
          <p className="text-gray-600 max-w-sm">
            Offer a wide range of services to help businesses establish and
            enhance their online presence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-200 pt-10">
        {solutions.map((item) => (
          <div
            key={item.id}
            className="border-r border-b border-gray-200 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {item.id}. {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-black text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="mt-auto bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition w-fit">
              Explore More ↗
            </button>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default SmartSolutions;
