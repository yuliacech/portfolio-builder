import React from "react";
import './Header.scss'

class Header extends React.Component {
  render() {
    const subtitles = this.props.config.subtitles.map((subtitle, index) => <h2 key={index}>{subtitle}</h2>);
    return (<header>
      <div className="banner-text">
        <h1 className={"greeting"}>{this.props.config.greeting}</h1>
        <h1 className={"main-title"}>{this.props.config.mainTitle}</h1>
        {subtitles}
      </div>
    </header>);
  }
}

export default Header;
