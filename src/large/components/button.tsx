import "../customClasses.css";

interface textProps {
  text: string;
}
const Button: React.FC<textProps> = ({ text }) => {
  return (
    <>
      <button className="primaryColor text-xl buttonsBackground">{text}</button>
    </>
  );
};

export default Button;
