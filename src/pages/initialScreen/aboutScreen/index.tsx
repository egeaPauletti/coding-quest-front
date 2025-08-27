import Header from "../../../components/Header";
import LogoCQ from "../../../components/LogoCQ";
import "./index.css";
const AboutScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#222222]  backgroundAbout">
      <div className="top-0 left-0 absolute z-50 h-screen w-screen flex justify-center items-center backgroundPixelado"></div>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="absolute top-[2%] left-0 z-100 w-full justify-center items-center flex ">
          <Header />
        </div>
        <div className="absolute flex items-center justify-center">
          <div className="w-1/2">
            <div className="flex flex-col 2xl:gap-15 gap-12">
              <div className="flex flex-col items-start justify-center w-[60%]  py-3  2xl:pr-10 border-[#2ea98c] border-r-3 slideToRight">
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
              <div className="flex flex-col items-start justify-center w-[60%]  relative -right-[25%] slideToLeft">
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
          <div className="hidden 2xl:flex animationFadeIn2 glasseffect">
            <LogoCQ size={352} />
          </div>
          <div className="flex 2xl:hidden animationFadeIn2 glasseffect">
            <LogoCQ size={252} />
          </div>
        </div>
        <span className="primaryColor font-bold 2xl:text-base text-xs -rotate-90 absolute right-0 bottom-[10%] slideToTop">
          CodingQuest
        </span>
        <div className="absolute flex w-screen h-screen gap-10 justify-start items-end bottom-[5%] left-[5%] slideToRight">
          <div className="bgPrimaryColor w-[5%] h-[0.25%]"></div>
          <div className="bgPrimaryColor w-[5%] h-[0.25%]"></div>
        </div>
        <div className="absolute flex w-screen h-screen gap-10 justify-start items-end bottom-[5%] left-[30%] slideToRight">
          <div className="bgPrimaryColor w-[5%] h-[0.25%]"></div>
          <div className="bgPrimaryColor w-[5%] h-[0.25%]"></div>
        </div>
        <div className="absolute flex w-screen h-screen gap-10 justify-start items-end bottom-[5%] left-[55%] slideToRight">
          <div className="bgPrimaryColor w-[5%] h-[0.25%]"></div>
          <div className="bgPrimaryColor w-[5%] h-[0.25%]"></div>
        </div>
      </div>
    </div>
  );
};
export default AboutScreen;
