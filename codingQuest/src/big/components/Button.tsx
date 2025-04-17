import "../customClasses.css";

interface textProps {
  text: string;
  width: number;
  height: number;
  onClick?: () => void;
}
const Button: React.FC<textProps> = ({ text, height, width, onClick }) => {
  return (
    <>
      <button
        style={{ width: width, height: height }}
        className={"primaryColor font-semibold text-xl buttonsBackground"}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;