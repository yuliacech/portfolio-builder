import React from "react";
import './Header.scss'

class Header extends React.Component {
  render() {
    const subtitles = this.props.config.subtitle.map((subtitle, index) => <h2 className="mb-2" key={index}>{subtitle}</h2>);
    return (<header>
      <div className="banner-text">
        <h1 className="mb-2"> {this.props.config.title} </h1>
        {subtitles}
      </div>
    </header>);
  }
}
export default Header;
