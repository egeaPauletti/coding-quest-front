import { useState } from "react";
import GitHubIcon from "../icons/iconsAuth/GithubIcon";
import GoogleIcon from "../icons/iconsAuth/GoogleIcon";
import { Link } from "react-router-dom";

export default function RegiserField() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  return (
    <div className="absolute w-6/10 h-full  flex flex-col gap-10 justify-center items-center animationFadeInAuth whiteColor">
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="ibm font-semibold 2xl:text-3xl text-2xl">
          Cadastre-se para começar!!
        </span>
        <span className="2xl:text-sm text-xs opacity-50 font-semibold ibm">
          crie sua conta de graça
        </span>
      </div>
      <div>
        <form className="flex flex-col justify-center items-center 2xl:gap-7.5 gap-5">
          <div>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="2xl:w-150 2xl:h-13 w-110 h-11 flex items-center px-4 rounded-xl border border-stone-400 text-sm outline-[#2ea98c] bg-[#7070709e]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="2xl:w-150 2xl:h-13 w-110 h-11 flex items-center px-4 rounded-xl border border-stone-400 text-sm outline-[#2ea98c] bg-[#7070709e]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="2xl:w-150 2xl:h-13 w-110 h-11 flex items-center px-4 rounded-xl border border-stone-400 text-sm outline-[#2ea98c] bg-[#7070709e]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confimar senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="2xl:w-150 2xl:h-13 w-110 h-11 flex items-center px-4 rounded-xl border border-stone-400 text-sm outline-[#2ea98c] bg-[#7070709e]"
            />
          </div>
          <div className="mt-5"></div>
        </form>
        <div className="flex flex-col justify-center items-center gap-7.5">
          <div className="flex flex-col justify-center items-center 2xl:gap-2">
            <div className="flex items-center gap-5">
              <hr className="2xl:w-65 2xl:h-0.5 w-45 h-0.5 primaryColor bgPrimaryColor" />
              <span className="primaryColor font-bold text-lg">ou</span>
              <hr className="2xl:w-65 2xl:h-0.5 w-45 h-0.5 primaryColor bgPrimaryColor" />
            </div>
            <span className="text-sm opacity-50 font-semibold">acesse via</span>
          </div>
          <div className="flex gap-10 items-center justify-center">
            <button className="bg-[#2ea98ca9] rounded-lg 2xl:p-2.5 p-1.5  hover:opacity-70 cursor-pointer">
              <GoogleIcon size={20} />
            </button>
            <button className="bg-[#2ea98ca9] rounded-lg 2xl:p-2.5 p-1.5 hover:opacity-70 cursor-pointer">
              <GitHubIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      <Link to={"/home"}>
        <button className="relative cursor-pointer 2xl:py-[1.5%] 2xl:px-70 text-center font-barlow inline-flex justify-center 2xl:text-base text-sm px-50 py-[2.5%] text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4  focus:outline-[#2ea98c] focus:outline-offset-4 overflow-hidden hover:opacity-75 bg-[#2ea98c]">
          <span className="relative z-20 font-semibold">Registrar</span>
          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#2ea98c] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </button>
      </Link>
    </div>
  );
}
