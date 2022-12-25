import { Language, LanguageSkills } from '../../utils/cv.interface';
import { CircleRating } from '../MUI/CircleRating';

export default function LanguageItem(props: {
  languageKey: Language;
  language: LanguageSkills;
}) {
  const { languageKey } = props;
  return (
    <div className='sidebar__education'>
      <div className='sidebar__item sidebar-education d-block justify-content-left p-3 my-2'>
        <CircleRating
          label={props.language.language[languageKey]}
          rate={props.language.force}
          level={props.language.level[languageKey]}
        />
        <p className='item-text__small'>{props.language.level[languageKey]}</p>
      </div>
    </div>
  );
}
