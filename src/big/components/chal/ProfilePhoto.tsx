interface IconProps {
  component: React.ComponentType;
}

const ProfilePhoto: React.FC<IconProps> = ({ component: ImgComponent }) => {
  return (
    <>
      <div>
        <div>
          <ImgComponent />
        </div>
      </div>
    </>
  );
};
export default ProfilePhoto;
