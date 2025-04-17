interface ComponentProps {
    day: string;
    number: string;
    today: boolean;
    dayt: string;
    numbert: string;
}

const Calen:  React.FC<ComponentProps>=({
    today,
    day,
    number,
    dayt,
    numbert,
}) =>{
    return(
      <>
        {today ? (
            <div className="w-[40px] h-[60px] bg-zinc-800 text-white font-bold text-base flex flex-col items-center shadow-md">
            <h1 className="flex-col">{dayt}</h1>
            <span className="flex-col">{numbert}</span>
            </div>
        ) : null}
        
        <div className="w-[40px] h-[60px] text-white font-bold text-base flex flex-col items-center">
            <h1 className="flex-col">{day}</h1>
            <span className="flex-col">{number}</span>
        
        </div>
      </>
  )

    

}
export default Calen;


    
