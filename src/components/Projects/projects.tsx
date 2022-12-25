import { Project } from "../../utils/cv.interface";
import ContentHeading from "../Biography/Body/Content/biography-body-content-header";
import ProjectItem from "./project-item";

import "./projects.css";

export default function Projects(props: { projects: Project[] }) {
  return (
    <div className="content__item mb-4">
      <ContentHeading title={"Small Projects"} />
      <div className="skills_list d-flex flex-wrap">
        {props.projects.map((project: Project, i: number) => {
          return <ProjectItem key={i} project={project} />;
        })}
      </div>
    </div>
  );
}
