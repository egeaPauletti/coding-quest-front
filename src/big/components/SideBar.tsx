import MapIcon from "../components/icons/iconsSideBar/MapIcon";
import CalendarIcon from "./icons/iconsSideBar/CalendarIcon";
import ConfigIcon from "./icons/iconsSideBar/ConfigIcon";
import HelpIcon from "./icons/iconsSideBar/HelpIcon";
import LeaderIcon from "./icons/iconsSideBar/LeaderIcon";
import Logo from "./icons/logo";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[7%] h-full backgroundComponents rounded-tl-2xl rounded-bl-2xl sideBarHover">
        <div className=" flex flex-col items-center justify-between h-[90%]">
          <div className="flex flex-col items-center gap-20 relative">
            <figure className="flex items-center titleHover">
              <Logo size={70} />
            </figure>
            <div className="flex flex-col items-center gap-5 relative">
              <button className="flex gap-7 items-center calendarHover">
                <CalendarIcon size="35" />
              </button>
              <button className="flex gap-7 items-center mapHover">
                <MapIcon size="35" />
              </button>
              <button className="flex gap-7 items-center leaderHover">
                <LeaderIcon size="35" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 relative">
            <figure className="flex gap-7 items-center helpHover">
              <HelpIcon size="35" />
            </figure>
            <figure className="flex gap-7 items-center settingsHover">
              <ConfigIcon size="25" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
