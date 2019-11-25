import React from 'react';

import Experience from './Experience';
import MetaHead from './MetaHead';
import Navbar from "./Navbar";
import Theme from "./Theme";
import Header from "./Header";

import 'normalize.css';
import './Portfolio.scss';
import Technologies from "./Technologies";
import Projects from './Projects';

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <MetaHead config={this.props.config}/>
        <Theme palette={this.props.config.palette}/>
        <Header config={this.props.config}/>
        <Navbar config={this.props.config}/>
        <Technologies technologies={this.props.config.technologies}/>
        <Experience experience={this.props.config.experience}/>
        <Projects projects={this.props.config.projects}/>
      </>
    );
  }
}

export default Portfolio;
