import { motion } from "framer-motion";
import type { OptionProps } from "../../interfaces/interfaces";

const Option = ({ Icon, title, open, isCurrent }: OptionProps) => {
  return (
    <div className="whiteColor">
      <motion.button
        layout
        className={` flex h-10 w-full items-center cursor-pointer hover:text-[#2ea98c]  ${
          isCurrent ? "primaryColor border-l-2 " : " opacity-50 "
        }`}
      >
        <motion.div
          layout
          className=" h-full w-10 flex justify-center items-center "
        >
          {Icon}
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium relative top-[2.5%]"
          >
            {title}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
};

export default Option;
