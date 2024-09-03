"use client";

import { Ubuntu } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import WavyText from "./WavyText";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Intro = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="relative w-screen h-[40vh] md:h-[50vh]">
        <Image
          className={`object-cover object-center transition-opacity duration-300 bg-slate-600 ${
            isHovered ? "opacity-50" : "opacity-100"
          }`}
          src="/banner.avif"
          priority
          fill
          alt="intro image example"
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isHovered ? (
            <h1 className="text-3xl md:text-5xl font-bold text-purple-500/90 mb-4 md:mb-8">
              [&quot; stPark &quot;]
            </h1>
          ) : (
            <WavyText
              text='[" Developer Who Builds with Communication "]'
              duration={0.03}
              className={`text-xl md:text-2xl font-bold text-purple-600 bg-slate-500/90 ${ubuntu.className} `}
              replay={true}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;
