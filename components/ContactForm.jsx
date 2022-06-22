import { useEffect } from "react";
import styled from "styled-components";
import ViewLocation from "./ViewLocation";
import { HeadSect } from "./WebDesign";

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
      border: none;
      width: 100%;
      background: inherit;
      border-bottom: 1px solid white;
      padding: 1em;
      font-family: "JostMedium";
      font-size: 0.93em;
      color: var(--white);
    }
    input::placeholder,
    textarea::placeholder {
      color: rgba(255, 255, 255, 0.5);
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
  }
`;

function ContactForm() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "none";
    document.querySelector(".foot").style.marginTop = 0;
    document.querySelector(".footer").style.paddingTop = "4rem";
  }, []);

  return (
    <>
      <ContactSect>
        <article>
          <h1>Contact us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>

          <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
            <textarea
              name="placeholder"
              id="placeholder"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </form>
          <button>Submit</button>
        </article>
      </ContactSect>
      <ViewLocation />
    </>
  );
}

export default ContactForm;