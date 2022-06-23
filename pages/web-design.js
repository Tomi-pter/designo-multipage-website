import { useEffect } from "react";
import Services from "../components/Services";
import WebDesign from "../components/WebDesign";

function Web() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "unset";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <>
      <WebDesign />
      <Services specific={"app"} />
      <Services specific={"graphic"} />
    </>
  );
}

export default Web;
