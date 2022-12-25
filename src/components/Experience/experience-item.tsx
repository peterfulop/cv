import { FaCircle } from 'react-icons/fa';
import { Exprerience, Language } from '../../utils/cv.interface';

export default function ExperienceItem(props: {
  languageKey: Language;
  experience: Exprerience;
  index: number;
  maxLength: number;
}) {
  const firstExpRoadmapClass: string = props.index === 0 ? 'feature_road' : '';
  const lastExpRoadmapClass: string =
    props.index === props.maxLength - 1 ? 'blank_road' : '';
  const { experience, languageKey } = props;
  return (
    <div className='experince__item d-flex'>
      <div className='roadmap'>
        <div className={`roadmap_top ${firstExpRoadmapClass}`}></div>
        <div className='roadmap_center'>
          <FaCircle className='icon' />
        </div>
        <div className={`roadmap_bottom ${lastExpRoadmapClass}`}></div>
      </div>
      <div className='experience__content'>
        <h5>
          {experience.position[languageKey]}
          {experience.title[languageKey].length > 0
            ? ` / ${experience.title[languageKey]}`
            : ''}
        </h5>
        <p className='item-text__small mb-3'>
          {experience.company[languageKey]} |{' '}
          {experience.institute[languageKey]} |{experience.location}-{' '}
          {experience.from}-{props.experience.to}
        </p>
        <p>{experience.text[languageKey]}</p>
      </div>
    </div>
  );
}
