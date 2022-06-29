import Head from "next/head";
import { useEffect } from "react";
import AppDesign from "../components/AppDesign";
import Services from "../components/Services";
import { ServicesContainer } from "../components/WebDesign";

function Appdesign() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "inherit";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <>
      <Head>
        <title>Designo Agency Website | App-Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="designo agency website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppDesign />
      <ServicesContainer>
        <Services specific={"web"} />
        <Services specific={"graphic"} />
      </ServicesContainer>
    </>
  );
}

export default Appdesign;
