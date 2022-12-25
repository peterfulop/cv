import { Project } from "../../utils/cv.interface";

export default function ProjectItem(props: { project: Project }) {
  return (
    <a href={props.project.url} className="project-item" target={"blank"}>
      <img src={`./img/${props.project.img}`} alt={props.project.title} />
      <p>{props.project.title}</p>
    </a>
  );
}
