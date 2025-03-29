import ChalField from "./ChalField";
import TitleChal from "./TitleChal";

export default function ChalSection() {
  return (
    <>
      <div className="flex flex-col gap-20 w-max h-max">
        <div className="flex flex-col backgroundComponents p-10 gap-10 rounded-3xl profileShadow">
          <div className="">
            <TitleChal level="Level 1" text="Hello World!!" xp="30" />
          </div>
          <ChalField chalText="// Faça um algortimo que imprima na tela mesagem: Hello World!!!" />
        </div>
      </div>
    </>
  );
}
