import React from "react";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Link from "next/link";

function ScrollTriggered() {
  return (
    <div style={container}>
      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

function CaseStudyDetail() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-4 w-1/2 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-1">
          <Link href={"/"}><p className="">Home</p></Link>
          <div>/</div>
          <p>Domain Detail</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="pt-1 pb-1 pl-4 pr-4 flex items-center justify-center text-xs font-semibold w-fit h-fit font-ibm rounded-full bg-green-500 text-white">
            IoT
          </div>
          <div className="text-xl font-semibold">
            NW Energy Mornitoring Platform
          </div>
        </div>
        <p className="text-sm">
          {"  "}The NW Energy Monitoring Platform is a comprehensive solution
          for managing and controlling energy projects, including solar power,
          building electricity, gas, and water systems. With real-time data
          visualization, remote control, and intelligent alerts, the app helps
          users track energy performance, optimize usage, and ensure operational
          efficiency across multiple sites. Designed for both technical teams
          and management, NW Energy Monitoring Platform brings all your energy
          systems into one intuitive, easy-to-use interface.
        </p>
        <div className="flex flex-row gap-1 items-end">
          <h1 className="text-sm font-medium">My Role:</h1>
          <p className="text-sm font-semibold">
            Key of project, build the project from zero to hero.
          </p>
        </div>
        <div>
          <ScrollTriggered />
        </div>
      </div>
    </div>
  );
}

export default CaseStudyDetail;
