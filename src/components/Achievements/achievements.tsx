import { Achievement, DictContent, Language } from '../../utils/cv.interface';
import ContentHeader from '../Biography/Body/Content/biography-body-content-header';
import AchivementItem from './achievement-item';

export default function Achivements(props: {
  languageKey: Language;
  achivements: { data: Achievement[]; title: DictContent };
}) {
  const { data, title } = props.achivements;
  const { languageKey } = props;
  return (
    <div className='content__item mb-4'>
      <ContentHeader title={title[languageKey]} />
      {data.map((achivement: Achievement, i: number) => {
        return (
          <AchivementItem
            key={i}
            achivement={achivement}
            languageKey={languageKey}
          />
        );
      })}
    </div>
  );
}
