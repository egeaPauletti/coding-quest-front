import { Link } from "react-router-dom";
import Button from "./Button";
import LogoCQ from "./LogoCQ";

export default function Header() {
  return (
    <header className="fixed w-full h-max py-5 z-100 top-0 bg-black/20 flex items-center justify-around shadow-xl">
      <a className="flex items-center">
        <figure className="flex items-center space-x-3 ">
          <LogoCQ size={50} />
          <div className="text-white text-lg ibm uppercase">CodingQuest</div>
        </figure>
      </a>
      <nav className="flex space-x-8 pl-[2%] 2xl:text-sm text-xs ">
        <a href="#initial">
          <button className="text-white underlineAnimado cursor-pointer">
            Home
          </button>
        </a>
        <a href="#about">
          <button className="text-white underlineAnimado cursor-pointer">
            Sobre nós
          </button>
        </a>
        <a href="#plataform">
          <button className="text-white underlineAnimado cursor-pointer">
            Plataforma
          </button>
        </a>
        <a href="#forPlayers">
          <button className="text-white underlineAnimado cursor-pointer">
            Quem pode Jogar?
          </button>
        </a>
        <a href="#developers">
          <button className="text-white underlineAnimado cursor-pointer">
            Desenvolvedores
          </button>
        </a>
      </nav>
      <div className="flex items-center gap-5">
        <Link to={"/login"}>
          <Button label="Entrar" />
        </Link>
        <Link to={"/register"}>
          <Button label="Registrar" filled />
        </Link>
      </div >
    </header >
  );
}
