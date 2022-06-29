import Head from "next/head";
import { useEffect } from "react";
import Services from "../components/Services";
import WebDesign, { ServicesContainer } from "../components/WebDesign";

function Web() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "inherit";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <>
      <Head>
        <title>Designo Agency Website | Web-Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="designo agency website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebDesign />
      <ServicesContainer>
        <Services specific={"app"} />
        <Services specific={"graphic"} />
      </ServicesContainer>
    </>
  );
}

export default Web;
