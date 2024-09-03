import { Database } from "lucide-react";
import { Palette } from "lucide-react";
import { GraduationCap } from "lucide-react";
import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "2019",
    cardTitle: "Graduated Bootcamp",
    cardSubtitle: "Miami, FL",
    cardDetailedText:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    media: {
      type: "ICON",
      source: React.createElement(GraduationCap),
    },
  },
  {
    title: "2019 - 2021",
    cardTitle: "Front-End Developer",
    cardSubtitle: "Orlando, FL",
    cardDetailedText:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    media: {
      type: "ICON",
      source: React.createElement(Palette),
    },
  },
  {
    title: "2021 - present",
    cardTitle: "Full-Stack Developer",
    cardSubtitle: "Houston, TX",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      type: "ICON",
      source: React.createElement(Database),
    },
  },
] as const;

export const skillsData = [
  "Java",
  "Kotlin",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Vue.js",
  "React",
  "Next.js",
  "Recoil",
  "Git",
  "MUI",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Opensearch",
  "PostgreSQL",
  "Oracle",
  "Framer Motion",
] as const;
