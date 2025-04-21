import "./index.css";
import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import ProfileBar from "../../components/chal/ProfileBar";
import ProfileImg from "../../components/chal/profileImg";
import ChalSection from "../../components/chal/ChalSection";
import LevelsSection from "../../components/chal/LevelsSection";

export default function HistoryModeChalScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-[95%] h-[90%] items-center rounded-3xl backgroundColor gap-20  profileShadow relative">
          <div>
            <SideBar />
          </div>
          <div className="flex w-[90%] h-[100%] items-center justify-center">
            <div className=" flex w-[100%] h-[100%] justify-around">
              <div className="flex flex-col h-[100%] justify-around">
                <div className="w-max h-max relative top-[1%]">
                  <ProfileBar
                    profileFoto={() => <ProfileImg size={40} />}
                    username="JorginCodigos"
                    level="Lvl 12"
                    xpTotal={300}
                    userXp={150}
                  />
                </div>
                <div className="flex relative -top-[2%] gap-15 items-center">
                  <ChalSection />
                  <LevelsSection></LevelsSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
