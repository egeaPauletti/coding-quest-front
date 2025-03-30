import ImageProfile from "../assets/Bear.png";

interface IconProps {
  size?: number;
}

const ProfileImg: React.FC<IconProps> = ({ size }) => {
  return (
    <>
      <img
        className="rounded-[500px]"
        style={{ width: size, height: size }}
        src={ImageProfile}
        alt="logo Coding Quest"
      />
    </>
  );
};
export default ProfileImg;
