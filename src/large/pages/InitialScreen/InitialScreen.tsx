import { useState, useEffect } from "react";

import Button from "../../components/button";
import Logo from "../../components/logo";
import SliderItem from "../../components/slider/SliderItem";

import "../../customClasses.css";
import JavaScriptIcon from "../../components/icons/iconsInitialScreen/jsIcon";
import PythonIcon from "../../components/icons/iconsInitialScreen/PythonIcon";
import JavaIcon from "../../components/icons/iconsInitialScreen/JavaIcon";
import PhpIcon from "../../components/icons/iconsInitialScreen/PhpIcon";
import DartIcon from "../../components/icons/iconsInitialScreen/DartIcon";
import CplusplusIcon from "../../components/icons/iconsInitialScreen/CplusplusIcon";
import RubyIcon from "../../components/icons/iconsInitialScreen/RubyIcon";
type TypingTextProps = {
  text: string;
  speed?: number;
};

// Função Animação Digitando
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

  return (
    <h1 className="secondColor text-2xl font-bold comfortaa">
      {displayedText}
    </h1>
  );
};

export default function InitialScreen() {
  return (
    <>
      <div className="flex flex-col h-screen items-center gap-30">
        {/* Header */}
        <div className="w-screen h-30 flex justify-around items-center">
          <figure className="flex items-center gap-2">
            <Logo size={60} />
            <h1 className="primaryColor text-lg font-normal revalia">
              CodingQuest
            </h1>
          </figure>
          <div className="flex font-semibold items-center gap-5">
            <Button text="Entrar" width={100} height={40} />
            <span className="primaryColor text-xl">|</span>
            <button className=" font-bold primaryColor text-xl">
              Registrar
            </button>
          </div>
        </div>
        <div className="flex flex-col w-screen h-max items-center gap-40">
          {/* InitialText */}
          <div className="flex flex-col items-center gap-10">
            <figure className="flex center items-center">
              <Logo size={110} />
              <span className="flex justify-center primaryColor font-medium text-5xl revalia pl-3">
                CondingQuest
              </span>
            </figure>

            <span className="primaryColor text-3xl font-medium text-center">
              Desenvolva suas habilidades em programação de forma interativa,
              <br /> prática e divertida!!!
            </span>

            <span className="secondColor text-lg">
              {<TypingText text="{Desafios do Inciante ao Avançado}" />}
            </span>

            <Button text="Comece a Programar" width={320} height={50} />
          </div>

          {/* slider */}
          <div className="sliderShadow w-screen">
            {/* slide-track */}
            <div className="flex w-[calc(150px * 6)] gap-10 justify-center items-center sliderAnimation">
              {/* slide */}
              <div>
                <SliderItem
                  text="JavaScript"
                  color="#FFD600"
                  component={() => <JavaScriptIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Python"
                  color="#0277BD"
                  component={() => <PythonIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Java"
                  color="#E76F00"
                  component={() => <JavaIcon size="30" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Php"
                  color="#6280b6"
                  component={() => <PhpIcon size="30" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Dart"
                  color="#00D2B8"
                  component={() => <DartIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="C++"
                  color="#0086D4"
                  component={() => <CplusplusIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Ruby"
                  color="#E42B1E"
                  component={() => <RubyIcon size="20" />}
                />
              </div>

              {/* slide */}
              <div>
                <SliderItem
                  text="JavaScript"
                  color="#FFD600"
                  component={() => <JavaScriptIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Python"
                  color="#0277BD"
                  component={() => <PythonIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Java"
                  color="#E76F00"
                  component={() => <JavaIcon size="30" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Php"
                  color="#6280b6"
                  component={() => <PhpIcon size="30" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Dart"
                  color="#00D2B8"
                  component={() => <DartIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="C++"
                  color="#0086D4"
                  component={() => <CplusplusIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Ruby"
                  color="#E42B1E"
                  component={() => <RubyIcon size="20" />}
                />
              </div>
              {/* slide */}
              <div>
                <SliderItem
                  text="JavaScript"
                  color="#FFD600"
                  component={() => <JavaScriptIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Python"
                  color="#0277BD"
                  component={() => <PythonIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Java"
                  color="#E76F00"
                  component={() => <JavaIcon size="30" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Php"
                  color="#6280b6"
                  component={() => <PhpIcon size="30" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Dart"
                  color="#00D2B8"
                  component={() => <DartIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="C++"
                  color="#0086D4"
                  component={() => <CplusplusIcon size="20" />}
                />
              </div>
              <div>
                <SliderItem
                  text="Ruby"
                  color="#E42B1E"
                  component={() => <RubyIcon size="20" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
