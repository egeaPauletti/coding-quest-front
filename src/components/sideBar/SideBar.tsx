import { motion } from "framer-motion";
import { useState } from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { TbHomeFilled, TbMapRoute } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import Option from "./Options";
import TitleSection from "./TitleSection";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-col items-center h-screen z-100 top-0 left-0">
      <motion.nav
        layout
        className="h-full w-50 border-r-1 border-[#ffffff20] p-2 gap-10 flex flex-col"
        style={{
          width: open ? "225px" : "fit-content",
          background: open ? "#1a1a1a" : "#1a1a1a80",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link to="/home">
          <TitleSection open={open} />
        </Link>

        <div className="flex flex-col justify-between items-start h-[80%] pl-2">
          <div className="flex flex-col items-start gap-5 text-2xl">
            <Link to="/home">
              <Option
                Icon={<TbHomeFilled />}
                title="Tela inicial"
                open={open}
                isCurrent={path === "/home"}
              />
            </Link>
            <Link to="/diarychal">
              <Option
                Icon={<LuCalendarDays />}
                title="Desafio diário"
                open={open}
                isCurrent={path === "/diarychal"}
              />
            </Link>
            <Link to="/campaign">
              <Option
                Icon={<TbMapRoute />}
                title="Modo campanha"
                open={open}
                isCurrent={path === "/campaign" || path.startsWith("/worlds/")}
              />
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 text-xl">
            <Option Icon={<FaCog />} title="Configurações" open={open} />
            <Option Icon={<FaSignOutAlt />} title="Sair" open={open} />
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
export default Sidebar;
