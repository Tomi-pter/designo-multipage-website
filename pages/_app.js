import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main from "../components/Main";

function MyApp({ Component, pageProps }) {
  return (
    <Nav>
      <Footer>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Footer>
    </Nav>
  );
}

export default MyApp;
