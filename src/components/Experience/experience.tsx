import { DictContent, Exprerience, Language } from '../../utils/cv.interface';
import ContentHeader from '../Biography/Body/Content/biography-body-content-header';
import ExperienceItem from './experience-item';
import './experience.css';

export default function Experience(props: {
  languageKey: Language;
  experience: { data: Exprerience[]; title: DictContent };
}) {
  const { languageKey } = props;
  const { data, title } = props.experience;
  return (
    <div className='content__item mb-4'>
      <ContentHeader title={title[languageKey]} />
      <div className='experience_list'>
        {data.map((experience: Exprerience, i: number) => {
          return (
            <ExperienceItem
              key={i}
              experience={experience}
              index={i}
              maxLength={data.length}
              languageKey={languageKey}
            />
          );
        })}
      </div>
    </div>
  );
}
