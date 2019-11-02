import React from "react";
import './Position.css';

class Position extends React.Component {
  render() {
    const isCurrent = !this.props.experience.end;
    const end = isCurrent ? 'present' : `${this.props.experience.end.month} ${this.props.experience.end.year}`;
    let description = '';
    if (this.props.experience.description) {
      const listItems = this.props.experience.description.map((descriptionItem, index) =>
        <li key={index}>{descriptionItem}</li>);
      description = <ul>{listItems}</ul>;
    }
    const position = isCurrent ?
      <mark>{this.props.experience.position}</mark> : this.props.experience.position;

    const positionTitle = isCurrent ?
      <>
        <h2>{position} at <a href={this.props.experience.companyUrl}>
          {this.props.experience.company}</a>, {this.props.experience.location}</h2>
        <span>{this.props.experience.start.month} {this.props.experience.start.year} - {end}</span>
      </> :
      <>
        <h3>{position} at <a href={this.props.experience.companyUrl}>
          {this.props.experience.company}</a>, {this.props.experience.location}</h3>
        <span>{this.props.experience.start.month} {this.props.experience.start.year} - {end}</span>
      </>;

    return (
      <div className="position-container mb-4">
        {positionTitle}
        {description}
      </div>

    );
  }
}

export default Position;
