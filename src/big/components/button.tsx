import "../customClasses.css";

interface textProps {
  text: string;
  width: number;
  height: number;
}
const Button: React.FC<textProps> = ({ text, height, width }) => {
  return (
    <>
      <button
        style={{ width: width, height: height }}
        className={"primaryColor font-semibold text-xl buttonsBackground"}
      >
        {text}
      </button>
    </>
  );
};

export default Button;