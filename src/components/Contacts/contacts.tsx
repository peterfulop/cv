import { Contact, DictContent, Language } from '../../utils/cv.interface';
import SidebarHeader from '../Biography/Body/Sidebar/biography-body-sidebar-header';
import ContactItem from './contact-item';

export default function Contacts(props: {
  languageKey: Language;
  contacts: { data: Contact[]; title: DictContent };
}) {
  const { data, title } = props.contacts;
  const { languageKey } = props;
  return (
    <div className='sidebar mx-2'>
      <SidebarHeader title={title[languageKey]} />
      {data.map((contact: Contact, i: number) => {
        return (
          <ContactItem
            key={i}
            contact={contact}
            title={contact.title[languageKey]}
          />
        );
      })}
    </div>
  );
}
