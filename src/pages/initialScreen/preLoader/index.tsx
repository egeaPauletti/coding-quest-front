import { useEffect, useState } from "react";
//
import TypingText from "../../../animations/TypingText";

//
import LogoCQ from "../../../components/LogoCQ";
import "./index.css";

const PreLoader = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); //ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <figure className="h-screen w-screen flex items-center justify-center gap-5">
      <div className="top-0 left-0 absolute z-50 h-screen w-screen flex justify-center items-center backgroundPixelado"></div>
      <div className="flex items-center justify-center h-60 w-60 logoBackground  animationFadeIn">
        <LogoCQ size={250} />
      </div>
      <span>{showText && <TypingText text="CodingQuest" />}</span>
    </figure>
  );
};

export default PreLoader;
