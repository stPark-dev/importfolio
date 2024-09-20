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
      "입사 후 최초로 투입되었던 사업 입니다. 연계 개발에 대한 기초를 쌓았으며 유선 전화를 통한 고객 응대 업무 및 SQL 쿼리 작성을 주로 수행했습니다. File2File, DB2File 등 파일을 파싱하여 연계하는 방법에 대해 알게 되었습니다.",
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
      "기존에 개발 완료된 사업장에 투입되어 유지 보수하는 업무를 맡았습니다. 일간 업무로 로그 확인 및 SQL 쿼리 작성을 수행하였으며, VPN 연결 등 네트워크 장비 체크 등의 업무를 수행했습니다.",
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
      "외부 출장 및 교육 업무를 수행하였으며 기존과 동일하게 네트워크 상태 체크 등의 업무를 수행했습니다.",
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
      "기존에 설치되었던 연계 시스템을 외부로 이관하는 업무를 맡았습니다. 기존에 설치되었던 에이전트와 어댑터를 성공적으로 이관하였으며 이관 테스트 또한 완벽하게 수행하여 사업을 마무리 했습니다.",
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
      "기존 ActiveMQ로 구현되어 있던 연계 시스템을 걷어내고 신규 연계 사업을 진행한 건 입니다. 외부 업체에서 데이터를 입력할 수 있게끔 Open API를 구현하였으며 복잡한 구조로 되어있는 환경공간 내부 DB에 데이터가 잘 입력될 수 있게 프로시저를 만드는 작업을 수행하였습니다.",
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
      "기존 구축되어 있던 기정원 연계 1차에 이어서 2차 구축을 맡아 수행하였습니다. 기정원 내부 DB로 연계 시킬 수 있는 API를 생성하여 외부 기관에 제공하였으며 DB2DB, File2DB 등 다양한 유형의 어댑터를 구현하여 연계의 다양성을 높였습니다.",
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
      "서울시의 불법주정차 단속 정보를 응답소로 연계하는 사업이었습니다. DB2DB 연계를 중심으로 다양한 예외 상황에 대비할 수 있게 연계 고도화를 진행했습니다.",
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
      "환경공단 담당자 변경으로 인해 업무 교육 및 자잘한 에러 처리를 지원하였습니다.",
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
      "기초 연계만 구현된 사업에 투입되어 프록시 어댑터에 생긴 네트워크 문제를 해결하고 에러 로깅이 가능하도록 프록시 어댑터를 고도화 하였습니다.",
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
    cardDetailedText: "서울시 인사정보 시스템을 타 내부 시스템으로 연계하는 사업을 진행했습니다.",
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
      "파노라마 뷰어 와 점검/작업 컴포넌트를 구현하여 솔루션 기능으로 추가하였습니다.",
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
      "파노라마 뷰어 와 점검/작업 컴포넌트를 구현하여 솔루션 기능으로 추가하였습니다.",
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
      "의정부 리버사이드 사업에 활용할 기초 데이터 생성을 준비하고 의정부 시장의 상인들이 활용할 수 있는 웹 페이지를 개설하였습니다. 카카오 인증을 이용한 회원가입 기능과 상점 정보를 확인 할 수 있는 게시판, 키오스크에 표출 시킬 광고와 영상을 게시할 수 있는 게시판 기능이 있습니다.",
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
      "공유재산이라고 불리는 고양시 내에서 대여할 수 있는 공간을 관리하는 시스템 입니다. 공간 정보를 확인할 수 있는 세부 페이지, 지도, 대여 상태를 변경할 수 있는 Kaban Board 구현 등의 업무를 수행했습니다.",
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
  {
    category: "Programming Language",
    name: "Java",
    usedIn: "Metabuild",
  },
  {
    category: "Programming Language",
    name: "Kotlin",
    usedIn: "Myself",
  },
  {
    category: "Programming Language",
    name: "JavaScript",
    usedIn: "Gractor",
  },
  {
    category: "Programming Language",
    name: "TypeScript",
    usedIn: "Gractor",
  },
  {
    category: "Backend Framework/Runtime",
    name: "Node.js",
    usedIn: "Gractor",
  },
  {
    category: "Frontend Framework/Library",
    name: "Vue.js",
    usedIn: "Gractor",
  },
  {
    category: "Frontend Framework/Library",
    name: "React",
    usedIn: "Gractor",
  },
  {
    category: "Frontend Framework/Library",
    name: "Next.js",
    usedIn: "Gractor",
  },
  {
    category: "State Management",
    name: "Recoil",
    usedIn: "Gractor",
  },
  {
    category: "Version Control",
    name: "Git",
    usedIn: "Gractor",
  },
  {
    category: "UI/CSS Framework",
    name: "MUI",
    usedIn: "Gractor",
  },
  {
    category: "UI/CSS Framework",
    name: "Tailwind",
    usedIn: "Gractor",
  },
  {
    category: "Database",
    name: "Oracle",
    usedIn: "Metabuild",
  },
  {
    category: "Database",
    name: "PostgreSQL",
    usedIn: "Metabuild",
  },
  {
    category: "Database",
    name: "Opensearch",
    usedIn: "Gractor",
  },
  {
    category: "Animation Library",
    name: "Framer Motion",
    usedIn: "Gractor",
  },
] as const;
