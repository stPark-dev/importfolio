"use client";

import { ArrowUp } from "lucide-react";
import React from "react";

const FloatingButton: React.FC = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-10 right-10 bg-autumn-rust hover:bg-autumn-wine text-autumn-cream font-bold py-3 px-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-10 w-10" />
    </button>
  );
};

export default FloatingButton;
