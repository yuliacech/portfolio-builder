import React from "react";

export class TechLogo extends React.Component {
  render() {
    switch (this.props.logo) {
      case 'angular':
        return (
          <div className="col-sm-6 col-md-2 order-md-1">
            <div className="tech-logo h-100 m-auto p-2">
              <img alt="Logo of Angular framework" src="assets/img/tech_logos/angular.svg" title="Angular"/>
            </div>
          </div>
        );
      case 'typescript':
        return (
          <div className="col-sm-6 col-md-2 order-md-2">
            <div className="tech-logo h-100 m-auto p-4">
              <img alt="Logo of TypeScript programming language" className="img-fluid"
                   src="assets/img/tech_logos/typescript.svg" title="TypeScript"/>
            </div>
          </div>
        );
      case 'php':
        return (
          <div className="col-sm-6 col-md-2">
            <div className="tech-logo h-100 m-auto p-2">
              <img alt="Logo of PHP" src="assets/img/tech_logos/php.svg" title="PHP"/>
            </div>
          </div>
        );
      case 'javascript':
        return (
          <div className="col-sm-6 col-md-2">
            <div className="tech-logo h-100 m-auto p-4">
              <img alt="Logo of JavaScript programming language" src="assets/img/tech_logos/javascript.svg"
                   title="JavaScript"/>
            </div>
          </div>
        );
      case 'nodejs':
        return (
          <div className="col-sm-6 col-md-2 order-md-3">
            <div className="tech-logo h-100 m-auto p-2">
              <img alt="Logo of NodeJS platform" className="img-fluid" src="assets/img/tech_logos/nodejs.svg"
                   title="NodeJS"/>
            </div>
          </div>
        );
      case 'postgresql':
        return (
          <div className="col-sm-6 col-md-2 order-md-4">
            <div className="tech-logo h-100 m-auto p-2">
              <img alt="Logo of PostgreSQL database" className="img-fluid" src="assets/img/tech_logos/postgres.gif"
                   title="PostgreSQL"/>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

export default TechLogo;
