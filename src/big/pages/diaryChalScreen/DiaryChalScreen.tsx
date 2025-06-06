import "./index.css";
import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import ProfileBar from "../../components/chal/ProfileBar";
import ProfileImg from "../../components/chal/profileImg";
// import ChalSection from "../../components/chal/ChalSection";
// import TitleChal from "../../components/chal/TitleChal";
import Calen from "../../components/diary/Calen";
import Button from "../../components/Button";

export default function DiaryChallScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen ">
        <div className="flex w-[95%] h-[90%] items-center justify-center rounded-3xl backgroundColor gap-20  profileShadow relative">
          <SideBar />
          <div className="flex gap-20 items-center">
            <div className="backgroundComponents p-10 rounded-2xl profileShadow gap-10">
              <div className="w-max h-max relative">
                <div className="flex flex-col gap-5 backgroundComponents2 pr-15 pl-[4%] pt-[2.5%] pb-[5%] rounded-xl purpleBar">
                  <div className="flex flex-col gap-2">
                    <span className="secondColor text-2xl rocky">
                      Proposta de Desafio
                    </span>
                    <span className="primaryColor text-lg">
                      // Faça um algortimo que imprima a mesagem "Hello, World!"
                      na tela.
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <span className="secondColor rocky">
                      Envie sua resolução
                    </span>
                    <input
                      className="flex bg-[#434249]  p-2.5 w-215  h-60 primaryColor"
                      type="text"
                    />
                    <span className="secondColor rocky">
                      Resolva o desafio diretamente na nossa IDE online
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex gap-10 ">
                      <Button text="IDE" width={120} height={45} />
                      <Button text="Enviar" width={120} height={45} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-20">
              <ProfileBar
                profileFoto={() => <ProfileImg size={40} />}
                username="JorginCodigos"
                level="Lvl 12"
                xpTotal={300}
                userXp={150}
              />

              <div className="pl-[6%] pr-[6%] p-[5%] bg-[#232429] rounded-2xl gap-10 flex items-center justify-center secondColor font-bold text-2xl flex-col profileShadow">
                <h1>{"{Desafio Anteriores}"}</h1>

                <div className="bg-[#2d2e34] rounded-xl pt-[5%] pb-[5%] pl-[3%]">
                  <div className="w-max h-max flex flex-col text-center">
                    <h1 className="text-sm uppercase ">Fevereiro</h1>
                    <div className="flex justify-center items-center gap-2 w-103">
                      <Calen today={false} day="Dom" number="1" />
                      <Calen today={false} day="Seg" number="2" />
                      <Calen today={false} day="Ter" number="3" />
                      <Calen today={false} day="Qua" number="4" />
                      <Calen today={false} day="Qui" number="5" />
                      <Calen today={false} day="Sex" number="6" />
                      <Calen today={true} dayt="Sab" numbert="7" />
                    </div>
                  </div>
                </div>

                <div className="w-[100%] relative">
                  <div className="flex flex-col items-center justify-center w-[100%] h-15 bg-[#2d2e34] rounded-lg  purpleBar">
                    <h1 className="text-sm text-white uppercase">
                      desafio do dia
                    </h1>
                    <span className="text-sm font-bold text-white">
                      hello world
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
