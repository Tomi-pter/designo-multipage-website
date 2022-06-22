import Image from "next/image";
import styled from "styled-components";
import { LightSect } from "./AboutComp";
import canada from "../public/assets/locations/desktop/image-map-canada.png";
import australia from "../public/assets/locations/desktop/image-map-australia.png";
import uk from "../public/assets/locations/desktop/image-map-united-kingdom.png";

const LocationSect = styled(LightSect)`
  h3 {
    font-family: "JostMedium";
    color: var(--dark-grey);
    font-size: 0.93em;
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
`;

const Space = styled.div`
  margin: 2.5em 0 0;
`;

function Location() {
  return (
    <>
      <LocationSect>
        <div className="img">
          <Image src={canada} alt="" layout="responsive" />
        </div>
        <article>
          <h2>Canada</h2>
          <div>
            <h3>Designo Central Office</h3>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
        </article>
      </LocationSect>
      <Space />
      <LocationSect>
        <div className="img">
          <Image src={australia} alt="" layout="responsive" />
        </div>
        <article>
          <h2>Australia</h2>
          <div>
            <h3>Designo AU Office</h3>
            <p>19 Balonne Street</p>
            <p>New South Wales 2443</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>P : (02) 6720 9092</p>
            <p> M : contact@designo.au</p>
          </div>
        </article>
      </LocationSect>
      <Space />
      <LocationSect>
        <div className="img">
          <Image src={uk} alt="" layout="responsive" />
        </div>
        <article>
          <h2>United Kingdom</h2>
          <div>
            <h3>Designo UK Office</h3>
            <p>13 Colorado Way</p>
            <p>Rhyd-y-fro SA8 9GA</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>P : 078 3115 1400</p>
            <p>M : contact@designo.uk</p>
          </div>
        </article>
      </LocationSect>
    </>
  );
}

export default Location;
