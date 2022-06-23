import { useEffect } from "react";
import GraphicDesign from "../components/GraphicDesign";
import Services from "../components/Services";

function Graphicdesign() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "unset";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <>
      <GraphicDesign />
      <Services specific={"app"} />
      <Services specific={"web"} />
    </>
  );
}

export default Graphicdesign;
