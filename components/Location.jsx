import Image from "next/image";
import styled from "styled-components";
import { LightSect } from "./AboutComp";
import canada from "../public/assets/svg/canadaDesk.svg";
import australia from "../public/assets/svg/australiaDesk.svg";
import uk from "../public/assets/svg/ukDesk.svg";

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

  @media screen and (min-width: 1008px) {
    height: 326px;
    width: 62.5%;

    article {
      max-width: 100%;
      margin: auto 0;
      padding: 0 4em;
    }
  }
`;

const LocationContainer = styled.section`
  @media screen and (min-width: 1008px) {
    height: 326px;
    display: flex;
    align-items: center;
    gap: 2.5%;
    flex-direction: ${(props) => (props.position ? "row" : "row-reverse")};
    margin: 1em 0;

    && section {
      margin: 0;
    }
  }
`;

const ImageSect = styled.div`
  .img {
    height: 320px;
    overflow: hidden;
  }

  @media screen and (min-width: 641px) {
    margin: 2em 0;
    border-radius: 0.93em;
    overflow: hidden;
  }

  @media screen and (min-width: 1008px) {
    width: 35%;
    height: 326px;

    .img {
      height: max-content;
      width: 130%;
      border-radius: 0.93em;
    }
  }
`;

const Space = styled.div`
  margin: 2.5em 0 0;
`;

function Location() {
  return (
    <>
      <LocationContainer>
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
      </LocationContainer>
      <Space />
      <LocationContainer position="2">
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
      </LocationContainer>
      <Space />
      <LocationContainer>
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
      </LocationContainer>
    </>
  );
}

export default Location;
