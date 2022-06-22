import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Nav>
      <Footer>
        <Component {...pageProps} />
      </Footer>
    </Nav>
  );
}

export default MyApp;
