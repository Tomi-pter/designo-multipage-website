import Image from "next/image";
import { appData } from "../data/appData";
import { BigSpace, HeadSect, WorksContainer, WorksSect } from "./WebDesign";

function AppDesign() {
  return (
    <>
      <HeadSect>
        <article>
          <h1>App design</h1>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </article>
      </HeadSect>
      <BigSpace />
      <WorksContainer>
        {appData.map(({ name, src, desc, id }) => (
          <WorksSect key={id}>
            <div className="img">
              <Image
                src={src}
                alt=""
                width={340}
                height={310}
                layout="responsive"
              />
            </div>
            <article>
              <h2>{name}</h2>
              <p>{desc}</p>
            </article>
          </WorksSect>
        ))}
      </WorksContainer>
      <BigSpace />
    </>
  );
}

export default AppDesign;
