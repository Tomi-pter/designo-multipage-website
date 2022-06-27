import Head from "next/head";
import { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import HomeComp from "../components/HomeComp";
import Services from "../components/Services";
import ServicesSect from "../components/ServicesSect";
import Traits from "../components/Traits";

export const containerVariants = {
  initial: {
    opacity: 0,
    // x: "100vw",
  },
  animation: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    // x: "-100vw",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "inherit";
    document.querySelector(".foot").style.marginTop = "15.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="initail"
      animate="animation"
      exit="exit"
      key="index"
    >
      <Head>
        <title>Designo Agency Website | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="designo agency website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeComp />
      <ServicesSect>
        <Services specific={"web"} />
        <Services specific={"app"} />
        <Services specific={"graphic"} />
      </ServicesSect>
      <Traits />
    </motion.div>
  );
}
