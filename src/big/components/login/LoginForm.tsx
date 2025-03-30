import Button from "../Button";

export default function LoginForm() {
  return <div className="flex-col">
    <div>
      <h1 className="gradientText text-2xl font-bold ">Acesse sua conta</h1>
      <h2 className="text-[#989898]">registre-se via</h2>
    </div>

    <div className="flex flex-row justify-center items-center pt-4 gap-4">
      <a href=""><img src="../../../../public/icons/githubIcon.png" className="w-auto" /></a>
      <a href=""><img src="../../../../public/icons/googleIcon.png" className="w-auto" /></a>
    </div>

    <h2 className="text-[#989898]">ou</h2>

    <form action="" className="pt-4 flex flex-col justify-center items-center">
      <input
        className="w-[80%] h-14 px-6 py-2 bg-[#D9D9D9] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7703FF] mb-6"
        placeholder="Usuário"
        required
      />
      <input
        className="w-[80%] h-14 px-6 py-2 bg-[#D9D9D9] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7703FF] mb-12"
        placeholder="Senha"
        required
      />

      <Button text="Entrar" width={150} height={45} />
    </form>

  </div>
}