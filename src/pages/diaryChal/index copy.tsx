import CodeEditor from "../../components/IDE/CodeEdit";
import Sidebar from "../../components/sideBar/SideBar";

const DiaryChal: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bgFourthColor">
      <Sidebar />
      <CodeEditor />
    </div>
  );
};
export default DiaryChal;
