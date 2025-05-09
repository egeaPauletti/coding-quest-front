import "./index.css";
import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import ProfileBar from "../../components/chal/ProfileBar";
import ProfileImg from "../../components/chal/profileImg";
import LevelBar from "../../components/chal/LevelBar";
import Button from "../../components/Button";
import ChalSection from "../../components/chal/ChalSection";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HistoryModeChalScreen() {
  const [level, setLevel] = useState("1");
  const [title, setTitle] = useState(`{"Hello, World!"}`);
  const [chal, setChal] = useState(
    `//Faça um código que de um print escrevendo ${"Hello, World!"} na tela. `
  );

  const handleButtonClick = (
    newLevel: string,
    newTitle: string,
    newChal: string
  ) => {
    setLevel(newLevel);
    setTitle(newTitle);
    setChal(newChal);
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-[95%] h-[90%] items-center rounded-3xl backgroundColor gap-20  profileShadow relative">
          <div>
            <SideBar />
          </div>
          <div className="flex w-[90%] h-[100%] items-center justify-center">
            <div className=" flex w-[100%] h-[100%] justify-around">
              <div className="flex flex-col h-[100%] justify-around">
                <div className="w-max h-max relative top-[1%]">
                  <ProfileBar
                    profileFoto={() => <ProfileImg size={40} />}
                    username="JorginCodigos"
                    level="Lvl 12"
                    xpTotal={300}
                    userXp={150}
                  />
                </div>
                <div className="flex flex-row relative -top-[2%] gap-15 items-center">
                  <ChalSection level={level} title={title} chal={chal} />

                  <div className="flex flex-col items-center gap-5 w-max backgroundComponents  pt-[1.5%] pb-[1.5%] pl-[3.5%] pr-[2%] rounded-3xl profileShadow">
                    <span className="secondColor text-xl font-bold">
                      {"{1º Mundo}"}
                    </span>
                    <div className="relative">
                      <div className="flex flex-col gap-5 sideLine">
                        <button
                          onClick={() =>
                            handleButtonClick(
                              "1",
                              `{"Hello, World!"}`,
                              `//Faça um código que de um print escrevendo ${"Hello, World!"} na tela. `
                            )
                          }
                        >
                          <LevelBar
                            title="Hello World"
                            level="Level 1"
                            completed="{Concluido}"
                          ></LevelBar>
                        </button>

                        <button
                          onClick={() =>
                            handleButtonClick(
                              "2",
                              "Somando Dois Números",
                              "Faça um código que leia dois números e escreva a soma deles. "
                            )
                          }
                        >
                          <LevelBar
                            title="Somando Dois Números"
                            level="Level 2"
                            completed="{Concluido}"
                          ></LevelBar>
                        </button>

                        <button
                          onClick={() =>
                            handleButtonClick(
                              "3",
                              "Multiplicando por 3",
                              "Faça um código leia um número e escreva o valor dele multiplicado por 3."
                            )
                          }
                        >
                          <LevelBar
                            title="Multiplicando por 3"
                            level="Level 3"
                            completed="{Concluido}"
                          ></LevelBar>
                        </button>

                        <button
                          onClick={() =>
                            handleButtonClick(
                              "4",
                              "Somando Dois Números",
                              "Faça um código que receba dois valores, dívida um pelo outro e escreva o resultado."
                            )
                          }
                        >
                          <LevelBar
                            title="Somando Dois Números"
                            level="Level 4"
                            completed="{Concluido}"
                          ></LevelBar>
                        </button>

                        <button
                          onClick={() =>
                            handleButtonClick(
                              "5",
                              "Par ou Ímpar",
                              "Faça um código que leia um número e verifique se ele é par ou ímpar e depois a resposta."
                            )
                          }
                        >
                          <LevelBar
                            title="Par ou Ímpar"
                            level="Level 5"
                            completed="{Concluido}"
                          ></LevelBar>
                        </button>

                        <button
                          onClick={() =>
                            handleButtonClick(
                              "6",
                              "Sinal do Número",
                              "Faça um código que leia um número e escreva se ele é nulo, positivo ou negativo."
                            )
                          }
                        >
                          <LevelBar
                            title="Sinal do Número"
                            level="Level 6"
                            completed="{incompleto}"
                          ></LevelBar>
                        </button>

                        <button
                          onClick={() =>
                            handleButtonClick(
                              "7",
                              "Comparando Dois Valores",
                              "Faça um código que receba dois valores e verifique qual dos dois é maior ou se possuem o mesmo valor."
                            )
                          }
                        >
                          <LevelBar
                            title="Comparando Dois Valores"
                            level="Level 7"
                            completed="{Concluido}"
                          ></LevelBar>
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 mb-5">
                      <Link to="/choseMode">
                        <Button
                          text="Ver Mundos"
                          height={40}
                          width={150}
                        ></Button>
                      </Link>
                    </div>
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
