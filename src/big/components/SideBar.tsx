import { Link } from "react-router-dom";
import MapIcon from "./icons/iconsSideBar/MapIcon";
import Logo from "./icons/logo";
import LeaderIcon from "./icons/iconsSideBar/LeaderIcon";
import CalendarIcon from "./icons/iconsSideBar/CalendarIcon";
import HelpIcon from "./icons/iconsSideBar/HelpIcon";
import ConfigIcon from "./icons/iconsSideBar/ConfigIcon";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[7%] h-full backgroundComponents rounded-tl-2xl rounded-bl-2xl sideBarHover">
        <div className=" flex flex-col items-center justify-between h-[90%]">
          <div className="flex flex-col items-center gap-20 relative">
            <Link to="/choseMode">
              <figure className="flex items-center titleHover">
                <Logo size={70} />
              </figure>
            </Link>
            <div className="flex flex-col items-center gap-5 relative">
              <Link to="/diaryChal">
                <button className="flex gap-7 items-center calendarHover">
                  <CalendarIcon size="35" />
                </button>
              </Link>
              <Link to="/historyMode">
                <button className="flex gap-7 items-center mapHover">
                  <MapIcon size="35" />
                </button>
              </Link>
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
