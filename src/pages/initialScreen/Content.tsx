import WaveText from "../../animations/Wave";
import { FloatingSquares } from "../../components/FloatingSquares";
import Header from "../../components/Header";

export default function Content() {
  return (
    <div className="w-screen h-screen flex justify-center items-center backgroundHome">
      <div className="top-0 left-0 absolute z-50 h-screen w-screen flex justify-center items-center backgroundPixelado"></div>
      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
        <div className="absolute top-[2%] left-0 z-100 w-full justify-center items-center flex slideToBottom">
          <Header />
        </div>
        <div className="h-screen w-screen flex justify-center items-center    animationFadeIn">
          <FloatingSquares />
        </div>
        <div className="absolute z-100 flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-10 ml-10">
            <span className="flex flex-col whiteColor ibm 2xl:text-8xl text-6xl text-center">
              <div className="flex gap-[3rem]">
                <WaveText text="Alcance a" />
                <div className="primaryColor">
                  <WaveText text={"exelência"} />
                </div>
              </div>
              <WaveText text="em programação!" />
            </span>
            <span className="whiteColor ibm 2xl:text-2xl text-xl text-center animationFadeIn">
              Desenvolva suas habilidades em programação <br />
              de forma interativa, prática e divertida
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
