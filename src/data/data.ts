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
        EN: 'Péter Fülöp',
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
        HU: 'Fülöp Péter vagyok, $age$ éves. Vas megyében, egy Körmend nevű kisvárosban lakom. Van tapasztalatom mint gépésztechnikus, CAD-tervező, fotós, és szoftverfejlesztő. Mindig is érdekelt az automatizálás, a programozás és a dolgok egyszerűsítése. Korábbi munkáim során lehetőségem nyílt a folyamatok egyszerűsítésére kisebb automatizálások bevezetésével. Kezdetben excel makrókat használtam, később elkezdtem tanulni a VBA-ról és a userForms-ról. Létrehoztam ár- és ajánlatkalkulátorokat, készletkezelő alkalmazást, vágásoptimalizáló alkalmazást, illetve komplex vállalat rendszeren is dolgoztam, a cég projektjeinek lebonyolítására, megrendelések, ügyfelek, partnerek, szállítmányozás kezelésére. Később önállóan kezdtem el tanulni a webfejlesztést és a programozás alapjait, majd egy 2 éves suli után szoftverfejlesztőként végeztem.',
        EN: 'My name is Péter Fülöp, I am $age$ years old. I live in a small town, named Körmend, in Vas county. I have working experiences as a mechanical technician, CAD-designer, and photographer as well. I have always been interested in automatization, programming, and simplifying things. During my previous jobs, I had the opportunity to simplify processes by introducing small automations. Initially, I used excel macros, later I started to learn about VBA and userForms. I created price and offer calculators, inventory management application, cutting optimizer app, respectively I was working on a complex company management system as well, for handle the projects of the company, for manage the orders, clients, partners, and deliveries. Later, I started learning web development and the basics of programming on my own, and after 2 years of school, I graduated as a software developer.',
      },
    },
  },
  education: {
    title: { HU: 'Tanulmányok', EN: 'Education' },
    data: [
      {
        school: { HU: 'UDEMY', EN: 'UDEMY' },
        technical: {
          HU: 'Önfejlesztő kurzusok',
          EN: 'Self-development courses',
        },
        text: {
          HU: 'NodeJS, MongoDB, GraphQL, TypeScipt, React, JavaScript, C# LINQ, MySQL...',
          EN: 'NodeJS, MongoDB, GraphQL, TypeScipt, React, JavaScript, C# LINQ, MySQL...',
        },
      },
      {
        school: {
          HU: 'Vas Megyei SZC Rázsó Imre Technikum',
          EN: 'Vas Megyei SZC Rázsó Imre Vocational School',
        },
        technical: {
          HU: 'Szoftverfejlesztő - 2020-2022',
          EN: 'Software developer - 2020-2022',
        },
        text: {
          HU: 'Fő programozási nyelvként C#-ot tanultunk. Készítettünk néhány konzolalkalmazást, tanultunk a WPF-ről és egyszerű grafikus alkalmazásokat fejlesztettünk. Ezen kívül megismerkedtünk a különböző adatbázisokkal, mint például az MSSQL, MySQL, és kicsit elmélyültünk a webfejlesztésben JavaScript és PHP segítségével.',
          EN: 'We learned C# as our main programming language. We made some console applications, learned about WPF and developed simple graphical applications. In addition, we learned about different databases, such as MSSQL, MySQL, and we delved a bit into web development using JavaScript and PHP.',
        },
      },
      {
        school: {
          HU: 'Gépipari Informatikai és Műszaki Szakközépiskola',
          EN: 'Mechanical Industry and IT Technical Vocational School',
        },
        technical: {
          HU: 'Gépésztechnikus / CAD-tervező / CNC forgácsoló - 2012-2014',
          EN: 'Mechanical technician / CAD-designer / CNC cutter - 2012-2014',
        },
        text: {
          HU: 'Érettségi után 2 év technikum. Gépésztechnikus alapok, műszaki rajzolás, CAD, CNC és hagyományos anyagmegmunkálási technikák.',
          EN: '2 years of technical school after graduation. Mechanical engineering basics, technical drawing, CAD, CNC and traditional material processing techniques.',
        },
      },
    ],
  },
  expertise: {
    title: { HU: 'Erősségek', EN: 'Expertise' },
    data: [
      'Backend heavy full-stack development',
      'React',
      'GraphQL',
      'NodeJS',
      'Typescript',
    ],
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
      HU: 'Soft skillek',
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
          HU: 'Szoftverfejlesztő',
          EN: 'Software Developer',
        },
        title: {
          HU: 'Junior fullstack webfejlesztő',
          EN: 'Junior fullstack web developer',
        },
        company: { HU: 'Coding Sans', EN: 'Coding Sans' },
        location: 'Budapest',
        from: 2022,
        to: 2023,
        text: {
          HU: 'Belső aukciós szoftver és online árverés platform fejlesztésében való részvétel. Agilis fejlesztés csapatban, Jira ticket management. Felhasznált technológiák: Node.js, NextJS, PostgreSQL, Apollo & GraphQL, RabbitMQ, Redis.',
          EN: 'Participation in the development of internal auction software and online auction platform. Agile development in a team, Jira ticket management. Used technologies: Node.js, NextJS, PostgreSQL, Apollo & GraphQL, RabbitMQ, Redis.',
        },
      },
      {
        position: { HU: 'Fotográfus', EN: 'Photographer' },
        title: { HU: '', EN: '' },
        company: { HU: 'Egyéni vállalkozás', EN: 'Self-employed' },
        location: '',
        from: 2020,
        to: 2022,
        text: {
          HU: 'Főállásban egyéni vállalkozó fotós.',
          EN: 'Full-time self-employed photographer.',
        },
      },
      {
        position: { HU: 'CAD rajzoló', EN: 'CAD designer' },
        title: { HU: '', EN: '' },
        company: {
          HU: 'Breitenbach Kft.',
          EN: 'Breitenbach Kft.',
        },
        location: 'Körmend',
        from: 2017,
        to: 2020,
        text: {
          HU: 'Főbb feladataim közé tartozott acélszerkezetek, lépcsők, csarnokok tervezésében való aktív részvétel, tervek gyártásra történő előkészítése, anyagrendelés, munka optimalizálás. Önszorgalomból kisebb, informatikai jellegű problémák feltárása, megoldása, folyamat automatizálás.',
          EN: 'My main tasks included active participation in the design of steel structures, stairs, and halls, preparation of production plans, material ordering, work optimization. Exploration and solution of minor IT-related problems, process automation.',
        },
      },
      {
        position: { HU: 'KVP Team', EN: 'KVP Team' },
        title: {
          HU: 'Folyamatfejlesztés, optimalizálás',
          EN: 'Process development, optimization',
        },
        company: {
          HU: 'Ada Hungária Bútorgyár Kft.',
          EN: 'ADA Hungária Kft. Furniture Industry',
        },
        location: 'Körmend',
        from: 2017,
        to: 2016,
        text: {
          HU: 'Termelési folyamatok segítése, gyorsítása, folyamatleírások készítése, anyag  kihozatali tényezők felülvizsgálata, javítása, munkakörnyezet optimalizálása.',
          EN: 'Assisting and speeding up production processes, creating process descriptions, reviewing and improving material emission factors, optimizing the work environment.',
        },
      },
      {
        position: { HU: 'CAD rajzoló', EN: 'CAD designer' },
        title: { HU: '', EN: '' },
        company: {
          HU: 'Ada Hungária Bútorgyár Kft.',
          EN: 'ADA Hungária Kft. Furniture Industry',
        },
        location: 'Körmend',
        from: 2017,
        to: 2014,
        text: {
          HU: 'Műszaki rajzok készítése a termelés számára. 3D összeállítások készítése az egyes bútorokról, amik az összeszerelést, illetve a 	tervezést segítették.',
          EN: 'Preparation of technical drawings for production. Making 3D assemblies of the individual pieces of furniture, which helped with assembly and planning.',
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
          HU: 'Belső aukciós alkalmazás - Tömeges tétel importálás',
          EN: 'Internal Auction Application - Bulk item upload',
        },
        company: 'Coding Sans',
        institute: '',
        location: 'Körmend',
        year: 2020,
        text: {
          HU: 'Tömeges tétel importálás funkció excel fileból. A felhasználónak lehetősége volt előre meghatározott séma alapján excel file-ból (.xls, .xlsx, .ods) adatokat importálni az adatbázisba. Az excel fileok feltöltést megelelőzően tárolásra kerültek egy AWS Bucketben, ahonnan a beolvasás történt. 4 lépcsős validációs protokoll előzte meg a feldolgozást, ahol egy szervíz vizsgálta a feltöltött file-t formailag, illetve tartalmailag. Ellenőrzésre kerültek az oszlop nevek, az oszlopokhoz tartózó adatok, melyeknek az adatbázisban meghatározott formai követelményeknek kellett megfelelniük. Vizsgálta szükséges esetben a duplikációkat, illetve minden, adatbázisra hivatkozó adat létezése ellenőrzésre került. A hibák logolására soronként is volt lehetőség, így a felhasználó pontosan láthatta, hogy a feltöltött excel táblázat hányadik sorában mi volt a hiba. A felhasználónak lehetősége volt üres template-et generáltatni a sablon alapján, aminek fejlécei megfeleltek a formai követelményeknek.',
          EN: 'Bulk item import function from excel file. The user had the opportunity to import data from an excel file (.xls, .xlsx, .ods) into the database based on a predefined schema. Before uploading, the excel files were stored in an AWS Bucket, from which they were scanned. The processing was preceded by a 4-step validation protocol, where a service examined the uploaded file in terms of form and content. The column names and the data associated with the columns were checked, which had to meet the formal requirements defined in the database. If necessary, it examined duplications, and the existence of all data referring to the database was verified. It was also possible to log the errors per line, so the user could see exactly how many rows of the uploaded excel table contained the error. The user had the opportunity to generate an empty template based on the schema, the headers of which met the formal requirements.',
        },
      },
      {
        award: {
          HU: 'Project Manager program',
          EN: 'Project Manager App',
        },
        company: 'Breitenbach Kft.',
        institute: '',
        location: 'Körmend',
        year: 2020,
        text: {
          HU: 'Komplex, mini vállalat irányíti belső rendszer, a futó projektek vezetésére, megrendelések kezelésére, partnercégek és dolgozók adatainak nyilvántartására, kiszállítások szervezésére, részlegenkéti testreszabható szerepkörökkel. Automatikus megrendelő PDF-ek generálása, és email küldése. Megvalósítás Excel VBA-ban, UserForm UI grafikus felülettel.',
          EN: 'A complex, company-managed internal system for managing running projects, orders, registering partner companies and employees data, organizing deliveries, with customizable roles for each department. Automatic generation of order PDFs and sending of emails. Implemented in Excel VBA and Userform UI.',
        },
      },
      {
        award: {
          HU: 'CutPro, szálanyag kalkulációs program',
          EN: 'CutPro, cutting optimizer app',
        },
        company: 'Breitenbach Kft.',
        institute: '',
        location: 'Körmend',
        year: 2019,
        text: {
          HU: 'Az acélgyártás anyagigény felmérésére készült megoldás, mely az ismert anyaghosszok, és keresztmetszetek alapján kalkulált várható anyagigényt a rendeléshez, illetve a gyártás számára vágási listát exportált PDF formátumban. Lehetőségünk volt megadni a szálankénti minimális maradékot, a vágási lapvastagságot. Az adatokat a program excel formátumból importálta, és béta verzióban képes volt meglévő raktárkészlet anyagaiból is kalkulálni. A megoldás Excelben, VBA implementálással készült, formok segítségével.',
          EN: 'A solution for assessing the material requirements of steel production, which calculated the expected material requirements for the order based on the known material lengths and cross-sections, and exported a cutting list for the production in PDF format. We had the opportunity to specify the minimum residue per thread, the cutting sheet thickness. The data was imported from the program in excel format, and in the beta version it was also able to calculate from existing stock. Implemented in Excel VBA and Userform UI.',
        },
      },
      {
        award: {
          HU: 'Raktárkészlet program',
          EN: 'Warehouse stock app',
        },
        company: 'Breitenbach Kft.',
        institute: '',
        location: 'Körmend',
        year: 2018,
        text: {
          HU: 'Egyszerű raktárkészlet nyilvántartó program készítése volt a cél, ami lehetővé teszi a beérkező termékek (kötőelemek, pántok, faanyagok) leltározását. Kritikusan alacsony raktárkészlet esetén figyelmeztette a használót, hogy melyik termékekből szükséges rendelést leadni. A raktárból történő kivételezés is nyomon követésre került: ki, mikor, mit, és milyen projektszámra vitte ki az adott termékeket. Lehetőség volt összegző kimutatás készítésére, PDF generálással. A megoldás Excelben, VBA implementálással készült, formok segítségével.',
          EN: 'The goal was to create a simple stock register program, which enables the inventory of incoming products (fasteners, straps, wood materials). In case of critically low inventory, it warned the user which products needed to be ordered. The removal from the warehouse was also tracked: who, when, what, and for which project number the given products were removed. It was possible to create a summary statement, with PDF generation. Implemented in Excel VBA and Userform UI.',
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
          EN: 'The development of large-scale material extraction in the field of furniture production and sponge processing. The point is that by taking into inventory the surplus products left over from the daily production, the already inventoried items were removed from the next production list. The production list came in a .csv file from the database, which, after combing with the current inventory, sent a new, modified list to the sponge cutting machine. Implemented in Excel VBA and Userform UI.',
        },
      },
    ],
  },
  languages: {
    title: { HU: 'Nyelvek', EN: 'Languages' },
    data: [
      {
        language: { HU: 'angol', EN: 'english' },
        level: { HU: 'Alapszintű nyelvismeret', EN: 'Basic language skills' },
        exam: { HU: '-', EN: '-' },
        force: 3,
        write: 60,
        read: 70,
        speak: 40,
      },
      {
        language: { HU: 'német', EN: 'German' },
        level: {
          HU: 'Alapfokú, C-típusú nyelvvizsga',
          EN: 'Basic, C-type language exam',
        },
        exam: { HU: 'alapfokú C', EN: 'elementary C' },
        force: 4,
        write: 70,
        read: 70,
        speak: 70,
      },
    ],
  },
  motivation: '',
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
