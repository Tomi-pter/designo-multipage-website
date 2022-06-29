import Head from "next/head";
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
      <Head>
        <title>Designo Agency Website | Locations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="designo agency website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Location />
    </motion.div>
  );
}

export default Locations;
