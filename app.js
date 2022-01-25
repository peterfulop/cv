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
                style={{ width: skill.force + "%" }}
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

class ContentSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let content = this.props.content;
    return (
      <div className="content-section p-3 p-md-5">
        <AboutMeSection about={content.about} />
        <SkillSection skill={content.skill} />
        <ExperienceSection exp={content.experience} />
        <AchivementSection ach={content.achivement} />
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

class SidebarSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div class="sidebar-section p-1 p-md-3"></div>;
  }
}

class CvHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="CvHeader"
        className="d-flex justify-content-between header pt-4 flex-wrap flex-sm-nowrap"
      >
        <div className="header-1 px-3 pe-0 w-100">
          <h1 id="name-heading" className="my-3">
            {this.props.name}
          </h1>
          <h3 className="p-2 bg-dark text-white mb-4" id="level-heading">
            {this.props.level + " " + this.props.place}
          </h3>
        </div>
        <div id="header-image" className="d-flex w-100 justify-content-center">
          <img
            id="header-image"
            src="../src/img/header-img.svg"
            alt="header-image"
          />
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
        <SidebarSection />
      </div>
    );
  }
}

class CvFooter extends React.Component {
  render() {
    return <div class="d-block footer bg-dark"></div>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { data };
  }

  render() {
    return (
      <div className="container my-5">
        <CvHeader
          name={this.state.data.name}
          level={this.state.data.level}
          place={this.state.data.place}
        />
        <CvBody data={this.state.data} />
        <CvFooter />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
