import { Switch } from '@mui/material';
import './biography-header.css';

export default function BiographyHeader(props: {
  language: boolean;
  name?: string;
  level?: string;
  position?: string;
  setDefaultLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className='biography__header'>
      <div className='biography__header_personal'>
        <h1>{props.name}</h1>
        <h3>{props.level + ' ' + props.position}</h3>
        <div className='biography__language_switcher'>
          <p
            className={
              props.language
                ? 'language_switcher_checked'
                : 'language_switcher_unchecked'
            }
          >
            HU
          </p>
          <Switch onChange={(_) => props.setDefaultLanguage} />
          <p
            className={
              props.language
                ? 'language_switcher_unchecked'
                : 'language_switcher_checked'
            }
          >
            EN
          </p>
        </div>
      </div>
      <div className='biography__header_avatar'>
        <img id='avatar-img' src='./avatar.jpg' alt='avatar' />
      </div>
    </div>
  );
}
