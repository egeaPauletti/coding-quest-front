import { Link } from "react-router-dom";
import Button from "./Button";
import LogoCQ from "./LogoCQ";

export default function Header() {
  return (
    <header className="w-full h-16 pb-2 bg-primaryColor flex items-center justify-around rounded-lg shadow-xl">
      <Link to={"/"} className="flex items-center">
        <figure className="flex items-center space-x-3 ">
          <LogoCQ size={50} />
          <div className="text-white text-lg ibm uppercase">CodingQuest</div>
        </figure>
      </Link>
      <nav className="flex space-x-8 pl-[2%] 2xl:text-sm text-xs ">
        <Link to={"/"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Home
          </button>
        </Link>
        <Link to={"/about"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Sobre nós
          </button>
        </Link>
        <Link to={"/"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Plataforma
          </button>
        </Link>
        <Link to={"/"}>
          <button className="text-white underlineAnimado cursor-pointer">
            Quem pode Jogar?
          </button>
        </Link>
        <button className="text-white underlineAnimado cursor-pointer">
          Desenvolvedores
        </button>
      </nav>
      <div className="flex items-center gap-5">
        <Link to="/login">
          <Button label="Entrar" />
        </Link>
        <Link to="/register">
          <Button label="Registrar" filled />
        </Link>
      </div>
    </header>
  );
}
