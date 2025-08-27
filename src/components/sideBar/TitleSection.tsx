import { motion } from "framer-motion";
import LogoCQ from "../LogoCQ";

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <div className="my-3 pb-3">
      <div className="flex cursor-pointer items-center justify-between">
        <div className="flex items-center gap-2">
          <LogoCQ size={60} />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <div className="text-white text-lg ibm uppercase">
                CodingQuest
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TitleSection;
