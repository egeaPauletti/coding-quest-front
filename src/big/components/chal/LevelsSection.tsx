import "../../customClasses.css";
import "../../pages/historyModeChalScreen/index.css";
import Button from "../Button";
import LevelBar from "./LevelBar";

export default function LevelsSection() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 w-max backgroundComponents  pt-[1.5%] pb-[1.5%] pl-[3.5%] pr-[2%] rounded-3xl profileShadow">
        <span className="secondColor text-xl font-bold">{"{1º Mundo}"}</span>
        <div className="relative">
          <div className="flex flex-col gap-5 sideLine">
            <LevelBar
              title="Hello World"
              level="Level 1"
              completed="{Concluido}"
            ></LevelBar>
            <LevelBar
              title="Hello World"
              level="Level 2"
              completed="{Concluido}"
            ></LevelBar>
            <LevelBar
              title="Hello World"
              level="Level 3"
              completed="{Concluido}"
            ></LevelBar>
            <LevelBar
              title="Hello World"
              level="Level 4"
              completed="{Concluido}"
            ></LevelBar>
            <LevelBar
              title="Hello World"
              level="Level 5"
              completed="{Concluido}"
            ></LevelBar>
            <LevelBar
              title="Hello World"
              level="Level 6"
              completed="{Concluido}"
            ></LevelBar>
            <LevelBar
              title="Hello World"
              level="Level 7"
              completed="{Concluido}"
            ></LevelBar>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <Button text="Ver Mundos" height={40} width={150}></Button>
        </div>
      </div>
    </>
  );
}
