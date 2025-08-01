"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface EyeProps {
  mouseX: number;
  mouseY: number;
  initialEyeX: number;
  initialEyeY: number;
  eyeRadius: number;
  isHovered: boolean;
}

const Eye = ({ mouseX, mouseY, initialEyeX, initialEyeY, eyeRadius, isHovered }: EyeProps) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const [eyePosition, setEyePosition] = useState({
    x: initialEyeX,
    y: initialEyeY,
  });

  useEffect(() => {
    if (eyeRef.current) {
      const rect = eyeRef.current.getBoundingClientRect();
      setEyePosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, []);

  const deltaX = mouseX - eyePosition.x;
  const deltaY = mouseY - eyePosition.y;
  const angle = Math.atan2(deltaY, deltaX);

  const maxDistance = eyeRadius - 12;
  const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);

  const moveX = isHovered ? 0 : Math.cos(angle) * distance;
  const moveY = isHovered ? 0 : Math.sin(angle) * distance;

  return (
    <motion.div
      ref={eyeRef}
      className="eye"
      style={{
        width: eyeRadius * 2,
        height: eyeRadius * 2,
        backgroundColor: "white",
        borderRadius: "50%",
        border: "2px solid black",
        position: "absolute",
        left: initialEyeX - eyeRadius,
        top: initialEyeY - eyeRadius,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        ref={pupilRef}
        className="pupil"
        style={{
          width: 10,
          height: 10,
          backgroundColor: "black",
          borderRadius: "50%",
        }}
        animate={{
          x: moveX,
          y: moveY,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 30,
        }}
      />
    </motion.div>
  );
};

export default Eye;
