import { Editor } from "@monaco-editor/react";
import { useState } from "react"; 
import {
  challenges,
  CODE_SNIPPETS,
  WorldsDataSection,
} from "../../constants/constants";
import type { WorldsData } from "../../interfaces/interfaces";
import Button from "../Button";
import Output from "../IDE/Output";
import SelectLanguage from "../IDE/SelectLanguage";

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


const CodeEditor = () => {
  const [selectedLang, setSelectedLang] = useState<string>("javascript");
  type LanguageKey = keyof typeof CODE_SNIPPETS;

  const initialValue = CODE_SNIPPETS[selectedLang as LanguageKey];
  const [value, setValue] = useState(initialValue);

  // --- MUDANÇA PRINCIPAL AQUI ---
  // O ID agora é definido estaticamente como 1 (ou qualquer outro ID que você queira)
  const id = 1; 

  const worldChallenges = challenges.filter((c) => c.worldId === id);

  const WorldsData: WorldsData[] = WorldsDataSection;
  // Buscamos o mundo pelo ID fixo
  const world = WorldsData.filter((c) => Number(c.id) === id);
  console.log(world);

  const [currentChallengeIndex] = useState(0);
  const currentChallenge = worldChallenges[currentChallengeIndex];
   const lastSevenDays = generateLastSevenDays();

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full w-full z-90">
      <div className="h-full w-full flex flex-col">
        <div className="flex w-full h-[15%] justify-between px-[1.5%]">
          <div className="flex flex-col justify-center">
            <span className="whiteColor opacity-50 text-sm 2xl:text-base">
              Desafio do dia {id} | O {world[0]?.worldName}!
            </span>

            <span className="whiteColor text-sm 2xl:text-base font-semibold">
              Desafio {currentChallengeIndex + 1} - {currentChallenge?.desafio}
            </span>
          </div>
          <div className="flex gap-5 justify-center items-center">
             <div className="flex items-center gap-4">
                        <span className="whiteColor text-sm 2xl:text-base font-semibold">
                            Desafios anteriores:
                        </span>
                        
                       <div className="flex gap-2">
                          {lastSevenDays.map((day, index) => (
                               <div
                                  key={index}
                                  className={`flex flex-col items-center justify-center p-2 rounded-lg 
                                               ${day.isToday ? 'bg-[#2ea98c]' : 'bg-gray-700'} 
                                               whiteColor text-xs 2xl:text-sm font-semibold cursor-pointer transition-colors hover:bg-gray-600`}
                                   style={{ width: '40px', height: '40px' }} 
                                >
                                   <span>{day.day}</span>
                                  
                                  <span>{day.challengeCount}</span> 
                               </div>
                           ))}
                      </div>
                   </div>
            

          </div>
        </div>
        <div className="flex w-full justify-between items-center bg-[#181818] py-[1%] px-[1.5%]">
          <div className="flex gap-2 items-center">
            <span className="whiteColor opacity-50 text-sm 2xl:text-base">
              Selecione sua linguagem:
            </span>
            <SelectLanguage
              onChange={(lang) => {
                setSelectedLang(lang);
                setValue(CODE_SNIPPETS[lang as LanguageKey]);
              }}
            />
          </div>
          <Button label="Corrigir Desafio" filled />
        </div>
        <div className="h-full w-full flex justify-end items-end">
          <Editor
            height="100%"
            width="50%"
            language={selectedLang}
            theme="vs-dark"
            value={value}
            onChange={(value) => setValue(value || "")}
            loading
          />
          <Output
            language={selectedLang}
            sourceCode={value}
            chal={currentChallenge?.enunciado}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;