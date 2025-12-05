import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/sideBar/SideBar";
import "./index.css";

import profileIMG from "../../assets/profileIMG.png";
import {
  challenges,
  WorldsDataSection
} from "../../constants/constants";

import type { WorldsData } from "../../interfaces/interfaces";
import PlanetIcon from "../choseWorldScreen/PlanetIcon";


const generateLastSevenDays = () => {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const today = new Date();
  const lastSevenDays = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();


    lastSevenDays.unshift({ day: dayOfWeek, challengeCount: dayOfMonth, isToday: i === 0 });
  }

  return lastSevenDays;
};

export default function HomeScreen() {
  const userWorld = 2
  const worldChallenges = challenges.filter((c) => c.worldId === 1);

  const WorldsData: WorldsData[] = WorldsDataSection;

  const world = WorldsData.filter((c) => Number(c.id) === 1);
  console.log(world);

  const lastSevenDays = generateLastSevenDays();
  const todayIndex = lastSevenDays.findIndex((day) => day.isToday);

  const dayOfMonth = lastSevenDays[(todayIndex !== -1 ? todayIndex : lastSevenDays.length - 1)]?.challengeCount ?? 1;
  const currentChallenge = worldChallenges[(dayOfMonth - 1) % worldChallenges.length];

  return (
    <div className="w-screen h-screen flex justify-center items-start bgFourthColor py-30">
      <div className="w-full h-full backgroundPixelado flex justify-center items-center absolute top-0 left-0 z-50"></div>
      {/* {correção da sidebar} */}
      <div>
        <div className="opacity-0 z-50">
          <Sidebar />
        </div>
        <div className="absolute top-0 -left-1 z-100">
          <Sidebar />
        </div>
      </div>
      <div className="w-full flex flex-row-reverse justify-around items-start z-90">
        <div className="grid grid-cols-2 w-2/4 h-max gap-5">
          <div className="flex flex-col gap-4 border-dashed border-primary border-2 col-span-2 p-4 sm:p-6 rounded-sm mb-10 shadow-lg">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-primary text-xl font-semibold">Desafio do Dia : {currentChallenge.desafio}</h1>
              <p className="text-primary font-semibold">+300xp</p>
            </div>
            <p className="text-white text-sm">{currentChallenge?.enunciado}</p>
            <p className="text-white text-sm"></p>
            <Link to={'/diaryChal'}>
              <div className="w-full text-end">
                <Button label="Jogar" filled />
              </div>
            </Link>
          </div>
          <div className=" flex justify-between items-center border-dashed border-primary border-2 col-span-1 p-4 sm:p-6 rounded-sm shadow-lg">
            <span className="text-primary text-base font-semibold">Modo Campanha</span>
            <Link to={'/campaign'}>
              <Button label="Jogar" filled />
            </Link>
          </div>
          <div className="flex justify-between items-center border-dashed border-primary border-2 col-span-1 p-4 sm:p-6 rounded-sm shadow-lg">
            <span className="text-primary text-base font-semibold">Desafio Daiário</span>
            <Link to={'/diaryChal'}>
              <Button label="Jogar" filled />
            </Link>
          </div>
        </div>
        <div className="w-max h-max flex flex-col gap-10">
          <div className="w-120 h-max rounded-lg">
            <figure className="flex items-center gap-4">
              <img src={profileIMG} alt="" className="size-13 bg-white rounded-full" />
              <h2 className="text-primary font-semibold text-lg">SK | Gabriel toledo</h2>
            </figure>
            <div className="w-full flex flex-col gap-1">
              <span className="text-primary font-semibold text-sm text-end">Lv 73</span>
              <div className="w-full relative">
                <div className="bg-primary/50 w-[75%] h-4"></div>
                <div className="bg-transparent border-primary border-2 w-full h-4 absolute top-0 left-0"></div>
              </div>
              <span className="text-primary font-semibold text-sm text-end">1800/2400</span>
            </div>
          </div>
          <div className="w-120 h-max flex flex-col items-center gap-8">
            <div className="flex items-center gap-10">
              <PlanetIcon
                waterColor={WorldsDataSection[userWorld].waterColor}
                landColor={WorldsDataSection[userWorld].landColor}
                rotationDurationMs={WorldsDataSection[userWorld].rotationDurationMs}
                rotationDirection={WorldsDataSection[userWorld].rotationDirection}
                rotationOffsetDeg={WorldsDataSection[userWorld].rotationOffsetDeg}
                continentSeed={WorldsDataSection[userWorld].continentSeed}
                continentCount={WorldsDataSection[userWorld].continentCount}
              />
              <div className="flex flex-col text-primary gap-4">
                <h2 className="text-primary font-semibold text-xl">
                  Seu Progresso
                </h2>
                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-semibold">Mundo Atual: <span className="text-white font-normal">{WorldsDataSection[userWorld].worldName}</span></span>
                  <span className="font-semibold">Desafios Concluidosl: <span className="text-white font-normal">53 Desafios</span></span>
                </div>
              </div>
            </div>
            <Link to={`/worlds/${userWorld}`}>
              <Button label="Continuar de onde parou" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
