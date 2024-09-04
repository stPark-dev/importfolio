"use client";

import type { ReactNode } from "react";
import React, { createContext, useCallback, useContext, useState } from "react";

interface ScrollContextType {
  scrollToSection: (sectionId: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return <ScrollContext.Provider value={{ scrollToSection }}>{children}</ScrollContext.Provider>;
};
