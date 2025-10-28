import { useState } from "react";
import { executeCode } from "../../api/apiIDE";
import { LANGUAGE_VERSIONS } from "../../constants/constants";
import Button from "../Button";

interface OuputProps {
  language: string;
  sourceCode: string;
  chal: string;
}

const Output: React.FC<OuputProps> = ({ language, sourceCode, chal }) => {
  const [output, setOutput] = useState<string[] | null>(null);
  const [showChal, setShowChal] = useState<boolean>(true);

  type LanguageKey = keyof typeof LANGUAGE_VERSIONS;
  const version = LANGUAGE_VERSIONS[language as LanguageKey];

  const runCode = async () => {
    try {
      const { run: result } = await executeCode(language, version, sourceCode);
      setOutput(result.output.split("\n"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`w-[50%] h-full bgFourthColor pt-[0.5%] pl-[0.5%]`}>
      <div
        className={` whiteColor  text-sm 2xl:text-base ${
          showChal ? "opacity-50" : "opacity-100"
        }`}
      >
        {output
          ? output.map((line, i) => <div key={i}>{line}</div>)
          : `//Proposta de desafio: ${chal}`}
      </div>
      <div className="flex items-center gap-5 absolute bottom-[2.5%] right-[1%] opacity-100">
        <Button
          label="Run Code"
          filled
          onClick={() => {
            runCode();
            setShowChal(false);
          }}
        />
        <Button
          label="Ver Desafio"
          onClick={() => {
            setShowChal(true);
            setOutput(null);
          }}
        />
      </div>
    </div>
  );
};
export default Output;
