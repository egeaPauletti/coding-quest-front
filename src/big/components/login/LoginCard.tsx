import Button from "../Button";
import Logo from "../icons/Logo";
import LoginForm from "./LoginForm";

export default function LoginCard() {

  return (
    <div className="bg-[url(./public/background/backgroundLogin.png)] bg-repeat min-h-screen">
      <header className="pt-6 pl-6 pb-10 flex flex-row">

        <Logo size={40} />

        <div className="content-center pl-1.5">
          <h1 className="text-2xl text-white" >CodingQuest</h1>
        </div>

      </header>

      <div className="flex mx-auto w-[90%] max-w-[1200px] h-auto  min-h-[600px] bg-[#fff] ring-[#3D3660] ring-2 shadow-2xl relative mb-20">
        <div className="w-[100%] justify-center text-center pt-[10%]">
          <LoginForm />
        </div>


        <div className="flex-col bg-[url(./public/background/backgroundLoginCard.png)] bg-cover pt-[140px] w-[60%]">
          <div className="flex-col text-center p-6">

            <h1 className="gradientText text-transparent bg-clip-text text-4xl font-bold font-">Bem Vindo!</h1>
            <p className="font-medium text-white pt-2">Ainda não tem uma conta no
              <span className="gradientText text-transparent bg-clip-text mr-2"> CondingQuest? </span>
              Registre-se agora e venha fazer parte desse projeto!
            </p>

            <div className="pt-25">
              <Button text="Registre-se" height={45} width={150} />
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}