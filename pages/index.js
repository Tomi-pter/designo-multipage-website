import Head from "next/head";
import styled from "styled-components";
import HomeComp from "../components/HomeComp";
import Services from "../components/Services";
import Traits from "../components/Traits";

const New = styled.div`
  color: var(--peach);
  font-family: "JostMedium";
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo Agency Website | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="designo agency website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeComp />
        <Services specific={"web"} />
        <Services specific={"app"} />
        <Services specific={"graphic"} />
        <Traits />
      </main>
    </>
  );
}
