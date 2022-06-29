import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { v4 as uuidv4 } from "uuid";
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Loader from "../components/Loader";
import { containerVariants } from ".";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3250);

  return (
    <AnimatePresence>
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animation"
          exit="exit"
          key={router.route}
        >
          <Nav>
            <Footer>
              <Main>
                <Component {...pageProps} />
              </Main>
            </Footer>
          </Nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MyApp;
