import WaveText from "../../../animations/Wave";
import { FloatingSquares } from "../../../components/FloatingSquares";

export default function Inital() {
  return (
    <section className="w-screen h-max flex flex-col justify-center items-center relative">
      <div className="h-screen w-screen flex justify-center items-center absolute z-50 animationFadeIn">
        <FloatingSquares />
      </div>
      <div className="w-screen h-screen flex flex-col z-90 justify-center items-center gap-10">
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
    </section >
  )
}

