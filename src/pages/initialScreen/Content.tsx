import Header from "../../components/Header";
import About from "./about";
import Developers from "./devs";
import Inital from "./initial";
import Plataform from "./plataform";
import ForPlayers from "./players";

export default function Content() {
  return (
    <div className="w-screen h-screen flex justify-center items-center backgroundHome">
      <Header />
      <div className="top-0 left-0 absolute z-49 h-screen w-screen flex justify-center items-center backgroundPixelado"></div>
      {/* Content */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden z-90">
        <Inital />
        <About />
        <Plataform />
        <ForPlayers />
        <Developers />
      </div >
    </div >
  );
}
