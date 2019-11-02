import React from "react";
import Position from './Position';

class Experience extends React.Component {
  render() {
    const positions = this.props.experience.map((experience, index) =>
      <Position key={index} experience={experience}/>);

    return (<section id="experience">
        <h1 className="mb-4">Experience</h1>
        {positions}
    </section>);
  }
}

export default Experience;
