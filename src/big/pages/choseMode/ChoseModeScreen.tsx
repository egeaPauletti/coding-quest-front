import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function ChoseModeScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-[95%] h-[90%] items-center justify-center rounded-3xl backgroundColor gap-20 profileShadow relative">
          <SideBar />

          <div className="flex flex-col justify-center items-center gap-30 w-full h-full p-10 text-white relative -top-[4%]">
            {/*Título*/}
            <div
              className="w-[600px] h-[80px] flex items-center justify-center rounded-xl"
              style={{
                backgroundColor: "#232429",
                boxShadow: "4px 4px 6px rgba(35, 36, 41, 0.4)",
              }}
            >
              <h1 className="text-xl font-bold">Escolha um modo de Jogo</h1>
            </div>

            {/*Cards*/}
            <div
              className="w-[1050px] h-[375px] flex justify-between"
              style={{ marginTop: "20px", marginLeft: "20px" }}
            >
              {/*Modo Campanha*/}
              <div className="w-[290px] h-[450px] bg-[#232429] border-[2px] border-[#24C97B] rounded-[20px] p-4 flex flex-col justify-around items-center hover:scale-105 transition-transform">
                <div className="text-center mt-[20px] relative -top-[10%]">
                  <h2 className="text-[20px] font-bold text-[#24C97B] mb-[15px]">
                    {"{Modo Campanha}"}
                  </h2>
                  <p className="text-lg  font-medium text-white leading-tight">
                    Jogue o Modo Campanha <br />
                    viaje pelos mundos resolvendo seus desafios.
                  </p>
                </div>
                <Link to="/historyMode">
                  <Button text="Jogar!!" width={120} height={40} />
                </Link>
              </div>

              {/*Desafio Diário*/}
              <div className="w-[290px] h-[450px] bg-[#232429] border-[2px] border-[#24C97B] rounded-[20px] p-4 flex flex-col items-center justify-around hover:scale-105 transition-transform ">
                <div className="text-center mt-[20px] relative -top-[10%]">
                  <h2 className="text-2xl font-bold text-[#24C97B] mb-[15px]">
                    {"{Desafio Diário}"}
                  </h2>
                  <p className="text-lg font-medium text-white leading-tight">
                    Resolva um novo desafio
                    <br />
                    todos os dias,
                    <br />
                    quantos dias você consegue?
                  </p>
                </div>
                <Link to="/diaryChal">
                  <Button text="Jogar!!" width={120} height={40} />
                </Link>
              </div>

              {/*Cooperativo */}
              <div className="w-[290px] h-[450px] bg-[#232429] border-[2px] border-[#24C97B]/20 rounded-[20px] p-4 flex flex-col justify-between items-center text-center relative">
                <div className="opacity-20 mt-[20px]">
                  <h2 className="text-2xl font-bold text-[#24C97B] mb-[15px]">
                    {"{Cooperativo}"}
                  </h2>
                  <p className="text-lg  font-medium text-white leading-tight">
                    Junto de outros jogadores,
                    <br />
                    resolva desafios em modo
                    <br />
                    cooperativo.
                  </p>
                </div>
                <span className="absolute  top-1/2 rotate-[-45deg] text-white font-bold text-3xl h-[38px] flex items-center justify-center">
                  {"{Em Breve}"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
