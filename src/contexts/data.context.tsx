import { createContext } from 'react';
import { bioData } from '../data/data';
import { Biography, Personal } from '../utils/cv.interface';

const defaultObject = { data: [], title: { HU: '', EN: '' } };

const DataContext = createContext<Biography>({
  personals: { data: {} as Personal, title: { HU: '', EN: '' } },
  education: defaultObject,
  expertise: defaultObject,
  contacts: defaultObject,
  skills: defaultObject,
  experience: defaultObject,
  achivements: defaultObject,
  languages: defaultObject,
  softSkills: defaultObject,
  social: [],
  hobbies: [],
  techStack: [],
  projects: [],
  defaultLanguage: true,
  motivation: '',
});

export function DataContextProvider(props: { children?: React.ReactNode }) {
  return (
    <DataContext.Provider value={{ ...bioData }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
