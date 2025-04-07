import "./index.css";
import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import ProfileBar from "../../components/chal/ProfileBar";
import ProfileImg from "../../components/chal/profileImg";
import ChalSection from "../../components/chal/ChalSection";

export default function HistoryModeScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-[95%] h-[90%] justify-center  items-center rounded-3xl backgroundColor gap-20  profileShadow relative">
          <SideBar />
          <div className=" flex flex-col gap-10">
            <div className="w-max h-max">
              <ProfileBar
                profileFoto={() => <ProfileImg size={40} />}
                username="JorginCodigos"
                level="Lvl 12"
                xpTotal={300}
                userXp={150}
              />
            </div>
            <ChalSection />
          </div>
        </div>
      </div>
    </>
  );
}
