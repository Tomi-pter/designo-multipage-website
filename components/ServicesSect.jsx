import styled from "styled-components";

const ServicesGrid = styled.section`
  @media screen and (min-width: 1008px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "web app" "web graphic";
    gap: 2em;
    height: 640px;
  }
`;

function ServicesSect({ children }) {
  return <ServicesGrid>{children}</ServicesGrid>;
}

export default ServicesSect;
