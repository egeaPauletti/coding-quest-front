import "./index.css";
import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import ProfileBar from "../../components/ProfileBar";
import ProfileImg from "../../components/profileImg";
import ChalSection from "../../components/ChalSection";

export default function HistoryModeScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen ">
        <div className="flex w-[95%] h-[90%] items-center justify-center rounded-3xl backgroundColor gap-20  profileShadow relative">
          <SideBar />
          <div className="flex flex-col gap-10 relative left-[5%]">
            <div className="w-max h-max">
              <ProfileBar
                profileFoto={() => <ProfileImg size={40} />}
                username="JorginCodigos"
                level="Lvl 12"
                xpTotal={300}
                userXp={150}
              />
            </div>
            <div className="flex gap-15">
              <div className="w-max h-max">
                <ChalSection />
              </div>
              <div className="w-100 h-153 backgroundComponents rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
