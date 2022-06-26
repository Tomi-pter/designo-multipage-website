import Image from "next/image";
import styled from "styled-components";
import { LightSect } from "./AboutComp";
import { webData } from "../data/webData";

export const HeadSect = styled.section`
  height: 320px;
  background: var(--peach);

  article {
    padding: 6.5em 0;
    max-width: 87.5%;
    margin: 0 auto;
    color: var(--white);
    text-align: center;

    h1 {
      font-family: "JostMedium";
      font-size: 2em;
      margin-top: 0;
      text-transform: capitalize;
    }
    & p {
      font-family: "JostRegular";
      font-size: 0.93em;
      margin: 1.5em 0;
      line-height: 1.5rem;
    }
  }

  @media screen and (min-width: 641px) {
    height: 252px;
    margin: 0.5em 0 7.5em;
    border-radius: 0.93em;

    article {
      max-width: 67.5%;
      padding: 4em 0 0;
    }
  }
`;

export const WorksSect = styled(LightSect)`
  border-radius: 0.93em;
  max-width: 87.5%;
  margin: 2.5em auto;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background: var(--peach);

    h2,
    p {
      color: var(--white);
    }
  }

  article {
    padding: 1em 0 2em;
  }
  h2 {
    letter-spacing: 5px;
    font-size: 1.25em;
    margin: 0;
    text-transform: uppercase;
  }

  @media screen and (min-width: 641px) {
    display: flex;
    height: 310px;
    max-width: 100%;

    article {
      width: 50%;
      padding: 6em 0;
    }
  }

  @media screen and (min-width: 641px) and (max-width: 1007px) {
    .img {
      height: 310px;
      width: 339px;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0.93em;
    }
  }

  @media screen and (min-width: 1008px) {
    flex-direction: column;
    height: 100%;
    width: 100%;

    && article {
      width: 100%;
      max-width: 67.5%;
      height: 40%;
      padding: 2em 0;
      text-align: center;
    }
    &:nth-child(2) {
      flex-direction: column;
    }
  }
`;

export const WorksContainer = styled.section`
  @media screen and (min-width: 1008px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 478px;
    gap: 2em;
    margin-bottom: 4em;
  }
`;

export const ServicesContainer = styled.section`
  @media screen and (min-width: 1008px) {
    display: flex;
    gap: 2em;
    padding-top: 4em;

    a {
      width: 100%;
    }
  }
`;

export const BigSpace = styled.div`
  margin-top: 6em;
`;

function WebDesign() {
  return (
    <>
      <HeadSect>
        <article>
          <h1>Web design</h1>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </article>
      </HeadSect>
      <BigSpace />
      <WorksContainer>
        {webData.map(({ name, src, desc, id }) => (
          <WorksSect key={id}>
            <div className="img">
              <Image
                src={src}
                alt=""
                width={340}
                height={310}
                layout="responsive"
              />
            </div>
            <article>
              <h2>{name}</h2>
              <p>{desc}</p>
            </article>
          </WorksSect>
        ))}
      </WorksContainer>
      <BigSpace />
    </>
  );
}

export default WebDesign;
