interface ComponentProps {
  day?: string;
  number?: string;
  today: boolean;
  dayt?: string;
  numbert?: string;
}

const Calen: React.FC<ComponentProps> = ({
  today,
  day,
  number,
  dayt,
  numbert,
}) => {
  return (
    <>
      {today ? (
        <div className="p-[2.5%] backgroundComponents  gap-2 text-white font-bold text-xl rounded-xl flex flex-col items-center shadow-md">
          <h1 className="text-sm">{dayt}</h1>
          <span className="text-2xl">{numbert}</span>
        </div>
      ) : null}

      <div className="p-[2.5%] rounded-xl hover:bg-[#232429] text-white font-bold   text-xl flex flex-col gap-2 items-center">
        <h1 className="text-sm">{day}</h1>
        <span className="text-2xl">{number}</span>
      </div>
    </>
  );
};
export default Calen;
