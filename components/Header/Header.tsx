"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();

  // 스크롤 이동 함수
  const scrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="full-container py-5 md:py-10 w-full sticky top-0 z-50 backdrop-blur-md bg-autumn-cream/90 shadow-md transition-all duration-300">
        <nav className="flex items-center justify-center space-x-2 md:space-x-5">
          <button onClick={() => scrollTo("top")}>
            <div className="hover:bg-autumn-wine hover:text-autumn-cream rounded-lg py-2 px-3 md:px-4 text-autumn-espresso font-medium transition-all duration-300 hover:shadow-md">
              Home
            </div>
          </button>
          <button onClick={() => scrollTo("whoami")}>
            <div className="hover:bg-autumn-wine hover:text-autumn-cream rounded-lg py-2 px-3 md:px-4 text-autumn-espresso font-medium transition-all duration-300 hover:shadow-md">
              Who am I
            </div>
          </button>
          <button onClick={() => scrollTo("career")}>
            <div className="hover:bg-autumn-wine hover:text-autumn-cream rounded-lg py-2 px-3 md:px-4 text-autumn-espresso font-medium transition-all duration-300 hover:shadow-md">
              My Career
            </div>
          </button>
          <button onClick={() => scrollTo("skill")}>
            <div className="hover:bg-autumn-wine hover:text-autumn-cream rounded-lg py-2 px-3 md:px-4 text-autumn-espresso font-medium transition-all duration-300 hover:shadow-md">
              My Skill
            </div>
          </button>
          <button onClick={() => router.push("/roach")}>
            <div className="hover:bg-autumn-wine hover:text-autumn-cream rounded-lg py-2 px-3 md:px-4 text-autumn-espresso font-medium transition-all duration-300 hover:shadow-md">
              🪳 Roach
            </div>
          </button>
        </nav>
        <hr className="mt-2 md:mt-4 opacity-50 border-autumn-bronze/30" />
      </header>
    </>
  );
};

export default Header;
