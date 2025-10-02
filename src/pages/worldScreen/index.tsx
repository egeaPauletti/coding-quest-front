import CodeEditor from "../../components/IDE/CodeEdit";
import Sidebar from "../../components/sideBar/SideBar";

const WorldScreen: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bgFourthColor">
      <div className="opacity-0 z-50">
        <Sidebar />
      </div>
      <div className="absolute top-0 -left-1 z-100">
        <Sidebar />
      </div>
      <div className="w-full h-full backgroundPixelado flex justify-center items-center absolute top-0 left-0 z-50"></div>
      <CodeEditor />
    </div>
  );
};
export default WorldScreen;
