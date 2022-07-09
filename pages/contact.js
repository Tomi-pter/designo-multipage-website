import Head from "next/head";
import ContactForm from "../components/ContactForm";

function Contact() {
  // document.querySelector(".footaction").classList.toggle('contactPage')
  // document.querySelector(".foot").classList.toggle('contactPage')
  // document.querySelector(".footer").classList.toggle('contactPage')

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
