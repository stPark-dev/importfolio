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
      <div id="whoami" className="relative w-screen h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          className={`object-cover object-center transition-all duration-700 ${
            isHovered ? "opacity-40 blur-sm scale-105" : "opacity-90 blur-0 scale-100"
          }`}
          src="/banner.avif"
          priority
          fill
          alt="intro image example"
        />
        {/* 부드러운 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-autumn-darkBrown/50 via-transparent to-autumn-wine/30" />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isHovered ? (
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-2xl mb-4 md:mb-8 transition-all duration-500">
              [&quot; stPark &quot;]
            </h1>
          ) : (
            <WavyText
              text='[" Developer Who Builds with Communication "]'
              duration={0.03}
              className={`text-xl md:text-2xl font-bold text-autumn-cream bg-autumn-wine/80 backdrop-blur-sm rounded-lg py-2 px-3 md:px-4 shadow-2xl ${ubuntu.className} `}
              replay={true}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;
