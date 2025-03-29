export default function Login() {

  return (
    <div className="bg-[url(./public/background/backgroundLogin.png)] bg-cover h-screen">
      <header className="pt-6 pl-6 pb-10 flex flex-row">

        <img src="./public/logoImage/LogoCodingQuest.png" alt="" className="w-60px h-60px" />

        <div className="content-center pl-1.5">
          <h1 className="text-2xl text-white" >CodingQuest</h1>
        </div>

      </header>

      <div className="flex mx-auto w-[1200px] h-[600px] bg-[#fff] ring-[#3D3660] ring-2 shadow-2xl">
        <div className="pl-[750px]">
          <h1></h1>
        </div>


        <div className="flex-col bg-[rgb(61,54,96)] pt-[150px] ">
          <div className="flex-col text-center p-6">

            <h1 className="bg-gradient-to-r from-[#FFB24E] via-[#D1768A] to-[#7703FF] text-transparent bg-clip-text text-4xl font-bold font-">Bem Vindo!</h1>
            <p className="font-medium text-white pt-2">Ainda não tem uma conta no
              <span className="bg-gradient-to-r from-[#FFB24E] via-[#D1768A] to-[#7703FF] text-transparent bg-clip-text mr-2"> CondingQuest? </span>
              Registre-se agora e venha fazer parte desse projeto!
            </p>

            <div className="pt-6">
              <button className="text-center text-white border-l-1 border-r-1 border-b-4 border-[#4A3DF9] rounded-[10px] bg-[#6C62FF] w-[150px] h-[45px] hover:bg-[#4f48b3] hover:border-none"> Registrar </button>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}