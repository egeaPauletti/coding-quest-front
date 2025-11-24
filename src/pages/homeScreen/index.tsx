import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/sideBar/SideBar";
import "./index.css";

import profileIMG from "../../assets/profileIMG.png";

export default function HomeScreen() {
  return (
    <div className="w-screen h-screen flex justify-center items-top bgFourthColor py-20">
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
      <div className="w-full flex justify-around items-top z-90">
        <div className="grid grid-cols-2 w-2/4 h-max gap-5">
          <div className="flex flex-col gap-4 border-dashed border-primary border-2 col-span-2 p-4 sm:p-6 rounded-sm mb-10 shadow-lg">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-primary text-xl font-semibold">Desafio do Dia</h1>
              <p className="text-primary font-semibold">+300xp</p>
            </div>
            <p className="text-white text-sm">Leia dois vetores de 5 posições e crie um terceiro com a soma dos elementos.</p>
            <p className="text-white text-sm"></p>
            <div className="w-full text-end">
              <Button label="Jogar" filled />
            </div>
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
        <div className="w-120 h-max rounded-lg">
          <figure className="flex items-center gap-4">
            <img src={profileIMG} alt="" className="size-13 bg-white rounded-full" />
            <h2 className="text-primary font-semibold text-lg">SK | Fallen</h2>
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
      </div>
    </div>
  );
}
