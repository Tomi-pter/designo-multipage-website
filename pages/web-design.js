import Services from "../components/Services";
import WebDesign from "../components/WebDesign";

function Web() {
  return (
    <>
      <WebDesign />
      <Services specific={"app"} />
      <Services specific={"graphic"} />
    </>
  );
}

export default Web;
