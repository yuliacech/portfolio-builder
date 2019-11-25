import React from "react";
import './Navbar.scss';
import Scrollspy from 'react-scrollspy';

class Navbar extends React.Component {
  render() {
    const links = [];
    const ids = [];
    ['technologies', 'experience', 'projects', 'contact'].forEach((linkName, index) => {
      if (this.props.config.hasOwnProperty(linkName)) {
        links.push(getLinkHtml(linkName, index));
        ids.push(linkName);
      }
    });


    return (
      <nav className={"navbar"}>
        <Scrollspy items={ids} currentClassName="active" className={"navbar-nav"}>
          {links}
        </Scrollspy>
      </nav>
    );


  }


}

function getLinkHtml(linkName, index) {
  return <li className={"nav-item"} key={index}>
    <a className={'nav-link'} href={'#' + linkName}>{linkName}</a>
  </li>;
}

export default Navbar;
