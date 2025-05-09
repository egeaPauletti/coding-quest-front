import "../../customClasses.css";
import SideBar from "../../components/SideBar";
import WorldsMap from "../../components/chal/ChalWorlds";

export default function HistoryModeScreen() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-[95%] h-[90%] justify-center  items-center rounded-3xl backgroundColor gap-20  profileShadow relative">
          <div>
            <SideBar />
          </div>
          <div className="flex items-center justify-center">
            <div className=" flex w-[100%] h-[100%] justify-around items-center">
              <div className="flex flex-col h-[100%] justify-around">
                <div className="w-max h-max"></div>
                <div>
                  <WorldsMap completedWorlds={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
