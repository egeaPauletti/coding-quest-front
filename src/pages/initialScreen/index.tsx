import { useEffect, useState } from "react";
import Content from "./Content";
import "./index.css";
import PreLoader from "./preLoader";

function renderLoader() {
  return <PreLoader />;
}

function renderContent() {
  return <Content />;
}

const InitialScreen = () => {
  const [preLoaderAtivo, setPreLoaderAtivo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoaderAtivo(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return <>{preLoaderAtivo ? renderLoader() : renderContent()}</>;
};
export default InitialScreen;
