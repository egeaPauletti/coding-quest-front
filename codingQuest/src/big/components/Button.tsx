import "../customClasses.css";

interface ButtonProps {
  text: string;
  width: number;
  height: number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  height,
  width,
  onClick,
  type = "button"
}) => {
  return (
    <button
      type={type}
      style={{ width: width, height: height }}
      className={"primaryColor font-semibold text-xl buttonsBackground"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
