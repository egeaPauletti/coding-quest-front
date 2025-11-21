import { useEffect, useRef, useState } from "react";
import LogoCQ from "../../../components/LogoCQ";

export default function About() {

  const sectionRef = useRef<HTMLTableSectionElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // se quiser que a animação ocorra só uma vez
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <section ref={sectionRef} id="about" className={`w-screen h-max flex flex-col justify-center items-center`}>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <div className="flex flex-col 2xl:gap-15 gap-12">
              <div className={`flex flex-col items-start justify-center w-[60%]  py-3  2xl:pr-10 border-[#2ea98c] border-r-3  ${isVisible ? "slideToRight" : "opacity-0"
                }`}>
                <h1 className="primaryColor font-bold text-lg 2xl:text-xl mb-5">
                  O que é a <br />
                  CondingQuest?
                </h1>
                <p className="text-white 2xl:text-sm text-xs">
                  Bem-vindo ao CodingQuest, a plataforma online que transforma o
                  aprendizado de lógica de programação em uma aventura
                  envolvente e divertida! Se você está começando sua jornada no
                  mundo da programação ou quer aprimorar suas habilidades, o
                  CodingQuest foi projetado para tornar esse processo intuitivo,
                  desafiador e recompensador.
                </p>
              </div>
              <div className={`flex flex-col items-start justify-center w-[60%]  relative -right-[25%]  ${isVisible ? "slideToLeft" : "opacity-0"
                }`}>
                <h1 className="primaryColor font-bold 2xl:text-lg">
                  Uma Jornada Gamificada
                </h1>
                <p className="text-white 2xl:text-sm text-xs">
                  No CodingQuest, a programação vai além de códigos e
                  algoritmos: é uma experiência gamificada! Você avança por
                  níveis, desbloqueia conquistas e enfrenta desafios que evoluem
                  conforme sua habilidade. Cada problema resolvido é um passo
                  adiante em sua jornada, trazendo a satisfação de ver seu
                  progresso em tempo real.
                </p>
              </div>
            </div>
          </div>
          <div className={`hidden 2xl:flex glasseffect ${isVisible ? "animationFadeIn2" : "opacity-0"
            }`}>
            <LogoCQ size={352} />
          </div>
          <div className={`flex 2xl:hidden glasseffect ${isVisible ? "animationFadeIn2" : "opacity-0"
            }`}>
            <LogoCQ size={252} />
          </div>
        </div>

      </div>
    </section >
  )
}
