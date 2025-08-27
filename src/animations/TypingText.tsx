import React, { useEffect, useState } from "react";
import type { TypingTextProps } from "../interfaces/interfaces";



const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100 }) => {
  const [displayedText, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <h1 className="text-7xl whiteColor ibm">{displayedText}</h1>;
};
export default TypingText;
