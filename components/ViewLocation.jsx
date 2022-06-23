import Image from "next/image";
import styled from "styled-components";
import canada from "../public/assets/shared/desktop/illustration-canada.svg";
import australia from "../public/assets/shared/desktop/illustration-australia.svg";
import uk from "../public/assets/shared/desktop/illustration-united-kingdom.svg";
import { Trait } from "./Traits";
import Link from "next/link";

const AboutTrait = styled(Trait)`
  margin: 7.5rem 0;

  article {
    padding-bottom: 0;
  }
  .text {
    padding-bottom: 3em;
  }
  .text:last-child {
    padding-bottom: 0;
  }

  button,
  a {
    font-family: "JostMedium";
    font-size: 0.93em;
    text-transform: uppercase;
    background-color: var(--peach);
    color: var(--white);
    border: none;
    border-radius: 0.5rem;
    padding: 1.125em 1.5em;
  }

  @media screen and (min-width: 641px) {
    article {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .text {
      max-width: 65%;
      text-align: center;
      padding-left: 0;
    }
  }
`;

function ViewLocation() {
  return (
    <>
      <AboutTrait>
        <article>
          <div className="traitDiv">
            <Image
              src={canada}
              alt=""
              className="traitImg"
              width={188}
              height={162}
            />
          </div>
          <div className="text">
            <h2>Canada</h2>
            <Link href="/locations">
              <a>See location</a>
            </Link>
          </div>
          <div className="traitDiv">
            <Image
              src={australia}
              alt=""
              className="traitImg"
              width={188}
              height={162}
            />
          </div>
          <div className="text">
            <h2>Australia</h2>
            <Link href="/locations">
              <a>See location</a>
            </Link>
          </div>
          <div className="traitDiv">
            <Image
              src={uk}
              alt=""
              className="traitImg"
              width={188}
              height={162}
            />
          </div>
          <div className="text">
            <h2>United Kingdom</h2>
            <Link href="/locations">
              <a>See location</a>
            </Link>
          </div>
        </article>
      </AboutTrait>
    </>
  );
}

export default ViewLocation;
