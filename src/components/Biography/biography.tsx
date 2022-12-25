import { Fragment, useContext, useState } from 'react';
import DataContext from '../../contexts/data.context';
import { Language } from '../../utils/cv.interface';
import './biography.css';
import BiographyBody from './Body/biography-body';
import BiographyHeader from './Header/biography-header';

export default function Biography() {
  const [defaultLanguage, setDefaultLanguage] = useState<boolean>(true);

  const { personals } = useContext(DataContext);
  const languageKey = defaultLanguage ? Language.HU : Language.EN;

  return (
    <Fragment>
      <BiographyHeader
        name={personals?.data.name[languageKey]}
        level={personals?.data.level[languageKey]}
        position={personals?.data.position[languageKey]}
        language={defaultLanguage}
        setDefaultLanguage={setDefaultLanguage}
      />
      <BiographyBody languageKey={languageKey} />
    </Fragment>
  );
}
