import Button from "./button";
import HelpIcon from "./icons/iconsSideBar/HelpIcon";

interface ComponentProps {
  chalText: string;
}

const ChalField: React.FC<ComponentProps> = ({ chalText }) => {
  return (
    <>
      <div className="relative w-max h-max">
        <div className="backgroundComponents2 rounded-2xl p-5 purpleBar w-max h-max">
          <div className="flex flex-col gap-5 pl-5 pr-5 w-max h-max items-start">
            <div className="flex flex-col gap-1  w-full h-full">
              <div className="flex justify-between">
                <span className="secondColor text-xl rocky">
                  Proposta de Desafio
                </span>
                <button className="cursor-pointer">
                  <HelpIcon size="25" />
                </button>
              </div>
              <span className="primaryColor">{chalText}</span>
            </div>

            <div className="flex flex-col gap-4 h-max w-max">
              <span className="secondColor rocky">Envia sua resolução</span>
              <form className="inputForms" action="">
                <input type="text" name="chal" id="chal" />
              </form>
            </div>

            <div className="flex flex-col gap-5 h-full w-full items-end">
              <span className=" secondColor text-lg rocky">
                Resolva o desafio diretamente na nossa IDE online
              </span>
              <div className="flex gap-10 items-end">
                <Button text="IDE" width={110} height={40} />
                <Button text="Enviar Desafio" width={180} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChalField;
