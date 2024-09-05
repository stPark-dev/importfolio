"use client";

import { Pen } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Chrono } from "react-chrono";

import SectionHeading from "./SectionHeading";

import { experiencesData } from "@/lib/data";

export default function Experience() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <section id="career" className="my-10">
        <SectionHeading>My Career</SectionHeading>
        {isClient && (
          <Chrono
            theme={{
              primary: "#BB9AF7",
              secondary: "333333",
              cardBgColor: "#FFFFFF",
              titleColor: "black",
              titleColorActive: "#BB9AF7",
              cardTitleColor: "black",
              subtitleColor: "white",
              iconBackgroundColor: "#f0f0f0",
            }}
            disableToolbar={true}
            items={experiencesData}
            mode="VERTICAL_ALTERNATING"
            itemWidth={150}
          >
            <div className="chrono-icons">
              <Pen className="w-5 h-5" />
            </div>
          </Chrono>
        )}
      </section>
    </>
  );
}
