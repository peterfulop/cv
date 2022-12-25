import { DictContent, Education, Language } from '../../utils/cv.interface';
import SidebarHeader from '../Biography/Body/Sidebar/biography-body-sidebar-header';
import EducationItem from './education-item';

export default function Educations(props: {
  languageKey: Language;
  educations: { data: Education[]; title: DictContent };
}) {
  return (
    <div className='sidebar mx-2'>
      <SidebarHeader
        title={props.educations.title[props.languageKey] as string}
      />
      {props.educations.data.map((education: Education, i: number) => {
        return (
          <EducationItem
            key={i}
            education={education}
            languageKey={props.languageKey}
          />
        );
      })}
    </div>
  );
}
