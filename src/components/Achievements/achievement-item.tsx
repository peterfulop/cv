import { Achievement, Language } from '../../utils/cv.interface';

export default function AchivementItem(props: {
  languageKey: Language;
  achivement: Achievement;
}) {
  const { languageKey } = props;
  return (
    <div className='achivements-element mb-3'>
      <div className='achivements-header d-flex justify-content-left mb-3'>
        <div className='icon__md achivements-icon d-flex justify-content-center align-items-center me-2'>
          <i className='fas fa-award'></i>
        </div>
        <div className='achivements-text d-flex flex-column justify-content-left'>
          <p className='item-text__heading'>
            {props.achivement.award[languageKey]}
          </p>
          <p className='item-text__small'>
            {props.achivement.company} | {props.achivement.institute} |
            {props.achivement.location} - {props.achivement.year}
          </p>
        </div>
      </div>
      <p className='item-text__italic'>{props.achivement.text[languageKey]}</p>
    </div>
  );
}
