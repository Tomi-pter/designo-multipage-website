import Head from "next/head";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  useEffect(() => {
    document.querySelector(".footaction").style.display = "none";
    document.querySelector(".foot").style.marginTop = 0;
    document.querySelector(".footer").style.paddingTop = "4rem";
  }, []);

  return (
    <>
      <Head>
        <title>Designo Agency Website | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="designo agency website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm />
    </>
  );
}

export default Contact;
