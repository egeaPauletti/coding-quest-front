import "./index.css";
import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import ProfileBar from "../../components/chal/ProfileBar";
import ProfileImg from "../../components/chal/profileImg";
import ChalSection from "../../components/chal/ChalSection";

export default function HistoryModeChalScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-[95%] h-[90%] justify-center  items-center rounded-3xl backgroundColor gap-20  profileShadow relative">
          <div>
            <SideBar />
          </div>
          <div className="flex w-[90%] h-[100%] items-center justify-center">
            <div className=" flex w-[100%] h-[100%] justify-around items-center">
              <div className="flex flex-col h-[100%] justify-around">
                <div className="w-max h-max">
                  <ProfileBar
                    profileFoto={() => <ProfileImg size={40} />}
                    username="JorginCodigos"
                    level="Lvl 12"
                    xpTotal={300}
                    userXp={150}
                  />
                </div>
                <div className="relative -top-[3%]">
                  <ChalSection />
                </div>
              </div>
              <div className="bg-black w-120 h-170 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
