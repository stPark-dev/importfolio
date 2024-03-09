"use client";

import React from "react";

const Header: React.FC = () => {
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
      <header className="full-container py-10">
        <nav className="space-x-5 flex">
          <button onClick={() => scrollTo("top")}>
            <div className="hover:bg-gray-400 rounded py-1 px-2">Home</div>
          </button>
          <button onClick={() => scrollTo("whoami")}>
            <div className="hover:bg-gray-400 rounded py-1 px-2">Who am I</div>
          </button>
          <button onClick={() => scrollTo("project")}>
            <div className="hover:bg-gray-400 rounded py-1 px-2">My Project</div>
          </button>
          <button onClick={() => scrollTo("contact")}>
            <div className="hover:bg-gray-400 rounded py-1 px-2">Contact</div>
          </button>
        </nav>
        <hr className="mt-4 opacity-90" />
      </header>
    </>
  );
};

export default Header;
