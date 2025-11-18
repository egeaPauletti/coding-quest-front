import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/sideBar/SideBar";
import { WorldsDataSection } from "../../constants/constants";
import type { WorldsData } from "../../interfaces/interfaces";
import PlanetIcon from "./PlanetIcon";

const ChoseWorld: React.FC = () => {
  const WorldsData: WorldsData[] = WorldsDataSection;
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionDurationMs = 300;
  const transitionTimeoutRef = useRef<number | null>(null);

  const paginatedWorlds = useMemo(
    () => WorldsData.slice(page * itemsPerPage, (page + 1) * itemsPerPage),
    [WorldsData, page, itemsPerPage]
  );
  const totalPages = useMemo(
    () => Math.ceil(WorldsData.length / itemsPerPage),
    [WorldsData.length, itemsPerPage]
  );

  useEffect(() => {
    setVisibleCards([]);
    const timers = paginatedWorlds.map((_, idx) =>
      setTimeout(() => {
        setVisibleCards((prev) =>
          prev.includes(idx) ? prev : [...prev, idx]
        );
      }, idx * 140)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [paginatedWorlds]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const handlePageChange = (targetPage: number) => {
    if (
      targetPage < 0 ||
      targetPage >= totalPages ||
      targetPage === page ||
      isTransitioning
    ) {
      return;
    }

    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    setVisibleCards([]);
    setIsTransitioning(true);
    transitionTimeoutRef.current = window.setTimeout(() => {
      setPage(targetPage);
      setIsTransitioning(false);
    }, transitionDurationMs);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center backgroundStared">
      <Sidebar />
      <div className="w-full h-full flex flex-col justify-center items-center gap-10 z-[60]">
        <div className="whiteColor flex items-center justify-center text-2xl xl:text-base font-semibold rounded-lg 2xl:rounded-xl">
          <h1 className="text-center text-4xl font-bold">Escolha um mundo</h1>
        </div>

        <div
          className={`flex flex-wrap justify-center w-full max-w-6xl px-4 gap-4 md:gap-6 transition-opacity ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDuration: `${transitionDurationMs}ms` }}
        >
          {paginatedWorlds.map((item, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={item.id}
                className={`group relative flex h-[360px] w-[260px] flex-col items-center justify-between gap-5 rounded-3xl border p-6 text-center backdrop-blur-sm transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_35px_90px_rgba(10,10,10,0.55)] md:h-[380px] md:w-[280px] ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                <PlanetIcon
                  waterColor={item.waterColor}
                  landColor={item.landColor}
                  rotationDurationMs={item.rotationDurationMs}
                  rotationDirection={item.rotationDirection}
                  rotationOffsetDeg={item.rotationOffsetDeg}
                  continentSeed={item.continentSeed}
                  continentCount={item.continentCount}
                />

                <div className="space-y-2">
                  <span className="primaryColor text-sm uppercase tracking-[0.2em]">
                    Mundo {item.id}
                  </span>
                  <p className="whiteColor ibm text-base font-semibold leading-snug">
                    {item.worldName}
                  </p>
                </div>

                <Link className="z-10" to={`/worlds/${item.id}`}>
                  <Button label="Acessar" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            label="Anterior"
            onClick={() => handlePageChange(page - 1)}
          />
          <Button
            label="Proximo"
            onClick={() => handlePageChange(page + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChoseWorld;
