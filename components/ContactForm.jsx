import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import ViewLocation from "./ViewLocation";
import { HeadSect } from "./WebDesign";
import caution from "../public/assets/svg/caution.svg";

const ContactSect = styled(HeadSect)`
  height: 764px;

  article {
    padding: 4.5em 0;
  }
  form {
    padding: 3em 0 2em;

    input,
    textarea {
      appearance: none;
      outline: none;
      border: none;
      width: 100%;
      background: inherit;
      border-bottom: 1px solid white;
      padding: 1em;
      font-family: "JostMedium";
      font-size: 0.93em;
      color: var(--white);
    }
    input:focus,
    textarea:focus {
      border-bottom: 2px solid white;
    }
    input::placeholder,
    textarea::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    textarea {
      resize: none;
    }
  }

  button {
    font-family: "JostMedium";
    font-size: 0.93em;
    text-transform: uppercase;
    background-color: var(--white);
    color: var(--dark-grey);
    border: none;
    border-radius: 0.5rem;
    padding: 0.75em 1em;
    width: 150px;

    :hover,
    :focus {
      color: var(--white);
      background-color: var(--light-peach);
    }
  }

  .inputDiv {
    position: relative;

    p {
      position: absolute;
      display: inline;
      right: 0;
      padding: 1.5em 0.5em;
      margin: 0;
      font-family: "JostRegular";
      font-style: italic;
      font-size: 0.75em;

      span {
        vertical-align: sub;
        padding-left: 0.5em;
      }
    }
  }

  @media screen and (min-width: 641px) {
    article {
      max-width: 80%;
      text-align: left;
      display: flex;
      flex-direction: column;

      p {
        margin: 0 0 1.5em;
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    button {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 1008px) {
    height: 480px;
    article {
      flex-direction: row;
      align-items: center;
      padding: 0;
      margin: auto;
      gap: 6em;
    }
    .text {
      max-width: 50%;
    }
  }
`;

function ContactForm() {
  const [errors, setErrors] = useState("");
  const [mailError, setMailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [msgError, setMsgError] = useState("");

  const validateName = (e) => {
    if (e.target.value?.length < 1) {
      setErrors(`Can't be empty`);
      return false;
    } else {
      setErrors("");
      console.log(e.target.value);
      return true;
    }
  };

  const validateText = (e) => {
    if (e.target.value?.length < 4) {
      setMsgError("Can't be empty");
      return false;
    } else {
      setMsgError("");
      console.log(e.target.value);
      return true;
    }
  };

  const validateMail = (e) => {
    if (e.target.validity.typeMismatch) {
      setMailError("Invalid format");
      return false;
    } else if (e.target.value?.length === 0) {
      setMailError("Can't be empty");
      return false;
    } else {
      setMailError("");
      return true;
    }
  };

  const validatePhone = (e) => {
    if (e.target.validity.typeMismatch) {
      setPhoneError("Invalid format");
      return false;
    } else if (e.target.value?.length === 0) {
      setPhoneError("Can't be empty");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const submit = (e) => {
    if (!validateMail() || !validateText() || !validateName()) {
      e.preventDefault();
    }
  };

  return (
    <>
      <ContactSect>
        <article>
          <div className="text">
            <h1>Contact us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>

          <div className="form">
            <form action="/contact" id="myform" onSubmit={submit}>
              <div className="inputDiv">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={validateName}
                  onBlur={validateName}
                />
                <p>
                  {errors}
                  <span>{errors && <Image src={caution} alt="" />}</span>
                </p>
              </div>
              <div className="inputDiv">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  onBlur={validateMail}
                  onChange={validateMail}
                />
                <p>
                  {mailError}
                  <span>{mailError && <Image src={caution} alt="" />}</span>
                </p>
              </div>
              <div className="inputDiv">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  onBlur={validatePhone}
                  onChange={validatePhone}
                />
                <p>
                  {phoneError}
                  <span>{phoneError && <Image src={caution} alt="" />}</span>
                </p>
              </div>
              <div className="inputDiv">
                <textarea
                  name="placeholder"
                  id="placeholder"
                  rows="4"
                  placeholder="Your Message"
                  onBlur={validateText}
                  onChange={validateText}
                ></textarea>
                <p>
                  {msgError}
                  <span>{msgError && <Image src={caution} alt="" />}</span>
                </p>
              </div>
            </form>
            <button form="myform">Submit</button>
          </div>
        </article>
      </ContactSect>
      <ViewLocation />
    </>
  );
}

export default ContactForm;
