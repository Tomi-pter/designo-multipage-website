import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
import styled from "styled-components";
import arrow from "../public/assets/shared/desktop/icon-right-arrow.svg";

export const ServiceSection = styled.section`
  margin: 1.5rem 1.5em;
  border-radius: 1em;
  overflow: hidden;
  /* grid-area: ${(props) => props.specific}; */

  & div {
    padding: 5.625em 1.5em;
    background: hsl(0, 0%, 0%, 0.5);
    text-align: center;
    text-transform: uppercase;
    font-family: "JostMedium";
    color: var(--white);

    :hover {
      background: hsl(11, 73%, 66%, 0.5);
    }

    h2 {
      font-size: 1.75em;
      margin: 0;
      letter-spacing: 1.4px;
    }
    p {
      font-size: 0.95em;
      margin: 0.25em 0;
      letter-spacing: 5px;
    }
  }

  @media screen and (min-width: 641px) {
    margin: 1.5em 0;
    div {
      padding: 4.1em 1.5em;
    }
  }

  @media screen and (min-width: 1008px) {
    margin: 0;
    height: 100%;

    div {
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
  }
`;

function Services({ specific }) {
  const link = `/${specific}-design`;

  return (
    <>
      <Link href={link} passHref>
        <a style={{ gridArea: specific }}>
          <ServiceSection className={specific}>
            <div>
              <h2>{specific} Design</h2>
              <p>
                view projects <Image src={arrow} alt="" />
              </p>
            </div>
          </ServiceSection>
        </a>
      </Link>
    </>
  );
}

export default Services;
