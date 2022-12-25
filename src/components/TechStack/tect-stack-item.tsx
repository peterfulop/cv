import { IconNames } from "../../utils/cv.interface";
import { GenericIcon } from "../MUI/Icont";

export default function TechStackItem(props: { techStack: IconNames }) {
  return (
    <div className="tech_stack__bubble">
      <GenericIcon key={props.techStack} iconName={props.techStack} />
    </div>
  );
}
