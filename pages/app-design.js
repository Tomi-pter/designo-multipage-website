import { useEffect } from "react";
import AppDesign from "../components/AppDesign";
import Services from "../components/Services";

function Appdesign() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "unset";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <>
      <AppDesign />
      <Services specific={"web"} />
      <Services specific={"graphic"} />
    </>
  );
}

export default Appdesign;
