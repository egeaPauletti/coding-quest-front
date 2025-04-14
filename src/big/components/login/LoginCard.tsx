import { useState } from "react";
import Button from "../Button";
import Logo from "../icons/Logo";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function LoginCard() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="bg-[url(./public/background/backgroundLogin.png)] bg-repeat h-screen flex flex-col">
      <header className="pt-6 pl-6 pb-10 flex flex-row">

        <Logo size={40} />

        <div className="content-center pl-1.5">
          <h1 className="text-2xl text-white" >CodingQuest</h1>
        </div>

      </header>

      {isFlipped ?

        <div className="flex mx-auto w-[90%] max-w-[1200px] h-auto min-h-[600px] bg-[#fff] ring-[#3D3660] ring-2 shadow-2xl relative my-auto transition-all duration-500 ease-in-out">

          <div className="bg-[url(./public/background/backgroundLoginCard.png)] justify-center text-center w-[60%] pt-[10%] transition-all duration-500 ease-in-out">
            <div className="flex-col text-center p-6">
              <h1 className="gradientText text-transparent bg-clip-text text-4xl font-bold font-">Bem Vindo!</h1>

              <p className="font-medium text-white pt-2">Já tem possui uma conta no
                <span className="gradientText text-transparent bg-clip-text mr-2"> CodingQuest? </span>
                Faça seu login agora e venha acessar a nossa comunidade!
              </p>

            </div>


            <div className="pt-25">
              <Button text="Entrar" height={45} width={150} onClick={handleFlip} />
            </div>
          </div>

          <div className="w-[100%] justify-center text-center pt-[9%] pb-[5%] transition-all duration-500 ease-in-out">
            <div className="flex-col text-center p-6">

              <RegisterForm />

            </div>
          </div>
        </div>

        :

        <div className="flex mx-auto w-[90%] max-w-[1200px] h-auto min-h-[600px] bg-[#fff] ring-[#3D3660] ring-2 shadow-2xl relative my-auto transition-all duration-500 ease-in-out">
          <div className="w-[100%] justify-center text-center pt-[10%] pb-[5%] transition-all duration-500 ease-in-out">
            <LoginForm />
          </div>

          <div className="flex-col bg-[url(./public/background/backgroundLoginCard.png)] bg-cover w-[60%] pt-[10%] transition-all duration-500 ease-in-out">
            <div className="flex-col text-center p-6">
              <h1 className="gradientText text-transparent bg-clip-text text-4xl font-bold font-">Bem Vindo!</h1>

              <p className="font-medium text-white pt-2">Ainda não tem uma conta no
                <span className="gradientText text-transparent bg-clip-text mr-4"> CodingQuest? </span>
                Registre-se agora e venha fazer parte desse projeto!
              </p>

              <div className="pt-30">
                <Button text="Registre-se" height={45} width={150} onClick={handleFlip} />
              </div>

            </div>
          </div>



        </div>

      }
    </div>

  )
}