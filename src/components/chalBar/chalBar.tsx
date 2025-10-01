import "./chalBar.css";

const ChalBar = ({world, chal}:any) => {
    return (
        <>
            <div className="bg-[#1e1e1e] w-full h-[100px] rounded-lg flex flex-col gap-2 shadow-md p-5 fixed start-19 top-1">
                <span className="text-white font-semibold">Desafio do Mundo: {world}</span>
                <span className="text-white font-semibold">Desafio Atual: {chal}</span>
                <div className="flex fixed justify-between end-0 mr-10 bg-white rounded-lg w-[200px] h-[40px] justify-center">
                    <button className="cursor-pointer">Desafio anterior</button>
                </div>
                <div className="flex fixed justify-between end-0 mr-100 bg-white rounded-lg w-[200px] h-[40px] justify-center">
                    <button className="cursor-pointer">proximo desafio</button>
                </div>
            </div>

            <div className="bg-[#242424] text-gray-300 w-full h-[60px] rounded-lg flex flex-row gap-2 shadow-md p-5 fixed start-19 top-25 mt-1  items-center">
                <span className="">selecione uma linguagem:</span>
                <button className="bg-blue-600 w-[150px] h-[40px] rounded-lg cursor-pointer text-white font-semibold">liguagem</button>
                
            </div>
        </>

        
    )
}
export default ChalBar; 