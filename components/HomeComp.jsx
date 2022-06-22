import Image from "next/image";
import styled from "styled-components";
import phone from "../public/assets/frame.svg";

const Frame = styled.section`
  background-color: var(--peach);
  height: 843px;
  overflow: hidden;
  margin: 5em 0 7.5em;
  position: relative;
  display: flex;
  justify-content: center;

  & .text {
    color: var(--white);
    text-align: center;
    padding: 5rem 0 0;
    max-width: 87.5%;
  }
  & h1 {
    font-family: "JostMedium";
    font-size: 2em;
    line-height: 2.25rem;
  }
  & p {
    font-family: "JostRegular";
    font-size: 0.93em;
    margin: 1.5em 0;
    line-height: 1.5rem;
  }
  & button {
    font-family: "JostMedium";
    font-size: 0.93em;
    text-transform: uppercase;
    background-color: var(--white);
    color: var(--dark-grey);
    border: none;
    border-radius: 0.5rem;
    padding: 1.125em 1.5em;
  }

  @media screen and (min-width: 641px) {
    margin: 0.5em 1.5em 7.5em;
    border-radius: 0.93em;

    .text {
      max-width: 67.5%;
      padding: 3em 0 0;
    }
  }
`;

function HomeComp() {
  return (
    <>
      <Frame>
        <div className="text">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button>Learn more</button>
        </div>
        <div className="frame">
          <Image
            src={phone}
            alt=""
            // layout="responsive"
            priority
            className="frameImg"
          />
        </div>
      </Frame>
    </>
  );
}

export default HomeComp;