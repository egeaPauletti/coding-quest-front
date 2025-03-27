import "./index.css";
import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import ProfileBar from "../../components/ProfileBar";
import ProfileImg from "../../components/profileImg";

export default function HistoryModeScreen() {
  return (
    <>
      <div className="flex  items-center justify-center w-screen h-screen">
        <div className="flex w-[95%] h-[90%] rounded-3xl backgroundColor gap-20">
          <SideBar />
          <div>
            <ProfileBar
              profileFoto={() => <ProfileImg size={40} />}
              username="Username"
              level="Lvl 12"
              xpTotal={300}
              userXp={150}
            />
          </div>
        </div>
      </div>
    </>
  );
}
