import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../public/assets/logo-dark.svg";
import facebook from "../public/assets/shared/desktop/icon-facebook.svg";
import youtube from "../public/assets/shared/desktop/icon-youtube.svg";
import twitter from "../public/assets/shared/desktop/icon-twitter.svg";
import pinterest from "../public/assets/shared/desktop/icon-pinterest.svg";
import instagram from "../public/assets/shared/desktop/icon-instagram.svg";

const Foot = styled.section`
  margin-top: 19.5em;
  background-color: var(--black);
  position: relative;

  .footer {
    display: flex;
    flex-direction: column;
    padding: 16rem 1.5rem 0;
    color: var(--white);
  }
  .footNav {
    display: flex;
    flex-direction: column;
  }

  .logo {
    padding-bottom: 1.5em;
    align-self: center;
  }
  nav {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-transform: uppercase;
    text-align: center;
    font-size: 0.875em;
    font-family: "JostRegular";
    letter-spacing: 2px;

    a {
      margin: 1.75em 0;
      color: var(--white);
      display: block;
      position: relative;
    }
    a::after {
      background-color: var(--white);
      bottom: -2px;
      content: "";
      height: 1px;
      left: 0px;
      position: absolute;
      transform: scaleX(0);
      transition: transform 0.3s ease 0s;
      width: 100%;
    }
    a:hover::after,
    a:focus::after {
      transform: scaleX(1);
      transform-origin: center;
    }
  }
  .dirCont {
    font-family: "JostRegular";
    text-align: center;
    padding-bottom: 3rem;

    h1,
    h2,
    h3,
    p {
      opacity: 0.5;
    }

    div {
      margin: 2em 0;
    }
  }
  .socials {
    display: flex;
    padding: 1rem 0;
    justify-content: center;

    a {
      margin: 0 0.5rem;
    }
    a:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 641px) {
    max-width: 91%;
    margin: 14.5em auto 0;
    padding: 2.15rem 0;

    .footNav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    nav {
      display: flex;
      justify-content: space-between;
      border-top: none;
      padding-bottom: 1.5em;
      a {
        padding: 0;
        margin: 0 1em;
      }
    }
    .dirCont {
      display: flex;
      justify-content: space-between;
      text-align: left;
      column-gap: 1em;
    }
    .socials {
      align-self: flex-end;
    }
  }
  @media screen and (min-width: 1008px) {
    display: flex;
    flex-direction: column;
    max-width: 88.5%;
    max-width: clamp(884px, 88.5%, 1440px);
  }
`;

const FootAction = styled.aside`
  /* display: ${(props) => (props.contact ? "none" : "unset")}; */
  margin: 0;
  width: 90%;
  border-radius: 1em;
  overflow: hidden;
  color: var(--white);
  background: var(--peach);
  position: absolute;
  top: -13em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  div {
    padding: 4em 0 0.5em;
    max-width: 90%;
    margin: 0 auto;

    h2 {
      font-family: "JostMedium";
      font-size: 2em;
      margin: 0 0 0.5em;
    }
    p {
      font-family: "JostRegular";
      font-size: 0.93em;
      margin: 0;
    }
  }

  button,
  a {
    font-family: "JostMedium";
    display: inline-block;
    font-size: 0.93em;
    text-transform: uppercase;
    background-color: var(--white);
    color: var(--dark-grey);
    border: none;
    border-radius: 0.5rem;
    padding: 1.125em 1.5em;
    margin: 2em 0 4em;

    :hover {
      color: var(--white);
      background-color: var(--light-peach);
    }
  }

  @media screen and (min-width: 641px) {
    top: -7em;

    div {
      max-width: 65%;
      padding: 3em 0 0.5em;
    }
    button {
      margin: 2em 0 3em;
    }
  }

  @media screen and (min-width: 1008px) {
    max-width: clamp(882px, 87.5%, 1440px);
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      max-width: 60%;
      margin: 0;
      padding: 5em;
    }
    a {
      margin: 0 auto;
    }
  }
`;

function Footer({ children }) {
  return (
    <>
      {children}
      <footer style={{ backgroundColor: "var(--black)" }}>
        <Foot className="foot">
          <FootAction className="footaction">
            <div>
              <h2>Let’s talk about your project</h2>
              <p>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <Link href="/contact">
              <a>Get in touch</a>
            </Link>
          </FootAction>
          <section className="footer">
            <div className="footNav">
              <div className="logo">
                <Link href="/">
                  <a>
                    <Image src={logo} alt="logo" />
                  </a>
                </Link>
              </div>
              <div>
                <nav>
                  <Link href="/about">
                    <a>Our company</a>
                  </Link>
                  <Link href="/locations">
                    <a>Locations</a>
                  </Link>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </nav>
              </div>
            </div>
            <section className="dirCont">
              {/* <section className="dirCont"> */}
              <div className="direction">
                <h3>Designo Central Office</h3>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="contact">
                <h3>Contact Us (Central Office)</h3>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
              </div>
              {/* </section> */}
              <div className="socials">
                <a href="http://">
                  <Image src={facebook} alt="facebook" width={24} height={24} />
                </a>
                <a href="http://">
                  <Image src={youtube} alt="youtube" width={24} height={24} />
                </a>
                <a href="http://">
                  <Image src={twitter} alt="twitter" width={24} height={24} />
                </a>
                <a href="http://">
                  <Image
                    src={pinterest}
                    alt="pinterest"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="http://">
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </section>
          </section>
        </Foot>
      </footer>
    </>
  );
}

export default Footer;
