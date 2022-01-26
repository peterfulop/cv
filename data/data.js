const data = {
  name: "Fülöp Péter",
  level: "junior",
  place: "szoftverfejlesztő",
  birth: new Date("1993.08.17").toLocaleDateString(),
  country: "Hungary",
  city: "Körmend",
  avatar: "IMG_4232.jpg",
  education: {
    title: "Education",
    educations: [
      {
        school: "asd",
        technical: "sadasdsdadaw awdaw asd",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur exercitationem, animi et commodi ex nisi soluta doloremque nam accusamus unde!",
      },

      {
        school: "bdf",
        technical: "asdasd asdwda asd",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur exercitationem, animi et commodi ex nisi soluta doloremque nam accusamus unde!",
      },
    ],
  },
  expertise: {
    title: "Expertise",
    expertises: ["mySQL", "C#", "Javscript", "NodeJS", "React", "TeamWork"],
  },
  hobby: {
    title: "Hobbies",
    hobbies: [
      {
        title: "coding",
        icon: "fas fa-code",
      },
      {
        title: "photography",
        icon: "fas fa-camera-retro",
      },
      {
        title: "swimming",
        icon: "fas fa-swimmer",
      },
      {
        title: "hiking",
        icon: "fas fa-hiking",
      },
      {
        title: "cycling",
        icon: "fas fa-bicycle",
      },
      {
        title: "pizza",
        icon: "fas fa-pizza-slice",
      },
    ],
  },
  contact: {
    title: "Contacts",
    contacts: [
      {
        title: "email",
        data: "mrpeterfulop@gmail.com",
        icon: "fas fa-envelope",
        href: "mailto: mrpeterfulop@gmail.com",
      },
      {
        title: "phone",
        data: "+36306561900",
        icon: "fas fa-phone-alt",
        href: "tel:+36306561900",
      },
      {
        title: "location",
        data: "Hungary, Körmend",
        icon: "fas fa-map-marker-alt",
        href: "https://goo.gl/maps/nb1VupvEym9PHs6T9",
      },
    ],
  },
  social: {
    title: "Social",
    socials: [
      {
        title: "facebook",
        icon: "fab fa-facebook",
        link: "https://www.facebook.com/fulop.peter.10",
      },
      {
        title: "github",
        icon: "fab fa-github",
        link: "https://github.com/peterfulop",
      },
      {
        title: "linkedin",
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/peter-fulop",
      },
    ],
  },
  content: {
    about: {
      title: "About Me",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
    },
    skill: {
      title: "Skills",
      skills: [
        {
          name: "HTML",
          force: 70,
          icon: "fab fa-html5",
        },
        {
          name: "JavaScript",
          force: 50,
          icon: "fab fa-js-square",
        },
        {
          name: "Bootstrap",
          force: 40,
          icon: "fab fa-bootstrap",
        },
        {
          name: "CSS",
          force: 35,
          icon: "fab fa-css3-alt",
        },
        {
          name: "C#",
          force: 40,
          icon: "fab fa-windows",
        },
        {
          name: "NodeJS",
          force: 30,
          icon: "fab fa-node-js",
        },
        {
          name: "React",
          force: 20,
          icon: "fab fa-react",
        },
        {
          name: "PHP",
          force: 10,
          icon: "fab fa-php",
        },
      ],
    },
    experience: {
      title: "Work Experience",
      expreriences: [
        {
          position: "Job position",
          title: "Title Here",
          company: "Compnay",
          institute: "Institute Name",
          location: "Location of Country",
          from: 2010,
          to: 2014,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
        },
        {
          position: "Job position",
          title: "Title Here",
          company: "Compnay",
          institute: "Institute Name",
          location: "Location of Country",
          from: 2010,
          to: 2014,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
        },
        {
          position: "Job position",
          title: "Title Here",
          company: "Compnay",
          institute: "Institute Name",
          location: "Location of Country",
          from: 2010,
          to: 2014,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
        },
      ],
    },
    achivement: {
      title: "Achivements",
      achivements: [
        {
          award: "Your Award Name",
          company: "Company",
          institute: "Institute Name",
          location: "Location or Country",
          year: 2019,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
        },
        {
          award: "Your Award Name",
          company: "Company",
          institute: "Institute Name",
          location: "Location or Country",
          year: 2021,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
        },
      ],
    },
  },
};

export default data;
