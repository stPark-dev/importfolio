"use client";

import { motion } from "framer-motion";

const Eye = ({ mouseX, mouseY, eyeX, eyeY, eyeRadius }: any) => {
  const deltaX = mouseX - eyeX;
  const deltaY = mouseY - eyeY;
  const angle = Math.atan2(deltaY, deltaX);
  // 동공이 눈의 경계 내에서만 이동하도록 제한
  const maxDistance = eyeRadius - 10; // 동공의 최대 이동 범위 (눈알 크기 - 동공 크기)
  const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  return (
    <motion.div
      className="eye"
      style={{
        width: eyeRadius * 2,
        height: eyeRadius * 2,
        backgroundColor: "white",
        borderRadius: "50%",
        border: "2px solid black",
        position: "absolute",
        left: eyeX - eyeRadius,
        top: eyeY - eyeRadius,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        className="pupil"
        style={{
          width: 10,
          height: 10,
          backgroundColor: "black",
          borderRadius: "50%",
          position: "relative",
        }}
        animate={{
          x: moveX,
          y: moveY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </motion.div>
  );
};

export default Eye;
