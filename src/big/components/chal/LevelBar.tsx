import "../../customClasses.css";

interface LevelProps {
  level: string;
  title: string;
  completed?: string;
}

const LevelBar: React.FC<LevelProps> = ({ level, title, completed }) => {
  return (
    <>
      <div className="relative">
        <div className="levelTrace cursor-pointer">
          <div className="w-80 bg-[#2C2D32] pt-[1.5%] pb-[1.5%]  pl-[5%] pr-[4%] rounded-xl purpleBar hoverLevel">
            <div className="flex items-center justify-between">
              <div className="flex flex-col primaryColor text-start">
                <span className="font-semibold text-sm">{level}</span>
                <span className="font-bold text-sm">{title}</span>
              </div>
              <span className="secondColor text-sm">{completed}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LevelBar;
