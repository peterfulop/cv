import { DictContent, Language } from '../../utils/cv.interface';
import SidebarHeader from '../Biography/Body/Sidebar/biography-body-sidebar-header';
import ExpertiseItem from './expertise-item';

export default function Expertise(props: {
  languageKey: Language;
  expertise: { data: string[]; title: DictContent };
}) {
  const { data, title } = props.expertise;
  const { languageKey } = props;
  return (
    <div className='sidebar mx-2'>
      <SidebarHeader title={title[languageKey]} />
      <ul className='sidebar__item pt-2'>
        {data.map((expertise: string, i: number) => {
          return <ExpertiseItem key={i} expertise={expertise} />;
        })}
      </ul>
    </div>
  );
}
