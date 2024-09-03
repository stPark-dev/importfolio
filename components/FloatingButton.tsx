"use client";

import { ArrowUp } from "lucide-react";
import React from "react";

const FloatingButton: React.FC = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-20 bg-amber-100 hover:bg-amber-300 text-white font-bold py-2 px-2 rounded-full"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-10 w-10" />
    </button>
  );
};

export default FloatingButton;
