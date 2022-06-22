import Image from "next/image";
import { graphicData } from "../data/graphicData";
import { BigSpace, HeadSect, WorksSect } from "./WebDesign";

function GraphicDesign() {
  return (
    <>
      <HeadSect>
        <article>
          <h1>Graphic design</h1>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </article>
      </HeadSect>
      <BigSpace />
      {graphicData.map(({ name, src, desc, id }) => (
        <WorksSect key={id}>
          <div className="img">
            <Image src={src} alt="" width={340} height={310} />
          </div>
          <article>
            <h2>{name}</h2>
            <p>{desc}</p>
          </article>
        </WorksSect>
      ))}
      <BigSpace />
    </>
  );
}

export default GraphicDesign;
