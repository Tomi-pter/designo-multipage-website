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
  position: sticky;
  top: -1px;
  z-index: 999;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.025);
  opacity: 1;
  transition: opacity 500ms ease;

  &.footVisible {
    opacity: 0;
  }

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
      margin: 0 1em;
      position: relative;
    }
    a::after {
      background-color: var(--black);
      bottom: -4px;
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

    @media screen and (min-width: 641px) {
      display: unset;
    }
  }

  @media screen and (min-width: 641px) {
    max-width: 100%;
    margin: 0 50%;
    padding: 2.15rem 5%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 1008px) {
    padding: 2.15rem 5.75%;
    /* max-width: 88.5%;
    max-width: clamp(884px, 88.5%, 1440px); */
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
    transition: opacity 0ms cubic-bezier(0.59, 0, 0.49, 1);
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
        <a onClick={closeNav}>Our company</a>
      </Link>
      <Link href="/locations">
        <a onClick={closeNav}>Locations</a>
      </Link>
      <Link href="/contact">
        <a onClick={closeNav}>Contact</a>
      </Link>
    </>
  );

  return (
    <>
      <Navbar>
        <Link href="/">
          <a onClick={closeNav}>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <button onClick={opened ? closeNav : openNav}>
          <Image src={opened ? close : menu} alt="menu" />
        </button>
        <div className="navlinks">{navs}</div>
      </Navbar>
      <NavItems>
        <div className="dim" onClick={closeNav}></div>
        <div className="navMobile">{navs}</div>
      </NavItems>
      {children}
    </>
  );
}

export default Nav;
