import Button from "../../components/button";
import Logo from "../../components/logo";
import "../../customClasses.css";

export default function InitialScreen() {
  return (
    <>
      <div className="w-screen h-30 flex justify-around items-center">
        <figure className="flex items-center gap-2">
          <Logo size={60} />
          <h1 className="primaryColor text-lg font-normal revalia">
            CodingQuest
          </h1>
        </figure>
        <div className="flex font-semibold items-center gap-5">
          <Button text="Entrar" width={100} height={40} />
          <span className="primaryColor text-xl">|</span>
          <button className=" font-bold primaryColor text-xl">Registrar</button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <figure className="flex center items-center">
          <Logo size={100}/>
          <span className="flex justify-center primaryColor font-medium text-3xl revalia pl-3">CondingQuest</span>
        </figure>

        <span className="roboto primaryColor text-2xl font-medium text-center">Desenvolva suas habilidades em programação de forma interativa,<br/> prática e divertida!!!</span>

        <span className="roboto secondColor text-xl">{"{Desafios do Inciante ao Avançado}"}</span>

        <Button text="Comece a Programar" width={320} height={50}/>
      </div>

    </>
  );
}
