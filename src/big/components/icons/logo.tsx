import LogoIcon from "../../../../public/logoImage/logo.png";

interface IconProps {
  size?: number;
}

const Logo: React.FC<IconProps> = ({ size }) => {
  return (
    <>
      <img
        style={{ width: size, height: size }}
        src={LogoIcon}
        alt="logo Coding Quest"
      />
    </>
  );
};
export default Logo;
