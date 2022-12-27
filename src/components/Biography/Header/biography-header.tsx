import { Switch } from '@mui/material';
import { Contact, Language } from '../../../utils/cv.interface';
import './biography-header.css';

import pdfLogo from'../../../img/pdf-icon.svg';
import avatar from'../../../img/avatar.jpg';


export default function BiographyHeader(props: {
  language: boolean;
  name?: string;
  level?: string;
  position?: string;
  contacts?: Contact[];
  setDefaultLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className='biography__header'>
      <div className='biography__header_personal'>
        <h1>{props.name}</h1>
        <h3>{props.level + ' ' + props.position}</h3>
        <div className='biography__hidden_infos'>
          {props.contacts?.map((data, index) => {
            return <p key={index}>{data.data}</p>;
          })}
        </div>
        <div className='biography__actions'>
          <div className='biography__language_switcher'>
          <p
            className={
              props.language
                ? 'language_switcher_checked'
                : 'language_switcher_unchecked'
            }
          >
            {Language.HU}
          </p>
          <Switch onChange={(_) => props.setDefaultLanguage((prev) => !prev)} />
          <p
            className={
              props.language
                ? 'language_switcher_unchecked'
                : 'language_switcher_checked'
            }
          >
            {Language.EN}
          </p>
          </div>
          <div className='biography__pdf'>
            <a href={`./pdf/peter_fulop_cv_${props.language ? Language.HU:Language.EN}.pdf`} download><img src="pdf.png" alt="" />
            <img id='pdf-logo' src={pdfLogo} alt='pdf-logo' title={props.language
                ? 'CV letöltése'
                : 'download CV'} />
            </a>
          </div>
        </div>
      </div>
      <div className='biography__header_avatar'>
        <img id='avatar-img' src={avatar} alt='avatar'  />
      </div>
    </div>
  );
}
