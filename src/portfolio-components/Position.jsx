import React from "react";

class Position extends React.Component {
  render() {
    const isCurrent = !this.props.experience.end;
    const startDate = isCurrent ? `${this.props.experience.start.month} ${this.props.experience.start.year}`
      : this.props.experience.start.year;
    let description = '';
    if (this.props.experience.description) {
      const listItems = this.props.experience.description.map((descriptionItem, index) =>
        <li key={index}>{descriptionItem}</li>);
      description = <ul>{listItems}</ul>;
    }
    const position = isCurrent ?
      <b>{this.props.experience.position}</b> : this.props.experience.position;

    const positionTitle =
      <div>
        {position}
        <br/>
        @ <a href={this.props.experience.companyUrl}>
        {this.props.experience.company}</a>, {this.props.experience.location}
      </div>;

    return (
      <li className={`position-container ${isCurrent ? 'current' : ''}`} data-date={startDate}>
        {positionTitle}
        {description}
      </li>

    );
  }
}

export default Position;
