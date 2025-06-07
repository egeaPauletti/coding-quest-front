import { useState } from "react";
import Api from "../../../api/api";
import Button from "../Button";
import AIRes from "./AIRes";

interface levelProps {
  title: string;
  level: string;
  chal: string;
}

const ChalSection: React.FC<levelProps> = ({ title, level, chal }) => {
  const [input, setInput] = useState("");
  const [resposta, setResposta] = useState("");
  const [loading, setLoading] = useState(false);

  const enviarPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResposta("");

    const prompt = `Dado o exercicio: ${chal}\n\n
            resposta:${input}\n\n  Verifique se a resposta condiz com uma resolução correta do exercicio proposto,
            a avaliação deverá dizer se o programa funcionárá corretamente ou se não,(a lingugem escolhida não é especificada então reconheça a lingugem e veja se funciona seu código) IMPORTANTE: devolva apenas o texto da resposta sem tag nenhuma`;
    try {
      const response = await fetch(Api("chat"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const text = await response.text();
      setResposta(text);

      console.log("Resposta da IA:", text);

      setTimeout(() => {
        setResposta("");
      }, 5000);
      // Limpa a resposta após 5 segundos
    } catch (error: unknown) {
      setResposta("Erro ao se comunicar com a IA.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-15 w-max h-max backgroundComponents p-[4%] rounded-2xl text-xl profileShadow">
        <div className="relative">
          <div className="w-full h-full ">
            <div className="flex justify-between font-semibold text-2xl backgroundComponents2  pl-[4%] pr-5 pt-5 pb-5 rounded-xl purpleBar ">
              <div className="flex secondColor gap-2.5">
                <span>{`level ${level}`}</span>
                <span>|</span>
                <span>{`${title}`}</span>
              </div>
              <span className="secondColor">30 XP</span>
            </div>
          </div>
        </div>

        <div className="w-max h-max relative">
          <div className="flex flex-col gap-5 backgroundComponents2 pr-15 pl-[4%] pt-[2.5%] pb-[5%] rounded-xl purpleBar">
            <div className="flex flex-col gap-2">
              <span className="secondColor rocky">Proposta de Desafio</span>
              <span className="primaryColor text-lg">{chal}</span>
            </div>
            <div className="flex flex-col gap-3 ">
              <span className="secondColor rocky">Envie sua resolução</span>
              <form onSubmit={enviarPrompt} className="flex flex-col">
                <input
                  className="formInput"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Resposta"
                  required
                />
                <span className="secondColor rocky">
                  Resolva o desafio diretamente na nossa IDE online
                </span>
                <div className="flex justify-end">
                  <div className="flex gap-10 ">
                    <button type="submit" disabled={loading}>
                      <Button
                        type="submit"
                        text={loading ? "Enviando..." : "Enviar"}
                        width={120}
                        height={45}
                      />
                    </button>
                  </div>
                </div>
                {resposta !== "" && <AIRes resp={resposta} />}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChalSection;
