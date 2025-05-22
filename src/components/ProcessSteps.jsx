import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const CircularStep = ({ step, total }) => {
  const percentage = (step / total) * 100;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="200" height="200" className="mx-auto mb-8">
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="#f0f7ff"
        stroke="#e5e7eb"
        strokeWidth="8"
      />
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="#facc15"
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
      />
      <text
        x="100"
        y="110"
        textAnchor="middle"
        fontSize="20"
        fontWeight="bold"
        fill="#111827"
      >
        Step {step}/{total}
      </text>
    </svg>
  );
};

const steps = [
  {
    icon: "🔍",
    title: "Discovery and Consultation.",
    description:
      "If applicable, create a user-centric design for software interfaces, websites, or applications.",
  },
  {
    icon: "🎨",
    title: "Design and Architecture.",
    description:
      "If applicable, create a user-centric design for software interfaces, websites, or applications.",
    points: ["Wireframing", "Design Mockups.", "Implementation."],
  },
  {
    icon: "💻",
    title: "Development",
    description:
      "Begin the development process, following coding standards and best practices.",
    points: ["Testing Plans.", "Bug Fixing.", "Agile Development."],
  },
];

const ProcessSteps = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div className="flex justify-center">
        {inView && <CircularStep step={2} total={4} />}
      </div>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.2 * index } },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{step.icon}</div>
              <div>
                <h3 className="text-xl text-black font-semibold mb-1">{step.title}</h3>
                {step.description && (
                  <p className="text-gray-600 mb-2">{step.description}</p>
                )}
                {step.points && (
                  <ul className="text-gray-700 font-medium space-y-1">
                    {step.points.map((point, i) => (
                      <li key={i}>+ {point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
