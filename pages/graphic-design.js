import GraphicDesign from "../components/GraphicDesign";
import Services from "../components/Services";

function Graphicdesign() {
  return (
    <>
      <GraphicDesign />
      <Services specific={"app"} />
      <Services specific={"web"} />
    </>
  );
}

export default Graphicdesign;
