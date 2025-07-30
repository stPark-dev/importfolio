"use client";

import { motion } from "framer-motion";
import { Cake, Mail, MapPin, Pencil, Phone, User } from "lucide-react";
import { Gowun_Dodum } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Eye from "./Eye";

const gowun = Gowun_Dodum({ weight: "400", subsets: ["latin"] });

const profileClassName = twMerge("grid gap-20 grid-cols-1 md:grid-cols-3", gowun.className);

const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // 실시간 마우스 위치 로깅
      // console.log('Mouse position:', { x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <motion.div
        className="profile-container relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={
          isHovered
            ? {
                y: [0, -10, 0],
                boxShadow: "0px 25px 40px rgba(114, 47, 55, 0.4)",
                rotate: [0, 1, -1, 0],
              }
            : { y: 0, boxShadow: "0px 10px 20px rgba(74, 44, 23, 0.2)", rotate: 0 }
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: isHovered ? Infinity : 0,
        }}
      >
        <div className="relative">
          <div className="absolute z-0 inset-0">
            <Eye
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
              initialEyeX={117}
              initialEyeY={153}
              eyeRadius={15}
              isHovered={isHovered}
            />
            <Eye
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
              initialEyeX={173}
              initialEyeY={153}
              eyeRadius={15}
              isHovered={isHovered}
            />
          </div>
          <Image
            src="/profile_eye.png"
            alt="profile"
            width={300}
            height={200}
            className="relative z-10 profile-image"
          />
        </div>
      </motion.div>

      <div
        className={`${profileClassName} bg-autumn-cream shadow-xl rounded-lg p-6 my-8 border-2 border-autumn-bronze/20`}
      >
        <div className="flex items-center justify-center text-lg text-center text-autumn-espresso hover:text-autumn-wine transition-colors duration-300">
          <User className="mr-2 text-autumn-rust" /> 박성태
        </div>
        <div className="flex items-center justify-center text-lg text-center text-autumn-espresso hover:text-autumn-wine transition-colors duration-300">
          <Mail className="mr-2 text-autumn-rust" /> dmc6618@gmail.com
        </div>
        <div className="flex items-center justify-center text-lg text-center text-autumn-espresso hover:text-autumn-wine transition-colors duration-300">
          <MapPin className="mr-2 text-autumn-rust" /> 서울
        </div>
        <div className="flex items-center justify-center text-lg text-center text-autumn-espresso hover:text-autumn-wine transition-colors duration-300">
          <Phone className="mr-2 text-autumn-rust" /> 010-6335-6618
        </div>
        <div className="flex items-center justify-center text-lg text-center text-autumn-espresso hover:text-autumn-wine transition-colors duration-300">
          <Pencil className="mr-2 text-autumn-rust" /> 국민대학교
          <br />
          (경영정보 정보시스템전공)
        </div>
        <div className="flex items-center justify-center text-lg text-center text-autumn-espresso hover:text-autumn-wine transition-colors duration-300">
          <Cake className="mr-2 text-autumn-rust" /> 1993. 01. 10
        </div>
      </div>
    </div>
  );
};

export default Profile;
