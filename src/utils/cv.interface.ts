import * as icons from 'react-icons/si';

export enum Language {
  HU = 'HU',
  EN = 'EN',
}

export type DictContent = Record<keyof typeof Language, string>;

export type Education = {
  school: DictContent;
  technical: DictContent;
  text: DictContent;
};

export type Hobby = {
  title: string;
  icon: string;
};

export type Contact = {
  title: DictContent;
  data: string;
  icon: string;
  href: string;
};

export type Social = {
  title: string;
  icon: string;
  link: string;
};

export type Skill = {
  name: string;
  force: number;
  icon: IconNames;
};

export type Exprerience = {
  position: DictContent;
  title: DictContent;
  company: DictContent;
  location: string;
  from: number;
  to: number | string;
  text: DictContent;
};

export type Achievement = {
  award: DictContent;
  text: DictContent;
  company: string;
  institute: string;
  location: string;
  year: number;
};

export type Personal = {
  name: DictContent;
  level: DictContent;
  position: DictContent;
  birth: Date;
  country: string;
  city: string;
  avatar: string;
  about: DictContent;
};

export type LanguageSkills = {
  language: DictContent;
  level: DictContent;
  exam: DictContent;
  force: 1 | 2 | 3 | 4 | 5;
  write: number;
  read: number;
  speak: number;
};

export type Project = {
  url: string;
  img: string;
  title: string;
};

export type IconNames = keyof typeof icons;
export interface IGenericIconProps {
  iconName: IconNames;
}

export type Biography = {
  personals: { data: Personal; title: DictContent };
  education: { data: Education[]; title: DictContent };
  expertise: { data: string[]; title: DictContent };
  contacts: { data: Contact[]; title: DictContent };
  skills: { data: Skill[]; title: DictContent };
  experience: { data: Exprerience[]; title: DictContent };
  achivements: { data: Achievement[]; title: DictContent };
  languages: { data: LanguageSkills[]; title: DictContent };
  softSkills: { data: DictContent[]; title: DictContent };
  defaultLanguage: boolean;
  projects: Project[];
  motivation: string;
  hobbies: Hobby[];
  social: Social[];
};
