import CodeEditor from "../../components/IDEdiaryChal/CodeEdit";
import Sidebar from "../../components/sideBar/SideBar";


const DiaryChal: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bgFourthColor">
      {/* {correção da sidebar} */}
      <div>
        <div className="opacity-0 z-50">
          <Sidebar />
        </div>
        <div className="absolute top-0 -left-1 z-100">
          <Sidebar />
        </div>
      </div>
      <CodeEditor />
    </div>
  );
};
export default DiaryChal;
