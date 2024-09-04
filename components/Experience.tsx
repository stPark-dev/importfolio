"use client";

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
              subtitleColor: "white",
            }}
            disableToolbar={true}
            items={experiencesData}
            mode="VERTICAL_ALTERNATING"
            itemWidth={150}
          >
            <div className="chrono-icons">
              <img src="https://img.icons8.com/ios-filled/100/000000/twitter.png" alt="twitter" />
            </div>
          </Chrono>
        )}
      </section>
    </>
  );
}
