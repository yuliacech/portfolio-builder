import React from "react";

import TechLogo from './TechLogo';
import Experience from './Experience';

class Portfolio extends React.Component {
  render() {
    const subtitles = this.props.config.subtitle.map((subtitle, index) => <h3 key={index}>{subtitle}</h3>);
    const techLogos = this.props.config.technologies.logos.map(logo =>
      <TechLogo key={logo} logo={logo}/>);
    const techDescription = this.props.config.technologies.description.map((text, index) => <p key={index}>{text}</p>);
    const experience = this.props.config.experience.map((experience, index) =>
      <Experience key={index} experience={experience}/>);

    return (
      <>
        <section id="technologies">
          <div className="container text-center">
            <h1> {this.props.config.title} </h1>
            {subtitles}
            <h1>Technologies</h1>
            <div className="row">
              {techLogos}
            </div>
            <div className="row pt-3">
              <div className="col">
                {techDescription}
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <h1>Experience</h1>
            {experience}
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
