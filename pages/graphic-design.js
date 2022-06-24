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
      <GraphicDesign />
      <ServicesContainer>
        <Services specific={"app"} />
        <Services specific={"web"} />
      </ServicesContainer>
    </>
  );
}

export default Graphicdesign;
