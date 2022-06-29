import Head from "next/head";
import { useEffect } from "react";
import AboutComp from "../components/AboutComp";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants } from ".";

function About() {
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
      key="about"
    >
      <Head>
        <title>Designo Agency Website | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="designo agency website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutComp />
    </motion.div>
  );
}

export default About;
