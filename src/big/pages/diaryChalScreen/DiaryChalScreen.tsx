import "./index.css";
import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import ProfileBar from "../../components/ProfileBar";
import ProfileImg from "../../components/profileImg";
import ChalField from "../../components/ChalField";
import TitleChal from "../../components/TitleChal";
import Calen from "../../components/Calen";




export default function HistoryModeScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen ">

                    
        <div className="flex w-[95%] h-[90%] items-center justify-center rounded-3xl backgroundColor gap-20  profileShadow relative">

            <SideBar />

          <div className="w-[54%] h-[75%] bg-[#232429] m-auto ml-10 mr-2 rounded-4xl profileShadow">

            <div className="mt-10 ml-16 mr-20">

              <TitleChal level="Level 1" text="Hello World!!" xp="30" />

            </div>

                

              <div className="mt-10 ml-[65px] ">

                  <ChalField chalText="// Faça um algortimo que imprima na tela mesagem: Hello World!!!" />

              </div>
              

          </div>

          
          <div className=" ml-1 mb-[250px] ">

            
                <ProfileBar
                      profileFoto={() => <ProfileImg size={40} />}
                      username="JorginCodigos"
                      level="Lvl 12"
                      xpTotal={300}
                      userXp={150}
                    />

              <div className="w-[450px] h-[324px] bg-[#232429] rounded-3xl flex items-center  mt-19  secondColor font-bold text-2xl flex-col profileShadow">

                <h1 className="mt-10">desafio do dia</h1>
                  <div className="w-[380px] h-[120px] bg-[#2d2e34] m-auto p-5 rounded-3xl">
                    <h1 className="text-sm p-1">fevereiro</h1>
                    <div className="flex flex-row justify-center items-center gap-2 ">
                       <Calen today = {false} day="dom" number="1" dayt="" numbert=""/>
                       <Calen today = {false} day="seg" number="2" dayt="" numbert=""/>
                       <Calen today = {false} day="ter" number="3" dayt="" numbert=""/>
                       <Calen today = {false} day="qua" number="4" dayt="" numbert=""/>
                       <Calen today = {false} day="qui" number="5" dayt="" numbert=""/>
                       <Calen today = {false} day="sex" number="6" dayt="" numbert=""/>
                       <Calen today = {true} day="" number="" dayt="sab" numbert="7" />
                    </div>
                  </div>
                    <div className="w-[350px] h-[60px] bg-[#2d2e34] rounded-r-3xl m-auto text-center text-base flex items-center shadow-lg">
                    
                      <div className="w-[10px] h-full bg-[#924DDB] rounded-l-3xl"></div>
                      
                        <div className="flex-1">
                          <h1 className="text-xs text-white">desafio do dia</h1>
                          <span className="font-bold text-white">hello world</span>
                        </div>
                    </div>
                  </div>

          </div>


         
          

      
          
        </div>

      </div>
    </>
  );
}
