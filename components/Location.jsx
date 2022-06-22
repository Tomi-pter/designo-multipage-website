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

  @media screen and (min-width: 641px) {
    article {
      text-align: left;
    }
    section {
      display: flex;
      column-gap: 7em;
    }
  }
`;

const ImageSect = styled.div`
  .img {
    height: 320px;
    overflow: hidden;
  }

  @media screen and (min-width: 641px) {
    margin: 2em 1.5em;
    border-radius: 0.93em;
    overflow: hidden;
  }
`;

const Space = styled.div`
  margin: 2.5em 0 0;
`;

function Location() {
  return (
    <>
      <ImageSect>
        <div className="img">
          <Image src={canada} alt="" layout="responsive" />
        </div>
      </ImageSect>
      <LocationSect>
        <article>
          <h2>Canada</h2>
          <section>
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
          </section>
        </article>
      </LocationSect>
      <Space />
      <ImageSect>
        <div className="img">
          <Image src={australia} alt="" layout="responsive" />
        </div>
      </ImageSect>
      <LocationSect>
        <article>
          <h2>Australia</h2>
          <section>
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
          </section>
        </article>
      </LocationSect>
      <Space />
      <ImageSect>
        <div className="img">
          <Image src={uk} alt="" layout="responsive" />
        </div>
      </ImageSect>
      <LocationSect>
        <article>
          <h2>United Kingdom</h2>
          <section>
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
          </section>
        </article>
      </LocationSect>
    </>
  );
}

export default Location;
