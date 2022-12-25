import { DictContent, Language } from '../../utils/cv.interface';
import ContentHeading from '../Biography/Body/Content/biography-body-content-header';
import SoftSkillItem from './soft-skill-item';

import './soft-skills.css';

export default function SoftSkills(props: {
  languageKey: Language;
  softSkills: { data: DictContent[]; title: DictContent };
}) {
  const { languageKey } = props;
  const { data, title } = props.softSkills;
  return (
    <div className='content__item mb-4'>
      <ContentHeading title={title[languageKey]} />
      <div className='softskill__list'>
        {data.map((softSkill: DictContent, i: number) => {
          return <SoftSkillItem key={i} softSkill={softSkill[languageKey]} />;
        })}
      </div>
    </div>
  );
}
