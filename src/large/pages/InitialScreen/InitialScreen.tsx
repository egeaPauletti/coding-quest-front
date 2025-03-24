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
          <Button text="Entrar" />
          <span className="primaryColor text-xl">|</span>
          <button className=" font-bold primaryColor text-xl">Registrar</button>
        </div>
      </div>
    </>
  );
}
