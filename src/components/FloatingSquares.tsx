import React, { useRef } from "react";
//
import type { FloatingSquareProps, SquareData } from "../interfaces/interfaces";
//
import CIcon from "./icons/iconsLanguages/CIcon";
import DartIcon from "./icons/iconsLanguages/DartIcon";
import GOIcon from "./icons/iconsLanguages/GOIcon";
import JavaIcon from "./icons/iconsLanguages/JavaIcon";
import JSIcon from "./icons/iconsLanguages/JSIcon";
import KotlinIcon from "./icons/iconsLanguages/KotlinIcon";
import LuaIcon from "./icons/iconsLanguages/LuaIcon copy";
import PythonIcon from "./icons/iconsLanguages/PythonIcon";
import RubyIcon from "./icons/iconsLanguages/RubyIcon";

const squarePositions: SquareData[] = [
  { x: "47%", y: "22%", width: 75, height: 75, icon: <JavaIcon size={50} /> },
  { x: "63%", y: "66%", width: 75, height: 75, icon: <RubyIcon size={50} /> },
  { x: "83%", y: "33%", width: 75, height: 75, icon: <PythonIcon size={50} /> },
  { x: "10%", y: "33%", width: 75, height: 75, icon: <JSIcon size={50} /> },
  { x: "26%", y: "33%", width: 65, height: 65, className: "squareOp50" },
  { x: "18%", y: "91%", width: 55, height: 55, icon: <DartIcon size={50} /> },
  { x: "73%", y: "55%", width: 45, height: 45, icon: <KotlinIcon size={30} /> },
  { x: "31%", y: "55%", width: 45, height: 45, icon: <GOIcon size={30} /> },
  { x: "65%", y: "11%", width: 45, height: 45, icon: <LuaIcon size={30} /> },
  { x: "60%", y: "44%", width: 65, height: 65, className: "squareOp50" },
  {
    x: "91%",
    y: "77%",
    width: 65,
    height: 65,
    className: "squareOp50",
    icon: <CIcon size={30} />,
  },
  { x: "39%", y: "82%", width: 65, height: 65, className: "squareOp50" },
  { x: "34%", y: "5%", width: 50, height: 50, className: "squareOp50" },
  { x: "93%", y: "8%", width: 65, height: 65, className: "squareOp50" },
  { x: "65%", y: "27%", width: 50, height: 50, className: "squareBorder" },
  { x: "49%", y: "60%", width: 65, height: 65, className: "squareBorder" },
  { x: "76%", y: "97%", width: 65, height: 65, className: "squareBorder" },
  { x: "96%", y: "55%", width: 65, height: 65, className: "squareBorder" },
  { x: "8%", y: "11%", width: 65, height: 65, className: "squareBorder" },
  { x: "13%", y: "71%", width: 65, height: 65, className: "squareBorder" },
];

const squarePositionsLogin: SquareData[] = [
  { x: "16%", y: "44%", width: 65, height: 65, icon: <JavaIcon size={40} /> },
  { x: "44%", y: "54%", width: 65, height: 65, icon: <RubyIcon size={40} /> },
  { x: "58%", y: "88%", width: 65, height: 65, icon: <PythonIcon size={40} /> },
  { x: "88%", y: "44%", width: 65, height: 65, icon: <JSIcon size={40} /> },
  // { x: "52%", y: "66%", width: 50, height: 50, className: "squareOp50" },
  { x: "25%", y: "17%", width: 65, height: 65, icon: <DartIcon size={40} /> },
  {
    x: "10%",
    y: "75%",
    width: 40,
    height: 40,
    icon: <KotlinIcon size={20} />,
  },
  { x: "2%", y: "10%", width: 40, height: 40, icon: <GOIcon size={20} /> },
  { x: "76%", y: "22%", width: 40, height: 40, icon: <LuaIcon size={20} /> },
  { x: "36%", y: "78%", width: 50, height: 50, className: "squareOp50" },
  {
    x: "82%",
    y: "76%",
    width: 50,
    height: 50,
    className: "squareOp50",
    icon: <CIcon size={20} />,
  },
  // { x: "64%", y: "64%", width: 50, height: 50, className: "squareOp50" },
  { x: "58%", y: "10%", width: 50, height: 50, className: "squareOp50" },
  // { x: "4%", y: "54%", width: 50, height: 50, className: "squareOp50" },
  { x: "26%", y: "54%", width: 30, height: 30, className: "squareBorder" },
  { x: "86%", y: "4%", width: 50, height: 50, className: "squareBorder" },
  { x: "46%", y: "94%", width: 50, height: 50, className: "squareBorder" },
  // { x: "46%", y: "75%", width: 50, height: 50, className: "squareBorder" },
  { x: "46%", y: "22%", width: 50, height: 50, className: "squareBorder" },
  { x: "26%", y: "0%", width: 50, height: 50, className: "squareBorder" },
];

export const FloatingSquares: React.FC<FloatingSquareProps> = ({
  isLogin = false,
}) => {
  const squaresRef = useRef<HTMLDivElement[]>([]);

  return (
    <div>
      <div className={`${isLogin ? "hidden" : "flex"}`}>
        <div className="hidden 2xl:flex container">
          {squarePositions.map((pos, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) squaresRef.current[index] = el;
              }}
              className={`square ${pos.className || ""}`}
              style={{
                left: pos.x,
                top: pos.y,
                width: pos.width,
                height: pos.height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {pos.icon}
            </div>
          ))}
        </div>
        <div className="flex 2xl:hidden container">
          {squarePositions.map((pos, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) squaresRef.current[index] = el;
              }}
              className={`square ${pos.className || ""}`}
              style={{
                left: pos.x,
                top: pos.y,
                width: pos.width * 0.65,
                height: pos.height * 0.65,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {pos.icon}
            </div>
          ))}
        </div>
      </div>
      <div className={`${isLogin ? "flex" : "hidden"}`}>
        <div className="hidden 2xl:flex container">
          {squarePositionsLogin.map((pos, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) squaresRef.current[index] = el;
              }}
              className={`square ${pos.className || ""}`}
              style={{
                left: pos.x,
                top: pos.y,
                width: pos.width,
                height: pos.height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {pos.icon}
            </div>
          ))}
        </div>
        <div className="flex 2xl:hidden container">
          {squarePositionsLogin.map((pos, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) squaresRef.current[index] = el;
              }}
              className={`square ${pos.className || ""}`}
              style={{
                left: pos.x,
                top: pos.y,
                width: pos.width * 0.75,
                height: pos.height * 0.75,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {pos.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
