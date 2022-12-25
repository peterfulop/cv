import { IconNames } from "../../utils/cv.interface";
import TechStackItem from "./tect-stack-item";

import "./tech-stack.css";

export default function TechStack(props: { techStack: IconNames[] }) {
  return (
    <div className="tech-stack__list mt-3">
      {props.techStack.map((techStack: IconNames, i: number) => {
        return <TechStackItem key={i} techStack={techStack} />;
      })}
    </div>
  );
}
