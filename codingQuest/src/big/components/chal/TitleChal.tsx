interface ComponentProps {
  level: string;
  text: string;
  xp: number;
}
const TitleChal: React.FC<ComponentProps> = ({ level, text, xp }) => {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="flex justify-between font-semibold text-xl backgroundComponents2  pl-5 pr-5 pt-2.5 pb-2.5 rounded-xl purpleBar">
          <div className="flex secondColor gap-2.5">
            <span>{level}</span>
            <span>|</span>
            <span>{text}</span>
          </div>
          <span className="secondColor">{xp} XP</span>
        </div>
      </div>
    </>
  );
};
export default TitleChal;
