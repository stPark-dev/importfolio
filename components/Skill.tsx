import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import SectionHeading from "./SectionHeading";

import { skillsData } from "@/lib/data";

const Skill = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <>
      <SectionHeading>My Skill</SectionHeading>
      {/* Flexbox to arrange cards in an arched layout */}
      <div id="skill" className="relative flex justify-center items-center mt-10">
        {skillsData.map((skill, index) => {
          const rotateDegree = (index - skillsData.length / 2) * 10;
          const translateY = Math.abs(index - skillsData.length / 2) * 10;

          return (
            <div
              key={index}
              className={`relative cursor-pointer perspective-1000 mx-2 transition-transform duration-300 ${
                hoverIndex === index ? "z-10" : ""
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{
                transform: `rotate(${rotateDegree}deg) translateY(${translateY}px) ${
                  hoverIndex === index ? "translateY(-20px) scale(1.05)" : ""
                }`,
              }}
            >
              <div className="absolute w-40 h-56 bg-white rounded-lg shadow-lg p-4 flex justify-center items-center text-center">
                <h2 className="text-xl font-semibold">{skill.name}</h2>
              </div>

              {/* Hover effect to show card details */}
              <AnimatePresence>
                {hoverIndex === index && (
                  <motion.div
                    key="back"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute w-40 h-56 bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center"
                  >
                    <h2 className="text-xl font-semibold">{skill.name}</h2>
                    <p className="text-sm">{skill.category}</p>
                    <p className="text-sm">Used in: {skill.usedIn}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skill;
