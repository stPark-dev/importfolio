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
    title: "2018.03.05 ~ 2018.05.31",
    cardTitle: "마약류 통합관리시스템 연계보고 개발구축",
    cardSubtitle: "메타빌드, 서울 용산구",
    cardDetailedText:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    media: {
      name: "career 01",
      source: {
        url: "career1.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2018.06.25 ~ 2019.02.23",
    cardTitle: "중소기업지원사업통합관리시스템",
    cardSubtitle: "메타빌드, 서울 영등포구",
    cardDetailedText:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    media: {
      name: "career 02",
      source: {
        url: "career2.jpeg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2019.03.04 ~ 2019.12.31",
    cardTitle: "중소기업통합관리시스템 유지보수 지원",
    cardSubtitle: "메타빌드, 서울 영등포구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 02",
      source: {
        url: "career2.jpeg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2020.03.02 ~ 2020.04.30",
    cardTitle: "중소기업유통센터 공공구매 이관사업",
    cardSubtitle: "메타빌드, 서울 양천구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 03",
      source: {
        url: "career3.svg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2020.05.04 ~ 2020.09.18",
    cardTitle: "한국환경공단 올바로시스템 Open API 고도화 사업",
    cardSubtitle: "메타빌드, 인천 서구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 04",
      source: {
        url: "career4.svg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2020.09.07 ~ 2021.02.26",
    cardTitle: "중소기업기술정보진흥원 중소벤처24 대민정보시스템 통합운영체계 2차 구축",
    cardSubtitle: "메타빌드, 대전 유성구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 05",
      source: {
        url: "career5.svg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2021.03.15 ~ 2021.10.29",
    cardTitle: "서울시 불법주정차 통합플랫폼과 응답소 연계 구축",
    cardSubtitle: "메타빌드, 서울 중구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 06",
      source: {
        url: "career6.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2021.07.19 ~ 2021.11.19",
    cardTitle: "한국환경공단 올바로시스템 Open API 고도화 기술지원",
    cardSubtitle: "메타빌드, 인천 서구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 04",
      source: {
        url: "career4.svg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2022.01.15 ~ 2022.03.31",
    cardTitle: "부동산 정보 시스템 연계 구축",
    cardSubtitle: "메타빌드, 서울 강남구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 07",
      source: {
        url: "career7.png",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2022.03.30 ~ 2022.06.15",
    cardTitle: "서울시 인사정보 시스템 연계 구축",
    cardSubtitle: "메타빌드, 서울 중구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 06",
      source: {
        url: "career6.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2022.12.05 ~ 2023.07.02",
    cardTitle: "청주시 디지털 기반 시설물 안전관리시스템 구축 사업 용역",
    cardSubtitle: "그렉터, 서울 송파구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 07",
      source: {
        url: "career7.svg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2023.07.10 ~ 2023.10.19",
    cardTitle: "고양시 공유재산 건물정보시스템 구축 용역",
    cardSubtitle: "그렉터, 서울 송파구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 08",
      source: {
        url: "career8.png",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2023.10.23 ~ 2024.02.07",
    cardTitle: "의정부 리버사이드 서비스 플랫폼 구축용역",
    cardSubtitle: "그렉터, 서울 송파구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 09",
      source: {
        url: "career9.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2024.02.08 ~ 2024.08.31",
    cardTitle: "고양시 공유재산 통합 관리 시스템 구축 용역",
    cardSubtitle: "그렉터, 서울 송파구",
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    media: {
      name: "career 08",
      source: {
        url: "career8.png",
      },
      type: "IMAGE",
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
