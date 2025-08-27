import React, { useEffect, useState } from "react";
import LoginField from "../../components/AuthScreen/LoginField";
import RegiserField from "../../components/AuthScreen/RegisterField";
import Button from "../../components/Button";
import { FloatingSquares } from "../../components/FloatingSquares";
import LogoCQ from "../../components/LogoCQ";
import "./index.css";

const AuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  //
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const endpoint = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    if (endpoint == "login") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [endpoint]);

  return (
    <div className="backgroundAuth w-screen h-screen">
      <div className="top-0 left-0 absolute z-1 h-screen w-screen flex justify-center items-center backgroundPixelado"></div>
      <div className="z-100 relative">
        <div className={`main-container ${isLogin ? "" : "right-active"}`}>
          <div className="slider-panel gap-[10%] flex justify-center items-center">
            <FloatingSquares isLogin />
            <div className="flex flex-col justify-center items-center gap-15 p-10 glasseffect relative -top-[10%]">
              <div className="bgSecondColor p-2 rounded-2xl">
                <LogoCQ size={70} />
              </div>
              <div className="flex flex-col gap-10 items-center">
                <h1 className="ibm text-xl">
                  {isLogin ? "Ainda não tem uma conta?" : "Já tem uma conta?"}
                </h1>
                <p className="text-lg roboto">
                  {isLogin ? (
                    <>
                      faça seu cadastro na{" "}
                      <span className="primaryColor">coding quest</span>
                      <br /> e começe a evoluir suas habilidades
                    </>
                  ) : (
                    <>
                      faça seu login na{" "}
                      <span className="primaryColor">coding quest</span>
                      <br /> e volte a evoluir suas habilidades
                    </>
                  )}
                </p>
              </div>
              <button onClick={() => setIsLogin((prev) => !prev)}>
                {isLogin ? (
                  <Button label="Registrar" />
                ) : (
                  <Button label="Entrar" />
                )}
              </button>
            </div>
          </div>
          <div>{isLogin ? <LoginField /> : <RegiserField />}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
