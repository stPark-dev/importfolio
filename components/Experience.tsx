"use client";

import {
  Building,
  Car,
  Droplets,
  Handshake,
  Home,
  Laptop,
  RefreshCcw,
  ShieldPlus,
  Syringe,
  Trees,
  UserSearch,
} from "lucide-react";
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
            mediaHeight={250}
            mode="VERTICAL_ALTERNATING"
            itemWidth={150}
          >
            {/* <div className="chrono-icons">
              <Syringe />
              <Handshake />
              <Handshake />
              <RefreshCcw />
              <Trees />
              <Laptop />
              <Car />
              <Trees />
              <Home />
              <UserSearch />
              <ShieldPlus />
              <Building />
              <Droplets />
              <Building />
            </div> */}
          </Chrono>
        )}
      </section>

      <style jsx global>{`
        div[class^="MediaWrapper"] div[class^="ImageWrapper"] img {
          object-fit: contain !important;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}
