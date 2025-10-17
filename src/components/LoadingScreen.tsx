"use client";

import { theme, Typography } from "antd";
import { motion } from "framer-motion";

const { Text } = Typography;

interface LoadingScreenProps {
  visible: boolean;
}

export default function LoadingScreen({
  visible,
}: LoadingScreenProps) {
  const { token } = theme.useToken();

  return (
    <>
      {" "}
      {visible ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <motion.div
            animate={{
              scale: [1, 0.9, 0.9, 1, 1],
              opacity: [1, 0.48, 0.48, 1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
              repeat: Infinity,
            }}
          >
            <Text>Q</Text>
          </motion.div>

          <motion.div
            animate={{
              scale: [1.6, 1, 1, 1.6, 1.6],
              rotate: [270, 0, 0, 270, 270],
              opacity: [0.25, 1, 1, 1, 0.25],
              borderRadius: ["25%", "25%", "50%", "50%", "25%"],
            }}
            transition={{
              ease: "linear",
              duration: 3.2,
              repeat: Infinity,
            }}
            style={{
              position: "absolute",
              width: 100,
              height: 100,
              border: `3px solid ${token.colorPrimary}`,
              opacity: 0.8,
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 270, 270, 0, 0],
              opacity: [1, 0.25, 0.25, 0.25, 1],
              borderRadius: ["25%", "25%", "50%", "50%", "25%"],
            }}
            transition={{
              ease: "linear",
              duration: 3.2,
              repeat: Infinity,
            }}
            style={{
              position: "absolute",
              width: 120,
              height: 120,
              border: `8px solid ${token.colorPrimaryBorder}`,
              opacity: 0.5,
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
