import { useState, useEffect } from "react";

import Button from "../../components/button";
import Logo from "../../components/logo";
import SliderItem from "../../components/slider/SliderItem";
import JavaScriptIcon from "../../components/icons/iconsInitialScreen/jsIcon";
import PythonIcon from "../../components/icons/iconsInitialScreen/PythonIcon";
import JavaIcon from "../../components/icons/iconsInitialScreen/JavaIcon";
import PhpIcon from "../../components/icons/iconsInitialScreen/PhpIcon";
import DartIcon from "../../components/icons/iconsInitialScreen/DartIcon";
import CplusplusIcon from "../../components/icons/iconsInitialScreen/CplusplusIcon";
import RubyIcon from "../../components/icons/iconsInitialScreen/RubyIcon";

import dailyChal from "../../assets/icons/iconsInitialScreen/dailyChal.png";
import mapColored from "../../assets/icons/iconsInitialScreen/mapColored.png";
import learn from "../../assets/icons/iconsInitialScreen/learn.png";
import trophy from "../../assets/icons/iconsInitialScreen/trophy.png";
import firstMedal from "../../assets/icons/iconsInitialScreen/firstPositionMedal.png";
import secondMedal from "../../assets/icons/iconsInitialScreen/secondPositionMedal.png";
import thirdMedal from "../../assets/icons/iconsInitialScreen/thirdPositionMedal.png";

import "../../customClasses.css";
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
        {/* ------- */}
        {/* Main */}
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

      {/* O que é coding quest */}
      <div className="flex justify-center items-center gap-10 h-[60vh] w-screen">
        <Logo size={450} />
        <div className="flex flex-col gap-10 w-2xl ">
          <h2 className="secondColor text-3xl font-bold">
            O que é Coding Quest
          </h2>
          <span className="primaryColor">
            Bem-vindo ao CodingQuest, a plataforma online que transforma o
            aprendizado de lógica de programação em uma aventura envolvente e
            divertida! Se você está começando sua jornada no mundo da
            programação ou quer aprimorar suas habilidades, o CodingQuest foi
            projetado para tornar esse processo intuitivo, desafiador e
            recompensador.
          </span>
          <span className="secondColor font-bold text-xl">
            Uma Jornada Gamificada
          </span>
          <span className="primaryColor">
            No CodingQuest, a programação vai além de códigos e algoritmos: é
            uma experiência gamificada! Você avança por níveis, desbloqueia
            conquistas e enfrenta desafios que evoluem conforme sua habilidade.
            Cada problema resolvido é um passo adiante em sua jornada, trazendo
            a satisfação de ver seu progresso em tempo real.
          </span>
        </div>
      </div>

      {/* Nossa plataforma */}
      <div className="flex flex-col w-screen h-[90vh] justify-center items-center">
        <div className="flex flex-col items-start justify-center gap-15">
          <h2 className="primaryColor text-4xl font-bold">Nossa plataforma</h2>

          <div className="flex justify-center items-center gap-20 h-max">
            <div className="flex flex-col gap-15 w-auto">
              <div className="flex items-center gap-20">
                {/* Card Desafios Diários */}
                <div className="flex flex-col items-center gap-5 pt-5 pb-5 bg-[#3c355a] border-3 rounded-3xl border-[#24C97B] w-90 h-90">
                  <span className="primaryColor font-semibold text-2xl">
                    Desafios Diários
                  </span>
                  <img className="w-30" src={dailyChal} alt="" />
                  <span className="primaryColor w-[85%] text-center">
                    Lorem ipsum cras proin venenatis proin dictumst lacinia
                    ornare malesuada mollis, at pulvinar nec etiam curae
                    pulvinar lorem primis nibh, nostra nisl nunc litora aliquam
                    cras ipsum mauris laoreet.
                  </span>
                </div>

                {/* Card Modo Campanha*/}
                <div className="flex flex-col items-center gap-5 pt-5 pb-5 bg-[#3c355a] border-3 rounded-3xl border-[#24C97B] w-90 h-90">
                  <span className="primaryColor font-semibold text-2xl">
                    Modo Campanha
                  </span>
                  <img className="w-30" src={mapColored} alt="" />
                  <span className="primaryColor w-[85%] text-center">
                    Lorem ipsum cras proin venenatis proin dictumst lacinia
                    ornare malesuada mollis, at pulvinar nec etiam curae
                    pulvinar lorem primis nibh, nostra nisl nunc litora aliquam
                    cras ipsum mauris laoreet.
                  </span>
                </div>
              </div>

              <div className="flex gap-5 pt-5 pb-5 bg-[#3c355a] border-3 rounded-3xl border-[#24C97B] w-200 h-max">
                <div className="flex h-max w-[90%] justify-center items-center">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <span className="primaryColor font-semibold text-2xl w-[85%]">
                      Aprendizado
                    </span>
                    <span className="primaryColor w-[85%]">
                      Lorem ipsum cras proin venenatis proin dictumst lacinia
                      ornare malesuada mollis, at pulvinar nec etiam curae
                      pulvinar lorem primis nibh, nostra nisl nunc litora
                      aliquam cras ipsum mauris laoreet. Lorem ipsum cras proin
                      venenatis proin dictumst lacinia ornare malesuada.
                    </span>
                  </div>
                  <img className="w-30 h-30" src={learn} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5 pt-5 pb-5 bg-[#3c355a] border-3 rounded-3xl border-[#24C97B] w-90 h-151">
              <span className="primaryColor font-semibold text-2xl">
                Conquistas
              </span>
              <img className="w-60" src={trophy} alt="" />
              <span className="primaryColor text-center w-[85%]">
                Lorem ipsum cras proin venenatis proin dictumst lacinia ornare
                malesuada mollis, at pulvinar nec etiam curae pulvinar lorem
                primis nibh, nostra nisl nunc litora aliquam cras ipsum mauris
                laoreet. consectetur laoreet rutrum eu libero et facilisis
                suspendisse, tellus luctus ornare habitasse etiam massa
                pellentesque aliquet, viverra nunc leo suspendisse nunc
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pra quem é */}
      <div className="flex w-screen h-[80vh] justify-center items-center">
        <div className="flex w-max h-max flex-col justify-center items-center gap-30">
          <h2 className="primaryColor text-4xl font-bold">
            Pra quem é a Coding Quest?
          </h2>
          <div className="flex gap-25 items-center justify-center">
            <div className="flex flex-col items-center gap-5 pt-5 pb-5 bg-[#3c355a] border-3 rounded-3xl border-[#24C97B] w-80 h-100">
              <img className="relative -top-6.5" src={thirdMedal} alt="" />
              <span className="primaryColor font-semibold text-xl w-[85%] text-center">
                Quem está querendo começar a Estudar!
              </span>
              <span className="primaryColor w-[85%] text-center">
                Lorem ipsum cras proin venenatis proin dictumst lacinia ornare
                malesuada mollis, at pulvinar nec etiam curae pulvinar lorem
                primis nibh, nostra nisl nunc litora aliquam cras ipsum mauris
                laoreet.
              </span>
            </div>
            <div className="flex flex-col items-center gap-5 pt-5 pb-5 bg-[#3c355a] border-3 rounded-3xl border-[#24C97B] w-80 h-100">
              <img className="relative -top-5" src={secondMedal} alt="" />
              <span className="primaryColor font-semibold text-xl w-[85%] text-center">
                Quem está estudando programação!
              </span>
              <span className="primaryColor w-[85%] text-center">
                Lorem ipsum cras proin venenatis proin dictumst lacinia ornare
                malesuada mollis, at pulvinar nec etiam curae pulvinar lorem
                primis nibh, nostra nisl nunc litora aliquam cras ipsum mauris
                laoreet.
              </span>
            </div>
            <div className="flex flex-col items-center gap-5 pt-5 pb-5 bg-[#3c355a] border-3 rounded-3xl border-[#24C97B] w-80 h-100">
              <img className="relative -top-5" src={firstMedal} alt="" />
              <span className="primaryColor font-semibold text-xl w-[85%] text-center">
                Quem já sabe programar!
              </span>
              <span className="primaryColor w-[85%] text-center">
                Lorem ipsum cras proin venenatis proin dictumst lacinia ornare
                malesuada mollis, at pulvinar nec etiam curae pulvinar lorem
                primis nibh, nostra nisl nunc litora aliquam cras ipsum mauris
                laoreet.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ------ */}
      {/* Footer */}

      <div className="flex justify-center items-center w-screen h-70 bg-[#363057] border-t-1 border-[#3e3862]">
        <Logo size={100} />
      </div>
    </>
  );
}
