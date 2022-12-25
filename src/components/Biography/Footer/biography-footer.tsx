import { IconNames } from "../../../utils/cv.interface";
import TechStack from "../../TechStack/tech-stack";

export default function BiographyHeader(props: { techStack: IconNames[] }) {
  return (
    <div className="biography__footer">
      <TechStack techStack={props.techStack} />
    </div>
  );
}
