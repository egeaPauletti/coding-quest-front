import "./chalBar.css";

const ChalBar = ({world, chal}:any) => {
    return (
        <div className="bg-gray-900 w-[1850px] h-[100px] rounded-lg flex flex-col gap-2 shadow-md ">
            <span className="text-white font-semibold">Desafio do Mundo: {world}</span>
            <span className="text-white font-semibold">Desafio Atual: {chal}</span>
        </div>
    )
}
export default ChalBar; 