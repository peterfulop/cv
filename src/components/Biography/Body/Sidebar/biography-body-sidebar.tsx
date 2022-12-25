import { useContext } from 'react';
import DataContext from '../../../../contexts/data.context';
import { Language } from '../../../../utils/cv.interface';
import Contacts from '../../../Contacts/contacts';
import Educations from '../../../Educations/educations';
import Expertise from '../../../Expertise/expertise';
import Hobbies from '../../../Hobbies/hobbies';
import Languages from '../../../Languages/languages';
import Profile from '../../../Profile/profile';
import Socials from '../../../Social/social';

export default function BiographyBodySidebar(props: { languageKey: Language }) {
  const bioData = useContext(DataContext);
  return (
    <section className='biography__body_sidebar col-sm-12 col-md-12 col-lg-4'>
      <Profile
        avatar={bioData.personals.data.avatar}
        birthDate={bioData.personals.data.birth}
      />
      <Educations {...props} educations={bioData.education} />
      <Languages {...props} languages={bioData.languages} />
      <Expertise {...props} expertise={bioData.expertise} />
      <Contacts {...props} contacts={bioData.contacts} />
      <Hobbies {...props} hobbies={bioData.hobbies} />
      <Socials social={bioData.social} />
    </section>
  );
}
