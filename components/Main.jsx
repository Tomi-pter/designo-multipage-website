import styled from "styled-components";

const MainStyled = styled.main`
  max-width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 641px) {
    max-width: 90%;
    margin: 2em auto 0;
  }

  @media screen and (min-width: 1008px) {
    max-width: 87.5%;
    max-width: clamp(882px, 87.5%, 1440px);
  }
`;

function Main({ children }) {
  return <MainStyled>{children}</MainStyled>;
}

export default Main;
