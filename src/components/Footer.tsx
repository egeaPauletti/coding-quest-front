import LogoCQ from "./LogoCQ";

export default function Footer() {
  return (
    <footer className="w-full h-max flex flex-col justify-center items-center gap-5 glasseffect border-primary/40 border-t py-10">
      <a className="flex items-center">
        <figure className="flex items-center space-x-3 ">
          <LogoCQ size={60} />
          <div className="text-white text-lg ibm uppercase">CodingQuest</div>
        </figure>
      </a>
      <nav className="flex space-x-8 pl-[2%] 2xl:text-sm text-xs ">
        <a>
          <button className="text-white underlineAnimado cursor-pointer">
            Home
          </button>
        </a>
        <a>
          <button className="text-white underlineAnimado cursor-pointer">
            Sobre nós
          </button>
        </a>
        <a>
          <button className="text-white underlineAnimado cursor-pointer">
            Plataforma
          </button>
        </a>
        <a>
          <button className="text-white underlineAnimado cursor-pointer">
            Quem pode Jogar?
          </button>
        </a>
        <button className="text-white underlineAnimado cursor-pointer">
          Desenvolvedores
        </button>
      </nav>
      <span className="w-150 text-center text-sm text-white font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis expedita ullam, cupiditate sunt</span>
    </footer>
  )
}