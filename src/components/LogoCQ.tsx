import LogoIcon from "../assets/LogoCQ.png";
//
import type { IconsProps } from "../interfaces/interfaces";

const LogoCQ: React.FC<IconsProps> = ({ size }) => {
  return (
    <>
      <img
        style={{ width: size, height: size * 0.95 }}
        src={LogoIcon}
        alt="logo Coding Quest"
      />
    </>
  );
};
export default LogoCQ;
