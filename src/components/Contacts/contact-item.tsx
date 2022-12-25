import { Contact } from '../../utils/cv.interface';

export default function ContactItem(props: {
  contact: Contact;
  title: string;
}) {
  return (
    <a href={props.contact.href} className='sidebar__contact'>
      <div className='sidebar__item sidebar-contact d-flex justify-content-left p-3'>
        <div className='icon__md d-flex justify-content-center align-items-center me-2'>
          <i className={props.contact.icon}></i>
        </div>
        <div className='item-text d-flex flex-column justify-content-center align-content-center'>
          <p className='item-text__heading'>{props.title}</p>
          <p className='item-text__link contact_data'>{props.contact.data}</p>
        </div>
      </div>
    </a>
  );
}
