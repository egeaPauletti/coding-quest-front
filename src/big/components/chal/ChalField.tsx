// import HelpIcon from "../icons/iconsSideBar/HelpIcon";

interface ComponentProps {
  chalText: string;
}

const ChalField: React.FC<ComponentProps> = ({ chalText }) => {
  return (
    <>
      <div className="w-max h-max relative">
        <div className="flex flex-col gap-8 backgroundComponents2 p-5 rounded-xl purpleBar">
          <div className="flex flex-col">
            <span className="secondColor rocky">Proposta de Desafio</span>
            <span className="primaryColor">//{chalText}</span>
          </div>
          <div className="flex flex-col gap-3 ">
            <span className="secondColor rocky">Envie sua resolução</span>
            <input
              className="flex bg-[#434249] w-160 h-40 primaryColor"
              type="text"
            />
            <span className="secondColor rocky">
              Resolva o desafio diretamente na nossa IDE online
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChalField;
