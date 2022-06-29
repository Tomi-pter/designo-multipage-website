import Head from "next/head";
import { useEffect } from "react";
import GraphicDesign from "../components/GraphicDesign";
import Services from "../components/Services";
import { ServicesContainer } from "../components/WebDesign";

function Graphicdesign() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "inherit";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <>
      <Head>
        <title>Designo Agency Website | Graphic-Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="designo agency website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GraphicDesign />
      <ServicesContainer>
        <Services specific={"app"} />
        <Services specific={"web"} />
      </ServicesContainer>
    </>
  );
}

export default Graphicdesign;
