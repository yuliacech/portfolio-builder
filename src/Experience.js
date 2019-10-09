import React from "react";

class Experience extends React.Component {
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
      <mark>&nbsp;{this.props.experience.position}&nbsp;</mark> : this.props.experience.position;

    return (
      <div className="row mb-2">
        <div className="col-md-3">
          {this.props.experience.start.month} {this.props.experience.start.year} - {end}
        </div>
        <div className="col-md-9">
          {position} at <a href={this.props.experience.companyUrl}>
          {this.props.experience.company}</a>, {this.props.experience.location}
          {description}
        </div>
      </div>

    );
  }
}

export default Experience;
