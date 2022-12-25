import { Language } from '../../../utils/cv.interface';
import ContentBody from './Content/biography-body-content';
import SidebarBody from './Sidebar/biography-body-sidebar';

export default function BiographyBody(props: { languageKey: Language }) {
  return (
    <div className='biography__body container'>
      <section className='row'>
        <ContentBody {...props} />
        <SidebarBody {...props} />
      </section>
    </div>
  );
}
