import Image from "next/image";
import styled from "styled-components";
import aboutImgMob from "../public/assets/svg/Bitmap.svg";
import aboutTab from "../public/assets/svg/BitmapTab.svg";
import aboutDesk from "../public/assets/svg/BitmapDesk.svg";
import wrldClass from "../public/assets/svg/world-class.svg";
import worldTab from "../public/assets/svg/worldTab.svg";
import worldDesk from "../public/assets/svg/worldDesk.svg";
import real from "../public/assets/svg/real.svg";
import realTab from "../public/assets/svg/realTab.svg";
import realDesk from "../public/assets/svg/realDesk.svg";
import ViewLocation from "./ViewLocation";

const PeachSect = styled.section`
  background: var(--peach);

  .img {
    height: 320px;
    overflow: hidden;
  }
  article {
    padding: 5em 0;
    margin: 0 auto;
    max-width: 87.5%;
    text-align: center;
  }
  h1,
  h2 {
    font-family: "JostMedium";
    font-size: 2em;
    color: var(--white);
  }
  p {
    color: var(--white);
    font-family: "JostRegular";
    font-size: 0.93em;
  }
  .tab,
  .desk {
    display: none;
  }

  @media screen and (min-width: 641px) {
    margin: 2em 0 7.5em;
    border-radius: 0.93em;

    .img {
      border-top-left-radius: 0.93em;
      border-top-right-radius: 0.93em;
    }
    article {
      max-width: 67.5%;
      padding: 4em 0;
    }
    .tab {
      display: unset;
    }
    .mob,
    .desk {
      display: none;
    }
  }

  @media screen and (min-width: 1008px) {
    display: flex;
    flex-direction: row-reverse;
    height: 480px;

    &:nth-child(2) {
      flex-direction: row;

      .desk {
        border-top-left-radius: 0.93em;
        border-bottom-left-radius: 0.93em;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
    }

    article {
      max-width: 40%;
      margin: auto;
      text-align: left;
    }

    .mob,
    .tab {
      display: none;
    }
    .desk {
      display: unset;
      width: 476px;
      height: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0.93em;
      border-bottom-right-radius: 0.93em;
    }
  }
`;

export const LightSect = styled(PeachSect)`
  background: #fdf3f0;

  h2 {
    color: var(--peach);
  }
  p {
    color: var(--dark-grey);
  }

  @media screen and (min-width: 1008px) {
    height: 640px;
  }
`;

function AboutComp() {
  return (
    <>
      <PeachSect>
        <div className="img mob">
          <Image
            src={aboutImgMob}
            alt=""
            layout="responsive"
            priority
            placeholder="blur"
            blurDataURL={"/assets/about/desktop/image-about-hero.jpg"}
          />
        </div>
        <div className="img tab">
          <Image src={aboutTab} alt="" layout="responsive" />
        </div>
        <div className="img desk">
          <Image src={aboutDesk} alt="" layout="responsive" />
        </div>
        <article>
          <h1>About us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients&apos;
            audiences.
          </p>
        </article>
      </PeachSect>
      <LightSect>
        <div className="img mob">
          <Image src={wrldClass} alt="" layout="responsive" />
        </div>
        <div className="img tab">
          <Image src={worldTab} alt="" layout="responsive" />
        </div>
        <div className="img desk">
          <Image src={worldDesk} alt="" layout="responsive" />
        </div>
        <article>
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </article>
      </LightSect>
      <ViewLocation />
      <LightSect>
        <div className="img mob">
          <Image src={real} alt="" layout="responsive" />
        </div>
        <div className="img tab">
          <Image src={realTab} alt="" layout="responsive" />
        </div>
        <div className="img desk">
          <Image src={realDesk} alt="" layout="responsive" />
        </div>
        <article>
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </article>
      </LightSect>
    </>
  );
}

export default AboutComp;
