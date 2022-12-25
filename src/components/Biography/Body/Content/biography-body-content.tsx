import { useContext } from 'react';
import DataContext from '../../../../contexts/data.context';
import { Language } from '../../../../utils/cv.interface';
import AboutMe from '../../../About/about-me';
import Achievements from '../../../Achievements/achievements';
import Experience from '../../../Experience/experience';
import Skills from '../../../Skills/skills';
import SoftSkills from '../../../SoftSkills/soft-skills';

export default function BiographyBodyContent(props: { languageKey: Language }) {
  const { personals, skills, softSkills, experience, achivements } =
    useContext(DataContext);
  const { languageKey } = props;
  return (
    <section className='biography__body_content col-sm-12 col-md-12 col-lg-8'>
      <AboutMe
        headerText={personals.title[languageKey]}
        content={personals.data?.about[languageKey]}
        birthDate={personals.data.birth.getFullYear()}
      />
      <Skills {...props} skills={skills} />
      <SoftSkills {...props} softSkills={softSkills} />
      <Experience {...props} experience={experience} />
      <Achievements {...props} achivements={achivements} />
    </section>
  );
}
