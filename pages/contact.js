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
      <ContactForm />
    </>
  );
}

export default Contact;
