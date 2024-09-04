"use client";

import Experience from "@/components/Experience";
import FloatingButton from "@/components/FloatingButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro";
import Profile from "@/components/Profile";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Profile />
        <Experience />
        <Skill />
      </main>
      <FloatingButton />
      <Footer />
    </>
  );
}
