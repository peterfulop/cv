import { Social } from "../../utils/cv.interface";
import SidebarHeader from "../Biography/Body/Sidebar/biography-body-sidebar-header";
import SocialItem from "./social-item";

export default function Socials(props: { social: Social[] }) {
  return (
    <div className="sidebar mx-2">
      <SidebarHeader title={"Social"} />
      {props.social.map((soc: Social, i: number) => {
        return <SocialItem key={i} soc={soc} />;
      })}
    </div>
  );
}
