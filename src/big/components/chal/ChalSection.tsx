import Button from "../Button";

interface levelProps {
  title: string;
  level: string;
  chal: string;
}

const ChalSection: React.FC<levelProps> = ({ title, level, chal }) => {
  return (
    <>
      <div className="flex flex-col gap-15 w-max h-max backgroundComponents p-[4%] rounded-2xl text-xl profileShadow">
        <div className="relative">
          <div className="w-full h-full ">
            <div className="flex justify-between font-semibold text-2xl backgroundComponents2  pl-[4%] pr-5 pt-5 pb-5 rounded-xl purpleBar ">
              <div className="flex secondColor gap-2.5">
                <span>Level {level}</span>
                <span>|</span>
                <span>{title}</span>
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
              <input
                className="flex bg-[#434249]  p-2.5 w-200  h-40 primaryColor"
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
    </>
  );
};
export default ChalSection;
