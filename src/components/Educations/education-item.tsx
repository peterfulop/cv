import { Education, Language } from '../../utils/cv.interface';

export default function EducationItem(props: {
  education: Education;
  languageKey: Language;
}) {
  const { languageKey } = props;
  return (
    <div className='sidebar__education'>
      <div className='sidebar__item sidebar-education d-block justify-content-left p-3 my-2'>
        <h5 className='item-text__heading mb-2'>
          {props.education.school[languageKey]}
        </h5>
        <h6 className='mb-2 fw-light'>
          {props.education.technical[languageKey]}
        </h6>
        <small className='fw-normal'>{props.education.text[languageKey]}</small>
      </div>
    </div>
  );
}
