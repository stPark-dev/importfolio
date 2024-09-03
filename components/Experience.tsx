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
      <section id="whoami" className="my-10">
        <SectionHeading>My Career</SectionHeading>
        {isClient && (
          <Chrono
            disableToolbar={true}
            items={experiencesData}
            mode="VERTICAL_ALTERNATING"
            itemWidth={150}
          />
        )}
      </section>
    </>
  );
}
