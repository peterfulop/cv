import { Hobby } from "../../utils/cv.interface";
import SidebarHeader from "../Biography/Body/Sidebar/biography-body-sidebar-header";
import HobbyItem from "./hobby-item";

export default function Hobbies(props: { hobbies: Hobby[] }) {
  return (
    <div className="sidebar mx-2">
      <SidebarHeader title={"Hobby"} />
      <div className="sidebar__item d-flex flex-wrap justify-content-center py-3 my-2">
        {props.hobbies.map((hobby: Hobby, i: number) => {
          return <HobbyItem key={i} title={hobby.title} icon={hobby.icon} />;
        })}
      </div>
    </div>
  );
}
