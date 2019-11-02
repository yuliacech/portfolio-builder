import React from "react";
import {Helmet} from "react-helmet";


class MetaHead extends React.Component {
  render() {
    const items = [];
    if (this.props.config.meta && this.props.config.meta.title) {
      items.push(<title> {this.props.config.meta.title}</title>);
    }
    if (this.props.config.meta && this.props.config.meta.description) {
      items.push(<meta name="description" content={this.props.config.meta.description}/>);
    }
    if (this.props.config.font && this.props.config.font.link) {

      items.push(<link href={this.props.config.font.link} rel="stylesheet"/>);
    }
    if (items.length > 0) {
      return (
        <Helmet>
          {items}
        </Helmet>
      );
    }
    return null;
  }
}

export default MetaHead;
