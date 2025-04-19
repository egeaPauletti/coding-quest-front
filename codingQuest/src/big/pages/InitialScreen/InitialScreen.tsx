import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Logo from "../../components/logo";
import SliderItem from "../../components/slider/SliderItem";
import JavaScriptIcon from "../../components/icons/iconsInitialScreen/JsIcon";
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
import "./index.css";
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
    <h1 className="secondColor text-xl font-bold comfortaa">{displayedText}</h1>
  );
};

export default function InitialScreen() {
  return (
    <>
      {/* Primeira Seção - Header/InitialText/Slider */}
      <div className="flex flex-col w-screen h-screen justify-around">
        {/* Header */}
        <div className="flex justify-around items-center w-auto h-auto">
          <figure className="flex items-center gap-2">
            <Logo size={60} />
            <h1 className="primaryColor text-lg font-normal revalia">
              CodingQuest
            </h1>
          </figure>
          <div className="flex gap-3 items-center">
            <Link to="/login">
              <Button width={100} height={45} text="Entrar" />
            </Link>
            <span className="primaryColor text-xl font-bold">|</span>
            <Link to="/login">
              <span className="primaryColor text-lg font-bold cursor-pointer">
                Registrar
              </span>
            </Link>
          </div>
        </div>
        {/* --------- */}

        {/* initialText */}
        <div className="flex flex-col justify-center items-center gap-20 relative -top-[5%]">
          <div className="flex flex-col justify-center items-center gap-5">
            <figure className="flex items-center gap-2">
              <Logo size={100} />
              <h1 className="primaryColor text-4xl font-normal revalia">
                CodingQuest
              </h1>
            </figure>
            <span className="primaryColor text-xl font-bold text-center">
              Desenvolva suas habilidades em programação de forma interativa,
              <br />
              prática e divertida!!!
            </span>

            <TypingText text="{Desafios do Inciante ao Avançado}" />
          </div>
          <Link to="/login">
            <Button width={320} height={45} text="Comece a Programar" />
          </Link>
        </div>
        {/* --------- */}

        {/* Slider */}
        <div className="flex flex-col items-center justify-center">
          <span className="secondColor text-xl font-semibold">
            Programe em:
          </span>
          <div className="relative">
            <div className="flex flex-col justify-center h-35 w-screen sliderShadow">
              {/* slider-track */}
              <div className="flex gap-10 justify-center items-center w-screen sliderAnimation">
                {/* slider-itens */}
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
                {/* slider-itens */}
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
        {/* --------- */}
      </div>
      {/* Segunda Seção - O que é CodingQuest/ */}
      <div className="flex h-screen w-screen">
        <div className="flex h-[85%] w-max items-center justify-center gap-20">
          <Logo size={400} />
          <div className="flex flex-col w-[40%] gap-5">
            <h2 className="secondColor font-bold text-3xl">
              O que é CondingQuest?
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
              conquistas e enfrenta desafios que evoluem conforme sua
              habilidade. Cada problema resolvido é um passo adiante em sua
              jornada, trazendo a satisfação de ver seu progresso em tempo real.
            </span>
          </div>
        </div>
      </div>

      {/* Segunda Seção - Nossa Plataforma */}
      <div className="flex w-screen h-screen justify-center">
        <div className="flex flex-col h-[70%] w-max justify-center items-start gap-10">
          <h2 className="primaryColor text-3xl font-bold">Nossa Plataforma</h2>
          <div className="flex gap-10">
            <div className="flex flex-col gap-23">
              <div className="flex items-center gap-10">
                {/* Card-1 */}
                <div className="w-80 h-max">
                  <div className="flex flex-col items-center justify-center gap-5 cardApresentation">
                    <span className="primaryColor font-bold">
                      Desafios Diários
                    </span>
                    <img className="w-25" src={dailyChal} alt="" />
                    <span className="primaryColor text-center">
                      Lorem ipsum cras proin venenatis proin dictumst lacinia
                      ornare malesuada mollis, at pulvinar nec etiam curae
                      pulvinar lorem primis nibh, nostra nisl nunc litora
                      aliquam cras ipsum mauris laoreet.{" "}
                    </span>
                  </div>
                </div>
                {/* Card-2 */}
                <div className="w-80 h-max">
                  <div className="flex flex-col items-center justify-center gap-5 cardApresentation">
                    <span className="primaryColor font-bold">
                      Modo Campanha
                    </span>
                    <img className="w-25" src={mapColored} alt="" />
                    <span className="primaryColor text-center">
                      Lorem ipsum cras proin venenatis proin dictumst lacinia
                      ornare malesuada mollis, at pulvinar nec etiam curae
                      pulvinar lorem primis nibh, nostra nisl nunc litora
                      aliquam cras ipsum mauris laoreet.
                    </span>
                  </div>
                </div>
              </div>
              {/* Card-3 */}
              <div className="w-170 h-max">
                <div className="flex items-center justify-center gap-5 cardApresentation">
                  <div className="flex flex-col w-130">
                    <span className="primaryColor font-bold">
                      Desafios Diários
                    </span>
                    <span className="primaryColor text-start">
                      Lorem ipsum cras proin venenatis proin dictumst lacinia
                      ornare malesuada mollis, at pulvinar nec etiam curae
                      pulvinar lorem primis nibh, nostra nisl nunc litora
                      aliquam cras ipsum mauris laoreet.
                    </span>
                  </div>
                  <img className="w-25" src={learn} alt="" />
                </div>
              </div>
            </div>
            {/* Card-4 */}
            <div className="w-80 h-max">
              <div className="flex flex-col justify-center items-center gap-5 cardApresentation">
                <span className="primaryColor text-xl font-bold">
                  Conquistas
                </span>
                <img src={trophy} alt="" />
                <span className="primaryColor text-center">
                  Lorem ipsum cras proin venenatis proin dictumst lacinia ornare
                  malesuada mollis, at pulvinar nec etiam curae pulvinar lorem
                  primis nibh, nostra nisl nunc litora aliquam cras ipsum mauris
                  laoreet. consectetur laoreet rutrum eu libero et facilisis
                  suspendisse, tellus luctus ornare habitasse etiam massa
                  pellentesque aliquet, viverra nunc leo suspendisse nunc
                  eleifend.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terceira Seção - Pra quem é CodingQuest */}
      <div className="flex w-screen h-screen justify-center">
        <div className="flex flex-col w-auto h-[70%] gap-20 items-center">
          <h2 className="primaryColor font-bold text-3xl">
            Pra quem é a CodingQuest
          </h2>
          <div className="flex gap-15">
            {/* Card-1 */}
            <div className="w-70">
              <div className="flex flex-col  items-center justify-center gap-5 cardApresentation">
                <img className="w-20 relative -top-8" src={thirdMedal} alt="" />
                <span className="primaryColor font-bold text-xl text-center pt-3">
                  Quem está querendo
                  <br /> começar a Estudar!
                </span>
                <span className="primaryColor text-center w-[90%]">
                  Lorem ipsum cras proin venenatis proin dictumst lacinia ornare
                  malesuada mollis, at pulvinar nec etiam curae pulvinar lorem
                  primis nibh, nostra nisl nunc litora aliquam cras ipsum mauris
                  laoreet.
                </span>
              </div>
            </div>
            {/* Card-1 */}
            <div className="w-70 ">
              <div className="flex flex-col  items-center justify-center gap-5 cardApresentation">
                <img
                  className="w-18 relative -top-7"
                  src={secondMedal}
                  alt=""
                />
                <span className="primaryColor font-bold text-xl text-center pt-3">
                  Quem está estudando
                  <br /> programação!
                </span>
                <span className="primaryColor text-center w-[90%]">
                  Lorem ipsum cras proin venenatis proin dictumst lacinia ornare
                  malesuada mollis, at pulvinar nec etiam curae pulvinar lorem
                  primis nibh, nostra nisl nunc litora aliquam cras ipsum mauris
                  laoreet.
                </span>
              </div>
            </div>
            {/* Card-1 */}
            <div className="w-70">
              <div className="flex flex-col  items-center justify-center gap-5 cardApresentation">
                <img
                  className="w-18 relative -top-10.5"
                  src={firstMedal}
                  alt=""
                />
                <span className="primaryColor font-bold text-xl text-center pt-3">
                  Quem já sabe programar!
                </span>
                <span className="primaryColor text-center w-[90%]">
                  Lorem ipsum cras proin venenatis proin dictumst lacinia ornare
                  malesuada mollis, at pulvinar nec etiam curae pulvinar lorem
                  primis nibh, nostra nisl nunc litora aliquam cras ipsum mauris
                  laoreet.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center w-screen h-60 bg-[#363057]">
        <Logo size={100} />
      </div>
    </>
  );
}
