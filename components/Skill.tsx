import { motion } from "framer-motion";
import { useState } from "react";

import SectionHeading from "./SectionHeading";

import { skillsData } from "@/lib/data";

// 카드 뒤집기 애니메이션
const flipVariants = {
  hidden: { rotateY: 0 },
  visible: { rotateY: 180 },
};

const SkillCard = ({ skill }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective">
      <motion.div
        className="relative w-48 h-64 m-4 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        animate={isFlipped ? "visible" : "hidden"}
        variants={flipVariants}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
        }}
      >
        <motion.div
          className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-xl font-bold">{skill.name}</h3>
        </motion.div>

        <motion.div
          className="absolute w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center rounded-lg shadow-lg"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-xl font-bold text-center">{skill.name}</h3>
          <p className="mt-2 text-sm text-center">{skill.category}</p>
          <p className="text-sm italic text-center">{skill.usedIn}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Skill = () => {
  return (
    <div id="skill">
      <SectionHeading>My Skill</SectionHeading>
      <div className="flex flex-wrap justify-center">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
