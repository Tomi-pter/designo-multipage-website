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
      <WebDesign />
      <ServicesContainer>
        <Services specific={"app"} />
        <Services specific={"graphic"} />
      </ServicesContainer>
    </>
  );
}

export default Web;
