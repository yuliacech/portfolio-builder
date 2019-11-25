import React from "react";
import TechLogo from "./TechLogo";
import './Technologies.scss';

class Technologies extends React.Component {

  render() {
    const techLogos = this.props.technologies.logos.map(logo =>
      <TechLogo key={logo} logo={logo}/>);
    const techDescription = this.props.technologies.description.map((text, index) => <p key={index}>{text}</p>);

    return <section id="technologies">
      <h1>Technologies</h1>
      <div className="tech-container">
        {techLogos}
      </div>
      <div className="tech-description">
        {techDescription}
      </div>
    </section>
  }
}

export default Technologies;
