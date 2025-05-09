import "../../customClasses.css";

interface ComponentProps {
  profileFoto: React.ComponentType;
  username: string;
  level: string;
  xpTotal: number;
  userXp: number;
}

const ProfileBar: React.FC<ComponentProps> = ({
  profileFoto: ImgComponent,
  username,
  level,
  xpTotal,
  userXp,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center rounded-2xl backgroundComponents pl-7 pr-10 pt-2.5 pb-5 profileShadow">
        <div className="flex flex-col h-auto w-auto gap-2.5">
          <div className="flex h-auto w-auto items-center gap-2">
            <ImgComponent />
            <div className="flex flex-col primaryColor font-semibold w-full h-full items-start">
              <span className="text-xl">{username}</span>
              <span className="text-sm flex gap-2 items-center justify-center">
                {level}
                <div className="">
                  {userXp}
                  <span>/</span>
                  {xpTotal}
                </div>
              </span>
            </div>
          </div>
          <div className="levelBar relative">
            <div className="bg-white w-80  h-0.5 rounded-4xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
