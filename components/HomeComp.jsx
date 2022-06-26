import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
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
    z-index: 5;
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
  & button,
  a {
    font-family: "JostMedium";
    font-size: 0.93em;
    text-transform: uppercase;
    display: inline-block;
    background-color: var(--white);
    color: var(--dark-grey);
    border: none;
    border-radius: 0.5rem;
    padding: 1.125em 1.5em;

    :hover {
      color: var(--white);
      background-color: var(--light-peach);
    }
  }

  @media screen and (min-width: 641px) {
    margin: 0.5em 0 7.5em;
    border-radius: 0.93em;

    .text {
      max-width: 62.5%;
      padding: 3em 0 0;
    }
  }

  @media screen and (min-width: 1008px) {
    height: 640px;
    display: flex;
    justify-content: unset;
    align-items: center;

    .text {
      text-align: left;
      max-width: 350px;
      padding: 0;
      margin: 0 5em;
      /* transform: translateY(-25%); */
    }
  }
`;

function HomeComp() {
  const animateValue = () => {
    let setTop;

    document.documentElement.clientWidth > 1007
      ? (setTop = { top: ["22%", "23%"] })
      : (setTop = { top: ["20rem", "21rem"] });

    console.log(setTop);

    return setTop;
  };

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
          <Link href="/about">
            <a>Learn more</a>
          </Link>
        </div>
        <motion.div
          className="frame"
          // animate={() => animateValue()}
          transition={{
            type: "spring",
            stiffness: 300,
            duration: 0.3,
            yoyo: Infinity,
          }}
        >
          <Image
            src={phone}
            alt=""
            // layout="responsive"
            priority
            className="frameImg"
          />
        </motion.div>
      </Frame>
    </>
  );
}

export default HomeComp;
