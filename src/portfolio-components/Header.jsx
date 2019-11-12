import React from "react";
import './Header.scss'

class Header extends React.Component {
  render() {
    const titles = this.props.config.title.map((title, index, array) => <h1 key={index}>{title}</h1>);
    const subtitles = this.props.config.subtitle.map((subtitle, index) => <h2 key={index}>{subtitle}</h2>);
    return (<header>
      <div className="banner-text">
        {titles}
        {subtitles}
      </div>
    </header>);
  }
}

export default Header;
