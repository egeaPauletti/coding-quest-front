import Slider from "react-slick"; // npm install slick-carousel react-slick e npm install --save-dev @types/react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button";
import blockedIcon from "/src/big/assets/icons/blocked.png";
import "../../customClasses.css";
import { Link } from "react-router-dom";

interface WorldsMapProps {
  completedWorlds: number;
}

const WorldsMap: React.FC<WorldsMapProps> = ({ completedWorlds }) => {
  // quando criar a API usar os dados da API

  const worlds = [
    { id: 1, title: "O Começo", description: "Introdução à programação" },
    {
      id: 2,
      title: "Estruturas de Controle",
      description: "Condicionais e loops",
    },
    { id: 3, title: "Funções e Objetos", description: "Abstração de código" },
    {
      id: 4,
      title: "Estruturas de Dados",
      description: "Arrays, listas e dicionários",
    },
    { id: 5, title: "Algoritmos", description: "Busca, ordenação e recursão" },
  ];

  // slider config

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex  flex-col max-w-6xl mx-auto p-6 gap-16">
      <div className="text-center mb-8 h-23">
        <h2 className="text-2xl font-bold text-white mb-2 h-">Modo Campanha</h2>
        <p className="text-white text-base">
          Selecione um mundo e resolva seus desafios!
        </p>
      </div>
      <div className="px-10 h-70">
        <Slider {...sliderSettings}>
          {worlds.map((world) => {
            const isUnlocked = completedWorlds - 1 >= world.id - 1;

            return (
              <div key={world.id} className="px-2 focus:outline-none">
                <div
                  className={`
                    mx-auto shadow-md transition-all duration-300
                    flex flex-col items-center text-center p-6
                    border-1 ${
                      isUnlocked
                        ? "cursor-pointer hover:scale-[1.03] border-[#24C97B]"
                        : "border-transparent"
                    }
                  `}
                  style={{
                    width: "280px", // Ligeiramente menor para melhor visualização
                    height: "200px",
                    borderRadius: "20px",
                    backgroundColor: "#232429",
                  }}
                >
                  <div className="font-bold mb-2 text-[#24C97B]">
                    {world.id}° Mundo
                  </div>
                  {isUnlocked ? (
                    <>
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        {world.title}
                      </h3>
                      <p className="text-gray-300 mb-4 px-4">
                        {world.description}
                      </p>
                      <Link to="/historyChal">
                        <Button text="Entrar" height={32.2} width={120} />
                      </Link>
                    </>
                  ) : (
                    <div className="mt-4 flex flex-col items-center justify-center h-full">
                      <img
                        src={blockedIcon}
                        alt="Mundo bloqueado"
                        className="w-16 h-16 mb-3 object-contain"
                      />
                      <p className="text-sm text-gray-400">
                        Complete o mundo anterior para desbloquear
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default WorldsMap;
