"use client"

import React from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingButton: React.FC = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 right-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-10 w-10" />
    </button>
  );
};

export default FloatingButton;