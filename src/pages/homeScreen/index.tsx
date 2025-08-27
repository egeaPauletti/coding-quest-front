import Sidebar from "../../components/sideBar/SideBar";
import "./index.css";

export default function HomeScreen() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bgFourthColor">
      <div className="w-full h-full backgroundPixelado flex justify-center items-center absolute top-0 left-0 z-50"></div>
      {/* {correção da sidebar} */}
      <div>
        <div className="opacity-0 z-50">
          <Sidebar />
        </div>
        <div className="absolute top-0 -left-1 z-100">
          <Sidebar />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="whiteColor">Em Desenvolvimento!!</div>
      </div>
    </div>
  );
}
