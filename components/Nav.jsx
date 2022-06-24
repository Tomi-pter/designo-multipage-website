import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import logo from "../public/assets/logo.svg";
import menu from "../public/assets/shared/mobile/icon-hamburger.svg";
import close from "../public/assets/shared/mobile/icon-close.svg";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.15rem 1.5rem;
  width: 100vw;
  background-color: var(--white);
  position: fixed;
  top: 0;
  z-index: 999;

  button {
    appearance: none;
    background: transparent;
    margin: 0;
    border: none;
    cursor: pointer;

    @media screen and (min-width: 641px) {
      display: none;
    }
  }

  .navlinks {
    display: none;
    text-transform: uppercase;
    font-size: 0.875em;
    font-family: "JostRegular";
    letter-spacing: 2px;

    a {
      color: var(--dark-grey);
      padding: 0 1em;
    }

    @media screen and (min-width: 641px) {
      display: unset;
    }
  }

  @media screen and (min-width: 641px) {
    max-width: 90%;
    margin: 0 50%;
    padding: 2.15rem 0;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 1008px) {
    max-width: 87.5%;
    max-width: clamp(882px, 87.5%, 1440px);
  }
`;

const NavItems = styled.div`
  button {
    appearance: none;
    background: transparent;
    margin: 0;
    border: none;
    cursor: pointer;
  }
  a {
    font-family: "JostRegular";
    font-size: 1.5em;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 1em 0;
    color: var(--white);
  }

  .dim {
    background-color: hsl(0, 0%, 0%, 0.5);
    position: fixed;
    visibility: hidden;
    top: 95px;
    right: 0;
    width: 100vw;
    height: 0;
    z-index: 7;
    transition: all 5ms cubic-bezier(0.59, 0, 0.49, 1);
  }
  .dim.clicked {
    visibility: visible;
    width: 100%;
    height: 100%;
  }
  .navMobile {
    height: 0;
    width: 100vw;
    position: fixed;
    top: 95px;
    right: 0;
    z-index: 10;
    transition: all 200ms cubic-bezier(0.59, 0, 0.49, 1);
  }
  .navMobile a {
    text-decoration: none;
    display: block;
    text-align: left;
    height: 0;
    margin: 0;
    opacity: 0;
    padding-left: 1em;
    transition: opacity 200ms cubic-bezier(0.59, 0, 0.49, 1);
  }
  .navMobile.clicked {
    height: 235px;
    background-color: var(--black);
  }
  .navMobile.clicked a {
    opacity: 1;
    height: unset;
    margin: 1em 0;
  }

  @media screen and (min-width: 641px) {
    display: none;
  }
`;

const Space = styled.div`
  margin: 95px 0 0;

  @media screen and (min-width: 641px) {
    padding: 0.025em 0;
  }
`;

function Nav({ children }) {
  const [opened, setOpened] = useState(false);

  const openNav = () => {
    document.querySelector(".navMobile").classList.add("clicked");
    document.querySelector(".dim").classList.add("clicked");
    document.querySelector("body").style.overflow = "hidden";

    setOpened(true);
  };

  const closeNav = () => {
    document.querySelector(".navMobile").classList.remove("clicked");
    document.querySelector(".dim").classList.remove("clicked");
    document.querySelector("body").style.overflow = "unset";

    setOpened(false);
  };

  const navs = (
    <>
      <Link href="/about">
        <a>Our company</a>
      </Link>
      <Link href="/locations">
        <a>Locations</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>{" "}
    </>
  );

  return (
    <>
      <Navbar>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <button onClick={opened ? closeNav : openNav}>
          <Image src={opened ? close : menu} alt="menu" />
        </button>
        <div className="navlinks">{navs}</div>
      </Navbar>
      <NavItems>
        <div className="dim"></div>
        <div className="navMobile">{navs}</div>
      </NavItems>
      <Space />
      {children}
    </>
  );
}

export default Nav;
