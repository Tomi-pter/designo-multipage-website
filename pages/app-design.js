import AppDesign from "../components/AppDesign";
import Services from "../components/Services";

function Appdesign() {
  return (
    <>
      <AppDesign />
      <Services specific={"web"} />
      <Services specific={"graphic"} />
    </>
  );
}

export default Appdesign;
