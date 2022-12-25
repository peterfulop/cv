import { Biography } from '../utils/cv.interface';

export const bioData: Biography = {
  defaultLanguage: true,
  personals: {
    title: {
      HU: 'Bemutatkozás',
      EN: 'About me',
    },
    data: {
      name: {
        HU: 'Fülöp Péter',
        EN: 'Peter Fulop',
      },
      level: {
        HU: 'junior',
        EN: 'junior',
      },
      position: {
        HU: 'fullstack szoftverfejlesztő',
        EN: 'fullstack software developer',
      },
      birth: new Date('1993.08.17'),
      country: 'Hungary',
      city: 'Körmend',
      avatar: 'avatar.png',
      about: {
        HU: 'Fülöp Péter vagyok,  $age$ éves, és Vas megyében, Körmenden lakom. Alapvetően műszaki beállítottságú vagyok, tanulmányaimat is ez irányban végeztem, mint gépésztechnikus, CNC forgácsoló, és műszaki rajzoló. Ezek mellett évek óta, vállalkozás formájában fotográfusként dolgozom. A programozás iránti aktív érdeklődésem nagyjából az első munkahelyemmel együtt érkezett. Számtalan helyzetben próbáltam az adott munkafolyamatokon könnyíteni, egyszerűbbé, transzparensebbé tenni. Az egyszerű Excel makróktól kezdve végül hamar eljutottam a VBA szintre, ahol alapvetően a Visual Basic, egy Office alkalmazásokra testreszabott nyelv formájában volt elérhető. Az autodidakta módon történő tanulás a sajátos hiányosságaival lassan kezdte kinőni magát, így 2020-ban jelentkeztem egy szoftverfejlesztő OKJ képzésre, hogy az alapok meglegyenek. A képzés végére nagyjából sikerült irányt találni a szoftverfejlesztő pályán. Jelenleg a webfejlesztés érdekel a legjobban, és próbálok szorosabb kapcsolatot építeni a JavaScripttel.',
        EN: 'hello',
      },
    },
  },
  education: {
    title: { HU: 'Tanulmányok', EN: 'Education' },
    data: [
      {
        school: { HU: 'UDEMY', EN: 'UDEMY' },
        technical: { HU: 'Önfejlesztő kurzusok', EN: '' },
        text: {
          HU: 'Programozás témakörben számtalan kurzus: NodeJS, MongoDB, TypeScipt, React, JavaScript alapok, C# LINQ, MySQL...',
          EN: '',
        },
      },
      {
        school: { HU: 'Vas Megyei SZC Rázsó Imre Technikum', EN: '' },
        technical: { HU: 'Szoftverfejlesztő - 2020-2022', EN: '' },
        text: {
          HU: 'A képzésen a fő programozási nyelv a C# volt, erre építettünk először konzolos alkalmazásokat, majd WPF segítségével grafikus UI. Adatbázis szintEN: MySQL, MSSQL, C# alatt EntityFramework. Webfejlesztés témában Js, és PHP.',
          EN: '',
        },
      },
      {
        school: {
          HU: 'Gépipari Informatikai és Műszaki Szakközépiskola',
          EN: '',
        },
        technical: {
          HU: 'Gépésztechnikus / CNC forgácsoló - 2012-2014',
          EN: '',
        },
        text: {
          HU: 'Érettségi után 2 év technikum. Gépésztechnikus alapok, műszaki rajzolás, CAD, CNC és hagyományos anyagmegmunkálási technikák',
          EN: '',
        },
      },
      {
        school: { HU: 'Kölcsey Ferenc Gimnázium', EN: '' },
        technical: { HU: 'Érettségi 2008-2014', EN: '' },
        text: { HU: '', EN: '' },
      },
    ],
  },
  expertise: {
    title: { HU: 'Erősségek', EN: 'Expertise' },
    data: ['JavaScript', 'Bootstrap', 'Express', 'NodeJS', 'OOP', 'GIT'],
  },
  hobbies: [
    {
      title: 'coding',
      icon: 'fas fa-code',
    },
    {
      title: 'photography',
      icon: 'fas fa-camera-retro',
    },
    {
      title: 'swimming',
      icon: 'fas fa-swimmer',
    },
    {
      title: 'hiking',
      icon: 'fas fa-hiking',
    },
    {
      title: 'cycling',
      icon: 'fas fa-bicycle',
    },
    {
      title: 'pizza',
      icon: 'fas fa-pizza-slice',
    },
  ],
  contacts: {
    title: { HU: 'Kapcsolat', EN: 'Contact' },
    data: [
      {
        title: { HU: 'email', EN: 'email' },
        data: 'mrpeterfulop@gmail.com',
        icon: 'fas fa-envelope',
        href: 'mailto: mrpeterfulop@gmail.com',
      },
      {
        title: { HU: 'telefonszám', EN: 'phone' },
        data: '+36306561900',
        icon: 'fas fa-phone-alt',
        href: 'tel:+36306561900',
      },
      {
        title: { HU: 'lakhely', EN: 'residence' },
        data: 'Hungary, Körmend',
        icon: 'fas fa-map-marker-alt',
        href: 'https://goo.gl/maps/nb1VupvEym9PHs6T9',
      },
    ],
  },
  social: [
    {
      title: 'facebook',
      icon: 'fab fa-facebook',
      link: 'https://www.facebook.com/fulop.peter.10',
    },
    {
      title: 'github',
      icon: 'fab fa-github',
      link: 'https://github.com/peterfulop',
    },
    {
      title: 'linkedin',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/peter-fulop',
    },
  ],
  skills: {
    title: {
      HU: 'Technikai készségek',
      EN: 'Tech Skills',
    },
    data: [
      {
        name: 'Apollo & GraphQL',
        force: 70,
        icon: 'SiApollographql',
      },
      {
        name: 'PostgresSQL',
        force: 70,
        icon: 'SiPostgresql',
      },
      {
        name: 'Docker',
        force: 40,
        icon: 'SiDocker',
      },
      {
        name: 'Terraform',
        force: 30,
        icon: 'SiTerraform',
      },
      {
        name: 'Amazon AWS',
        force: 30,
        icon: 'SiAmazonaws',
      },
      {
        name: 'RabbitMQ',
        force: 30,
        icon: 'SiRabbitmq',
      },
      {
        name: 'Redis',
        force: 30,
        icon: 'SiRedis',
      },
      {
        name: 'Prisma',
        force: 30,
        icon: 'SiPrisma',
      },
      {
        name: 'Heroku',
        force: 30,
        icon: 'SiHeroku',
      },
      {
        name: 'JavaScript',
        force: 70,
        icon: 'SiJavascript',
      },
      {
        name: 'TypeScript',
        force: 75,
        icon: 'SiTypescript',
      },
      {
        name: 'NodeJS',
        force: 70,
        icon: 'SiNodedotjs',
      },
      {
        name: 'MongoDB',
        force: 30,
        icon: 'SiMongodb',
      },

      {
        name: 'React',
        force: 60,
        icon: 'SiReact',
      },
      {
        name: 'C#',
        force: 40,
        icon: 'SiCsharp',
      },
    ],
  },
  softSkills: {
    title: {
      HU: '',
      EN: 'Soft skills',
    },
    data: [
      { HU: 'szorgalom', EN: 'hard working' },
      { HU: 'precizitás', EN: 'precision' },
      { HU: 'igényesség', EN: 'demanding' },
      { HU: 'szakmaiság', EN: 'professionalism' },
      { HU: 'kitartás', EN: 'endurance' },
    ],
  },
  experience: {
    title: {
      HU: 'Tapasztalatok',
      EN: 'Experiences',
    },
    data: [
      {
        position: {
          HU: 'Junior szoftver fejlesztő',
          EN: 'Junior Software Developer',
        },
        title: { HU: '', EN: '' },
        company: { HU: 'Coding Sans', EN: 'Coding Sans' },
        institute: { HU: 'Hungary', EN: '' },
        location: 'Budapest',
        from: 2022,
        to: 2023,
        text: {
          HU: '',
          EN: '',
        },
      },
      {
        position: { HU: 'Fotográfus', EN: '' },
        title: { HU: '', EN: '' },
        company: { HU: 'Egyéni vállalkozás', EN: '' },
        institute: { HU: '-', EN: '' },
        location: 'Körmend',
        from: 2020,
        to: '',
        text: {
          HU: '2017 óta dolgozom fotográfusként, mint vállalkozó. Hobbiból lett szenvedély, majd hivatás. Elsősorban családi eseményeket, portrékat, esküvőket dokumentálok. A 2020-as évtől főállásban vállalkozó, ami fő megélhetési forrás.',
          EN: '',
        },
      },
      {
        position: { HU: 'Műszaki rajzoló', EN: '' },
        title: { HU: 'Tervező', EN: '' },
        company: { HU: 'Breitenbach Kft.', EN: '' },
        institute: { HU: 'Magyarország', EN: '' },
        location: 'Körmend',
        from: 2017,
        to: 2020,
        text: {
          HU: 'Főbb feladataim közé tartozott acélszerkezetek, lépcsők, csarnokok tervezésében való aktív részvétel, tervek gyártásra történő előkészítése, anyagrendelés, munka optimalizálás. Önszorgalomból kisebb, informatikai jellegű problémák feltárása, megoldása, folyamat automatizálás.',
          EN: '',
        },
      },
      {
        position: { HU: 'KVP Team', EN: '' },
        title: { HU: 'Folyamatfejlesztés, optimalizálás', EN: '' },
        company: { HU: 'Ada Hungária Bútorgyár Kft.', EN: '' },
        institute: { HU: 'Magyarország', EN: '' },
        location: 'Körmend',
        from: 2017,
        to: 2016,
        text: {
          HU: 'Termelési folyamatok segítése, gyorsítása, folyamatleírások készítése, anyag kihozatali tényezők felülvizsgálata, javítása, munkakörnyezet optimalizálása.',
          EN: '',
        },
      },
      {
        position: { HU: 'Műszaki rajzoló', EN: '' },
        title: { HU: 'CAD tervező', EN: '' },
        company: { HU: 'Ada Hungária Bútorgyár Kft.', EN: '' },
        institute: { HU: 'Magyarország', EN: '' },
        location: 'Körmend',
        from: 2017,
        to: 2014,
        text: {
          HU: 'Műszaki rajzok készítése a termelés számára. 3D összeállítások készítése az egyes bútorokról, amik az összeszerelést, illetve a 	tervezést segítették.',
          EN: '',
        },
      },
    ],
  },
  achivements: {
    title: {
      HU: 'Sikerek',
      EN: 'Achivements',
    },
    data: [
      {
        award: {
          HU: 'Project Manager',
          EN: 'Project Manager',
        },
        company: 'Breitenbach Kft.',
        institute: '',
        location: 'Körmend',
        year: 2020,
        text: {
          HU: 'Komplett, 4 belső céget magába foglaló globális rendszer építése volt a cél. Az összes futó projekt vezetése, megrendelések kezelése, partnercégek, dolgozók nyilvántartása mind egy alkalmazásban. Lehetőségünk volt cégenként projektek szűrésére, kezelésére, megrendelések rögzítésére. A rendszeres megrendeléseket el tudtuk készíteni korábbiak alapján, a cégre jellemző megrendelőformula automatikus generálásra történt word, és PDF formátumban, majd egyből, Outlook kapcsolattal új emailként elküldhettük a beszállító partner felé, csatolva a PDF megrendelést. A megoldás Excelben, VBA implementálással készült, formok segítségével, részlegenkéti testreszabható szerepkörökkel.',
          EN: '',
        },
      },
      {
        award: {
          HU: 'CutPro, szálanyag kalkulációs program',
          EN: 'CutPro, szálanyag kalkulációs program',
        },
        company: 'Breitenbach Kft.',
        institute: '',
        location: 'Körmend',
        year: 2019,
        text: {
          HU: 'Az acélgyártás anyagigény felmérésére készült megoldás, mely az ismert anyaghosszok, és keresztmetszetek alapján kalkulált várható anyagigényt a rendeléshez, illetve a gyártás számára vágási listát exportált PDF formátumban. Lehetőségünk volt megadni a szálankénti minimális maradékot, a vágási lapvastagságot. Az adatokat a program excel formátumból importálta, és béta verzióban képes volt meglévő raktárkészlet anyagaiból is kalkulálni. A megoldás Excelben, VBA implementálással készült, formok segítségével.',
          EN: '',
        },
      },
      {
        award: {
          HU: 'Lagerbestand Program',
          EN: 'Lagerbestand Program',
        },
        company: 'Breitenbach Kft.',
        institute: '',
        location: 'Körmend',
        year: 2018,
        text: {
          HU: 'Egyszerű raktárkészlet nyilvántartó program készítése volt a cél, ami lehetővé teszi a beérkező termékek (kötőelemek, pántok, faanyagok) leltározását. Kritikusan alacsony raktárkészlet esetén figyelmeztette a használót, hogy melyik termékekből szükséges rendelést leadni. A raktárból történő kivételezés is nyomon követésre került: ki, mikor, mit, és milyen projektszámra vitte ki az adott termékeket. Lehetőség volt összegző kimutatás készítésére, PDF generálással. A megoldás Excelben, VBA implementálással készült, formok segítségével.',
          EN: '',
        },
      },
      {
        award: {
          HU: 'OFS+Pro',
          EN: 'OFS+Pro',
        },
        company: 'Ada Hungária Bútorgyár Kft.',
        institute: 'KVP Team',
        location: 'Körmend',
        year: 2017,
        text: {
          HU: 'A bútorgyártásban, szivacsfeldolgozás területén történő, nagymértékű anyagkihozatal javítás. A lényege, hogy a napi gyártásból megmaradt többlettermékeket leltárba véve, a következő gyártási listából kivételre kerültek a már leltározott tételek. A gyártási lista .csv állományban érkezett adatbázisból, ami az aktuális leltárkészlettel történő összefésül után egy új, módosított listát küldött a szivacsvágó gépnek. A megoldás Excelben, VBA implementálással készült.',
          EN: '',
        },
      },
    ],
  },
  languages: {
    title: { HU: 'Nyelvek', EN: 'Languages' },
    data: [
      {
        language: { HU: 'angol', EN: 'english' },
        level: { HU: 'Alapszintű nyelvismeret', EN: '' },
        exam: { HU: '-', EN: '-' },
        force: 3,
        write: 60,
        read: 70,
        speak: 40,
      },
      {
        language: { HU: 'német', EN: 'German' },
        level: { HU: 'Alapfokú, C-típusú nyelvvizsga', EN: '...' },
        exam: { HU: 'alapfokú C', EN: '-' },
        force: 4,
        write: 70,
        read: 70,
        speak: 70,
      },
    ],
  },
  motivation:
    'Általános célom, hogy az élet minden területén biztos alapokra tudjak építkezni, amihez elengedhetetlen a kitartó és eredményes munka. Bár sok mindenre igaz, de a szoftverfejlesztésre kifejezettEN: egy életen át tartó tanulás az igazán gyümölcsöző karrier titka. Úgy gondolom, hogy kellő energia befektetéssel, és kitartó tanulással, alázattal bármi lehet az emberből, csak nem szabad szem elől veszíteni a célt. A karriercélom viszonylag triviális: kezdő, junior fejlesztőből szeretnék eljutni a lehető legmagasabb szintre, a lehető legtöbb tudás birtokában. ',
  techStack: [
    'SiMongodb',
    'SiMysql',
    'SiNextdotjs',
    'SiReact',
    'SiPhp',
    'SiTypescript',
    'SiJavascript',
    'SiHtml5',
    'SiBootstrap',
    'SiCss3',
    'SiExpress',
    'SiCsharp',
    'SiDotnet',
    'SiGit',
    'SiGithub',
    'SiMaterialui',
    'SiNodedotjs',
    'SiFontawesome',
    'SiGitlab',
    'SiVisualstudiocode',
    'SiPostman',
    'SiXampp',
    'SiGitkraken',
    'SiSlack',
  ],
  projects: [
    {
      title: 'Jobify App',
      img: 'job_app.PNG',
      url: 'https://jobify-react-app.herokuapp.com/',
    },
    {
      title: 'Product App',
      img: 'product_app.PNG',
      url: 'https://reactproductapp.web.app/',
    },
    {
      title: 'Pizza App',
      img: 'pizza_app.PNG',
      url: 'https://reactpizzaapp.web.app/',
    },
    {
      title: 'Quotes App',
      img: 'quote_app.PNG',
      url: 'https://reactquoteproject.web.app/',
    },
  ],
};
