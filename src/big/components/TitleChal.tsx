interface ComponentProps {
  level: string;
  text: string;
  xp: string;
}
const TitleChal: React.FC<ComponentProps> = ({ level, text, xp }) => {
  return (
    <>
      <div className="relative">
        <div className="h-max m-max backgroundComponents2 pt-3 pb-3 pl-9 purpleBar rounded-2xl">
          <div className="flex secondColor font-bold text-2xl justify-between">
            <div className="flex gap-2.5">
              <span>{level}</span>
              <span>|</span>
              <span>{text}</span>
            </div>
            <div className="flex gap-1 pr-10">
              <span>{xp}</span>
              <span>XP</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TitleChal;
