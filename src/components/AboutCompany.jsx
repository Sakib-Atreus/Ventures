import React from "react";

const stats = [
  {
    icon: "👥",
    title: "400+",
    subtitle: "Delivered Software Projects.",
  },
  {
    icon: "🌀",
    title: "100%",
    subtitle: "Service Satisfaction Guarantee.",
  },
  {
    icon: "🛡️",
    title: "100%",
    subtitle: "Highly Accredited Security.",
  },
];

const AboutCompany = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-4xl font-bold text-black">
          ABOUT OUR <br />
          <span className="text-gray-900 text-2xl">COMPANY</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-md">
          Alhena Ventures is a software development agency based in Dhaka,
          Bangladesh, specializing in creating advanced technology solutions
          for a global audience.
        </p>

        <div className="mt-8 space-y-6">
          {stats.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-black">{item.title}</h4>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
          About alhenaventures
          <span className="text-lg">↗</span>
        </button>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <img
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
            alt="Team discussion"
            className="w-1/2 h-56 object-cover rounded-md"
          />
          <p className="text-gray-600 text-sm">
            Some may focus on specific niches, such as healthcare or
            e-commerce, while others may offer a comprehensive.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
          alt="Team collaboration"
          className="w-full h-72 object-cover rounded-md"
        />
      </div>
    </section>
  );
};

export default AboutCompany;
