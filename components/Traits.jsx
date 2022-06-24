import Image from "next/image";
import styled from "styled-components";
import passionate from "../public/assets/home/desktop/illustration-passionate.svg";
import resourceful from "../public/assets/home/desktop/illustration-resourceful.svg";
import friendly from "../public/assets/home/desktop/illustration-friendly.svg";

export const Trait = styled.section`
  margin: 7.5rem auto 0;
  max-width: 87.5%;

  article {
    padding-bottom: 5rem;
  }

  .traitDiv {
    margin-bottom: 3em;
  }

  .text {
    color: var(--dark-grey);
    text-align: center;

    h2 {
      font-family: "JostMedium";
      text-transform: uppercase;
      margin-bottom: 1.25em;
      font-size: 1.25em;
      letter-spacing: 5px;
    }
    p {
      font-family: "JostRegular";
    }
  }

  @media screen and (min-width: 641px) {
    max-width: 100%;

    article {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-bottom: 3em;
    }
    .text {
      max-width: 65%;
      padding-left: 2em;
      text-align: left;
    }
    .traitDiv {
      margin-bottom: 2em;
    }
  }

  @media screen and (min-width: 1008px) {
    display: flex;
    justify-content: center;
    gap: 1.5em;

    article {
      display: flex;
      flex-direction: column;
    }
    .text {
      max-width: 100%;
      padding: 0;
      text-align: center;
    }
    .traitDiv {
      margin: auto;
    }
  }
`;

function Traits() {
  return (
    <>
      <Trait>
        <article>
          <div className="traitDiv">
            <Image
              src={passionate}
              alt=""
              className="traitImg"
              width={188}
              height={162}
            />
          </div>
          <div className="text">
            <h2>Passionate</h2>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </article>
        <article>
          <div className="traitDiv">
            <Image
              src={resourceful}
              alt=""
              className="traitImg"
              width={188}
              height={162}
            />
          </div>
          <div className="text">
            <h2>Resourceful</h2>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </article>
        <article>
          <div className="traitDiv">
            <Image
              src={friendly}
              alt=""
              className="traitImg"
              width={188}
              height={162}
            />
          </div>
          <div className="text">
            <h2>Friendly</h2>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </article>
      </Trait>
    </>
  );
}

export default Traits;
