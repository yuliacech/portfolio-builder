import React from "react";
import angular from '../logos/angular.svg';
import javascript from '../logos/javascript.svg';
import typescript from '../logos/typescript.svg';
import nodejs from '../logos/nodejs.svg';
import php from '../logos/php.svg';
import postgres from '../logos/postgres.gif';
import rxjs from '../logos/rxjs.svg';
import react from '../logos/react.svg';
import './TechLogo.css';

export class TechLogo extends React.Component {
  render() {
    switch (this.props.logo) {
      case 'angular':
        return (
          <div className="tech-logo">
            <img alt="Logo of Angular framework" src={angular} title="Angular"/>
          </div>
        );

      case 'react':
        return (
          <div className="tech-logo">
            <img alt="Logo of React framework" src={react} title="React"/>
          </div>
        );
      case 'typescript':
        return (
          <div className="tech-logo px-1-5">
            <img alt="Logo of TypeScript programming language" className="img-fluid"
                 src={typescript} title="TypeScript"/>
          </div>
        );
      case 'php':
        return (
          <div className="tech-logo">
            <img alt="Logo of PHP" src={php} title="PHP"/>
          </div>
        );
      case 'javascript':
        return (
          <div className="tech-logo px-1-5">
            <img alt="Logo of JavaScript programming language" src={javascript}
                 title="JavaScript"/>
          </div>
        );
      case 'nodejs':
        return (
          <div className="tech-logo">
            <img alt="Logo of NodeJS platform" className="img-fluid" src={nodejs}
                 title="NodeJS"/>
          </div>
        );
      case 'postgresql':
        return (
          <div className="tech-logo">
            <img alt="Logo of PostgreSQL database" className="img-fluid" src={postgres}
                 title="PostgreSQL"/>
          </div>
        );

      case 'rxjs':
        return (
          <div className="tech-logo">
            <img alt="Logo of RxJS" className="img-fluid" src={rxjs}
                 title="RxJS"/>
          </div>
        );
      default:
        return null;
    }
  }
}

export default TechLogo;
