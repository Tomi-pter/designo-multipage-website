import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Location from "../components/Location";
import { containerVariants } from ".";

function Locations() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "inherit";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animation"
      exit="exit"
    >
      <Location />
    </motion.div>
  );
}

export default Locations;
