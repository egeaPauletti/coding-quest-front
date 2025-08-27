import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {
  challenges,
  CODE_SNIPPETS,
  WorldsDataSection,
} from "../../constants/constants";
import type { WorldsData } from "../../interfaces/interfaces";
import Button from "../Button";
import Output from "./Output";
import SelectLanguage from "./SelectLanguage";

const CodeEditor = () => {
  const [selectedLang, setSelectedLang] = useState<string>("javascript");
  type LanguageKey = keyof typeof CODE_SNIPPETS;

  const initialValue = CODE_SNIPPETS[selectedLang as LanguageKey];
  const [value, setValue] = useState(initialValue);

  const location = useLocation();

  const partes = location.pathname.split("/").filter(Boolean);
  const ultimoSegmento = partes[partes.length - 1];
  // console.log(ultimoSegmento);

  const id = Number(ultimoSegmento);

  const worldChallenges = challenges.filter((c) => c.worldId === id);

  const WorldsData: WorldsData[] = WorldsDataSection;
  const world = WorldsData.filter((c) => Number(c.id) === id);
  console.log(world);

  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const currentChallenge = worldChallenges[currentChallengeIndex];

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full w-full z-90">
      <div className="h-full w-full flex flex-col">
        <div className="flex w-full h-[15%] justify-between px-[1.5%]">
          <div className="flex flex-col justify-center">
            <span className="whiteColor opacity-50 text-sm 2xl:text-base">
              Mundo {id} | O {world[0].worldName}!
            </span>

            <span className="whiteColor text-sm 2xl:text-base font-semibold">
              Desafio {currentChallengeIndex + 1} - {currentChallenge?.desafio}
            </span>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <Button
              label="Desafio Anterior"
              iconLeft={<FaArrowLeft />}
              onClick={() =>
                setCurrentChallengeIndex((prev) => Math.max(prev - 1, 0))
              }
            />
            <Button
              label="Proximo desafio"
              iconRight={<FaArrowRight />}
              onClick={() =>
                setCurrentChallengeIndex((prev) =>
                  Math.min(prev + 1, worldChallenges.length - 1)
                )
              }
            />
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
