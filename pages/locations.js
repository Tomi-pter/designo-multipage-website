import { useEffect } from "react";
import Location from "../components/Location";

function Locations() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "unset";
    document.querySelector(".foot").style.marginTop = "19.5em";
    document.querySelector(".footer").style.paddingTop = "16rem";
  }, []);

  return (
    <>
      <Location />
    </>
  );
}

export default Locations;
