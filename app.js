"use strict";
import data from "./data/data.js";

class AboutMeSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content__item mb-4">
        <ContentHeading title={this.props.about.title} />
        <div className="content__about-me">
          <div className="content-text">
            <p>{this.props.about.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

class SkillSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const skills = this.props.skill.skills;
    return (
      <div className="content__item mb-4">
        <ContentHeading title={this.props.skill.title} />
        {skills.map((skill) => {
          return <SkillItem skill={skill} />;
        })}
      </div>
    );
  }
}

class SkillItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const skill = this.props.skill;
    return (
      <div className="content__skills">
        <div className="skill-box d-flex justify-content-left mb-3">
          <div className="skill-box__icon item-icon d-flex justify-content-center me-3">
            <i className={skill.icon}></i>
          </div>
          <div className="skill-box__progress w-100">
            <p className="item-text">{skill.name}</p>
            <div className="progress">
              <div
                className="progress-bar bg-cadet"
                style={{
                  width: skill.force + "%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const experiences = this.props.exp.expreriences;
    return (
      <div className="content__item mb-4">
        <ContentHeading title={this.props.exp.title} />
        {experiences.map((exp) => {
          return <ExperienceItem exp={exp} />;
        })}
      </div>
    );
  }
}

class ExperienceItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const exp = this.props.exp;
    return (
      <div className="experince__item mb-5">
        <h5>
          {exp.position} / {exp.title}
        </h5>
        <p className="item-text__small mb-3">
          {exp.company} | {exp.institute} | {exp.location} - {exp.from}-{exp.to}
        </p>
        <p>{exp.text}</p>
      </div>
    );
  }
}

class AchivementSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const achivements = this.props.ach.achivements;
    return (
      <div className="content__item mb-4">
        <ContentHeading title={this.props.ach.title} />
        {achivements.map((ach) => {
          return <AchivementItem ach={ach} />;
        })}
      </div>
    );
  }
}

class AchivementItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ach = this.props.ach;
    return (
      <div className="achivements-element mb-5">
        <div className="achivements-header d-flex justify-content-left mb-3">
          <div className="item-icon achivements-icon d-flex justify-content-center align-items-center me-3">
            <i className="fas fa-award"></i>
          </div>
          <div className="achivements-text d-flex flex-column justify-content-left">
            <p className="item-text__heading">{ach.award}</p>
            <p className="item-text__small">
              {ach.company} | {ach.institute} | {ach.location} - {ach.year}
            </p>
          </div>
        </div>
        <p className="item-text__italic">{ach.text}</p>
      </div>
    );
  }
}

class ContentHeading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content-header d-flex justify-content-left pt-2 mb-3">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

class ContentSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let content = this.props.content;
    return (
      <div className="content-section p-3 p-md-5 me-0 me-md-3">
        <AboutMeSection about={content.about} />
        <SkillSection skill={content.skill} />
        <ExperienceSection exp={content.experience} />
        <AchivementSection ach={content.achivement} />
      </div>
    );
  }
}

class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const path = `./src/img/${this.props.profile.avatar}`;
    return (
      <div className="sidebar mx-2">
        <div className="avatar-box d-flex justify-content-center">
          <img id="avatar-img" src={path} alt="avatar" />
        </div>
        <div className="d-flex justify-content-center p-2 bg-secondary">
          <div className="d-flex justify-content-center align-items-center me-2">
            <i className="fas fa-birthday-cake"></i>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="item-text__heading">{this.props.profile.birth}</p>
          </div>
        </div>
      </div>
    );
  }
}

class EducationSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const educations = this.props.education.educations;
    return (
      <div className="sidebar mx-2">
        <SidebarHeading title={this.props.education.title} />
        {educations.map((edu) => {
          return <EducationItem edu={edu} />;
        })}
      </div>
    );
  }
}

class EducationItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const edu = this.props.edu;
    return (
      <div className="sidebar__education">
        <div className="sidebar__item sidebar-education d-block justify-content-left p-3 my-2">
          <p className="item-text__heading">{edu.school}</p>
          <p className="item-text">{edu.technical}</p>
          <p className="item-text__small">{edu.text}</p>
        </div>
      </div>
    );
  }
}

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const contacts = this.props.contact.contacts;
    return (
      <div className="sidebar mx-2">
        <SidebarHeading title={this.props.contact.title} />
        {contacts.map((con) => {
          return <ContactItem con={con} />;
        })}
      </div>
    );
  }
}

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const con = this.props.con;
    return (
      <a href={con.href} className="sidebar__contact">
        <div className="sidebar__item sidebar-contact d-flex justify-content-left p-3">
          <div className="item-icon d-flex justify-content-center align-items-center me-2">
            <i className={con.icon}></i>
          </div>
          <div className="item-text d-flex flex-column justify-content-center align-content-center">
            <p className="item-text__heading">{con.title}</p>
            <p className="item-text__link contact_data">{con.data}</p>
          </div>
        </div>
      </a>
    );
  }
}

class ExpertiseSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const expertises = this.props.expertise.expertises;
    return (
      <div className="sidebar mx-2">
        <SidebarHeading title={this.props.expertise.title} />
        <ul class="sidebar__item pt-2">
          {expertises.map((exp) => {
            return (
              <li class="item-text__heading expertise-item py-1">{exp}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class HobbySection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const hobbies = this.props.hobby.hobbies;
    return (
      <div className="sidebar mx-2">
        <SidebarHeading title={this.props.hobby.title} />
        <div className="sidebar__item d-flex flex-wrap justify-content-center py-3 my-2">
          {hobbies.map((hobby) => {
            return (
              <div className="hobby-box" title={hobby.title}>
                <i className={hobby.icon}></i>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class SidebarHeading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sidebar__item sidebar-header d-flex justify-content-left pt-2">
        <h2 class="text-white">{this.props.title}</h2>
      </div>
    );
  }
}

class SocialSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const socials = this.props.social.socials;
    return (
      <div className="sidebar mx-2">
        <SidebarHeading title={this.props.social.title} />
        {socials.map((soc) => {
          return <SocialItem soc={soc} />;
        })}
      </div>
    );
  }
}

class SocialItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const soc = this.props.soc;
    return (
      <a href={soc.link} target="blank" className="sidebar__social">
        <div className="sidebar__item sidebar-social d-flex justify-content-left p-3">
          <div className="item-icon d-flex justify-content-center align-items-center me-2">
            <i className={soc.icon}></i>
          </div>
          <div className="item-text d-flex flex-column justify-content-center align-content-center">
            <p className="item-text__heading">{soc.title}</p>
            <p className="item-text__link">
              /{soc.link.split("/")[soc.link.split("/").length - 1]}
            </p>
          </div>
        </div>
      </a>
    );
  }
}

class SidebarSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="sidebar-section p-1 p-md-3">
        <ProfileSection profile={this.props.data} />
        <EducationSection education={this.props.data.education} />
        <ContactSection contact={this.props.data.contact} />
        <ExpertiseSection expertise={this.props.data.expertise} />
        <HobbySection hobby={this.props.data.hobby} />
        <SocialSection social={this.props.data.social} />
      </div>
    );
  }
}

//#region ROOT
class CvHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="CvHeader"
        className="d-flex justify-content-between header flex-wrap flex-sm-nowrap mb-3"
      >
        <div className="header-1 px-3 pe-0">
          <h1 id="name-heading" className="my-3">
            {this.props.name}
          </h1>
          <h3 className="p-2 bg-dark text-white mb-4" id="level-heading">
            {this.props.level + " " + this.props.place}
          </h3>
        </div>
        <div
          id="header-icons"
          className="d-flex flex-wrap justify-content-center align-items-center"
        >
          <i id="header-icon" className="fas fa-code"></i>
          <i id="header-icon" className="fas fa-code"></i>
          <i id="header-icon" className="fas fa-code"></i>
          <i id="header-icon" className="fas fa-code"></i>
        </div>
      </div>
    );
  }
}

class CvBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="CvBody" className="d-flex flex-wrap flex-md-nowrap">
        <ContentSection content={this.props.data.content} />
        <SidebarSection data={this.props.data} />
      </div>
    );
  }
}
//#endregion

//#region APP
class App extends React.Component {
  constructor() {
    super();
    this.state = { data };
  }

  render() {
    return (
      <div id="App" className="container p-5 my-0 my-sm-5">
        <CvHeader
          name={this.state.data.name}
          level={this.state.data.level}
          place={this.state.data.place}
        />
        <CvBody data={this.state.data} />
      </div>
    );
  }
}
//#endregion

ReactDOM.render(React.createElement(App), document.getElementById("root"));
