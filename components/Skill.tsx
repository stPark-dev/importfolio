import { motion } from "framer-motion";
import { useState } from "react";

import SectionHeading from "./SectionHeading";

import { skillsData } from "@/lib/data";

// 카드 뒤집기 애니메이션
const flipVariants = {
  hidden: { rotateY: 0 },
  visible: { rotateY: 180 },
};

// 카테고리별로 배경 색상을 설정 - Dark Autumn 팔레트
const categoryColors: { [key: string]: string } = {
  "Programming Language": "bg-autumn-wine",
  "Backend Framework/Runtime": "bg-autumn-forest",
  "Frontend Framework/Library": "bg-autumn-plum",
  "State Management": "bg-autumn-mustard",
  "Version Control": "bg-autumn-brick",
  "UI/CSS Framework": "bg-autumn-rust",
  Database: "bg-autumn-midnight",
  "Animation Library": "bg-autumn-terracotta",
};

const SkillCard = ({ skill }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // 해당 카테고리의 색상을 불러옵니다. 없을 경우 기본 색상은 와인색으로 설정합니다.
  const cardFrontColor = categoryColors[skill.category] || "bg-autumn-wine";

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
          className={`absolute w-full h-full ${cardFrontColor} text-autumn-cream flex items-center justify-center rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-xl font-bold drop-shadow-md">{skill.name}</h3>
        </motion.div>

        <motion.div
          className="absolute w-full h-full bg-autumn-espresso text-autumn-cream flex flex-col items-center justify-center rounded-lg shadow-xl border-2 border-autumn-bronze/20"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-xl font-bold text-center text-autumn-sand">{skill.name}</h3>
          <p className="mt-2 text-sm text-center text-autumn-camel">{skill.category}</p>
          <p className="text-sm italic text-center text-autumn-amber">{skill.usedIn}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Skill = () => {
  return (
    <div id="skill" className="py-10">
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
