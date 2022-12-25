import { DictContent, Language, Skill } from '../../utils/cv.interface';
import ContentHeading from '../Biography/Body/Content/biography-body-content-header';
import SkillItem from './skill-item';

import './skills.css';

export default function Skills(props: {
  languageKey: Language;
  skills: { data: Skill[]; title: DictContent };
}) {
  const { languageKey } = props;
  const { data, title } = props.skills;
  const mySkills = data.sort((a, b) => b.force - a.force);
  return (
    <div className='content__item mb-4'>
      <ContentHeading title={title[languageKey]} />
      <div className='skills_list d-flex flex-wrap'>
        {mySkills.map((skill: Skill, i: number) => {
          return <SkillItem key={i} skill={skill} />;
        })}
      </div>
    </div>
  );
}
