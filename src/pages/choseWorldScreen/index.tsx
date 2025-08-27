import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/sideBar/SideBar";
import { WorldsDataSection } from "../../constants/constants";
import type { WorldsData } from "../../interfaces/interfaces";
import "./index.css";

const ChoseWorld: React.FC = () => {
  const WorldsData: WorldsData[] = WorldsDataSection;
  const [page, setPage] = useState(0); // Página atual
  const itemsPerPage = 5;

  // Pegamos os mundos da página atual
  const paginatedWorlds = WorldsData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <div className="w-screen h-screen flex justify-center items-center bgFourthColor">
      <div className="w-full h-full backgroundPixelado flex justify-center items-center absolute top-0 left-0 z-50"></div>
      <Sidebar />
      <div className="w-full h-full flex flex-col justify-center items-center gap-10 z-90">
        <div className="whiteColor bgThirdColor w-[25%] h-[5%] flex items-center justify-center text-xs 2xl:text-base font-semibold rounded-lg 2xl:rounded-xl">
          Escolha um mundo
        </div>

        <div className="flex w-[60%] h-[50%] 2xl:w-[60%] 2xl:h-[60%] gap-1">
          {paginatedWorlds.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center backgroundWorlds${item.id} animationDelayWorlds${item.id} w-1/4 h-full  sliderWorlds opacity-0 hover:px-[10%] relative`}
            >
              <div className="flex w-full h-full bg-black opacity-65 absolute"></div>
              <div className="flex flex-col gap-5 h-[70%] items-center z-100">
                <span className="primaryColor text-sm 2xl:text-base font-bold w-max">
                  Mundo {item.id}
                </span>
                <span className="whiteColor ibm text-xs 2xl:text-base opacity-70 2xl:opacity-100 w-[90%] text-center">
                  {item.worldName}
                </span>
              </div>
              <Link to={`/worlds/${item.id}`}>
                <Button label="Acessar" />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            label="Anterior"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          />
          <Button
            label="Proximo"
            onClick={() => setPage((prev) => Math.min(prev + 1, 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default ChoseWorld;
