import React from "react";
import './About.scss';

class About extends React.Component {
  render() {
    const paragraphs = this.props.about.text.map((paragraph, index) => <p key={index}>{paragraph}</p>);
    return <section id="about" className="about-container">
      <h1 className="mb-4">About me</h1>
      <div className="flex-container">
        <img src={this.props.about.image} alt="Profile picture"/>
        <div>
          {paragraphs}
        </div>
      </div>
    </section>
  }
}

export default About;
