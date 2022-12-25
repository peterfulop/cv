import {
  DictContent,
  Language,
  LanguageSkills,
} from '../../utils/cv.interface';
import SidebarHeader from '../Biography/Body/Sidebar/biography-body-sidebar-header';
import EducationItem from './language-item';

export default function Languages(props: {
  languageKey: Language;
  languages: { data: LanguageSkills[]; title: DictContent };
}) {
  const { data, title } = props.languages;
  const { languageKey } = props;
  return (
    <div className='sidebar mx-2'>
      <SidebarHeader title={title[languageKey]} />
      {data.map((language: LanguageSkills, i: number) => {
        return (
          <EducationItem
            key={i}
            language={language}
            languageKey={languageKey}
          />
        );
      })}
    </div>
  );
}
