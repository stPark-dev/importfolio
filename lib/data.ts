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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(GraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(Palette),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(Database),
    date: "2021 - present",
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
