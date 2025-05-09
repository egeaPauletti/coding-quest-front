import Button from "../Button";

export default function RegisForm() {
  return <div className="flex-col">
    <div>
      <h1 className="gradientText text-4xl font-bold pb-2">Registre sua conta</h1>
      <h2 className="text-[#989898]">registre-se via</h2>
    </div>

    <div className="flex flex-row justify-center items-center p-4 gap-4">
      <a href=""><img src="../../../../public/icons/googleIcon.png" className="w-auto" /></a>
      <a href=""><img src="../../../../public/icons/githubIcon.png" className="w-auto" /></a>
    </div>

    <form action="" className="pt-4 flex flex-col justify-center items-center font-bold">
      <input
        type="text"
        className="w-[80%] h-14 px-6 py-2 bg-[#D9D9D9] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7703FF] mb-6 placeholder-[#989898]"
        placeholder="Usuário"
        required
      />
      <input
        type="password"
        className="w-[80%] h-14 px-6 py-2 bg-[#D9D9D9] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7703FF] placeholder-[#989898]"
        placeholder="Senha"
        required
      />
      <div className="pt-5">
        <Button text="Registrar" width={150} height={45} />
      </div>

    </form>

  </div>
}