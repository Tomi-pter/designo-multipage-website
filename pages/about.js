import { useEffect } from "react";
import AboutComp from "../components/AboutComp";

function About() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "unset";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <>
      <AboutComp />
    </>
  );
}

export default About;
