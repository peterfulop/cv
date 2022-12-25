import { Skill } from "../../utils/cv.interface";
import { GenericIcon } from "../MUI/Icont";

export default function SkillItem(props: { skill: Skill }) {
  return (
    <div className="skill col-12 col-sm-6">
      <div className="skill__item">
        <div className="skill__item_icon icon__md">
          <i className={props.skill.icon}></i>
          <GenericIcon key={props.skill.icon} iconName={props.skill.icon} />
        </div>
        <div className="skill__item_progress">
          <p className="item-text">{props.skill.name}</p>
          <div className="progress">
            <div
              className="progress-bar bg-cadet"
              style={{
                width: props.skill.force + "%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
