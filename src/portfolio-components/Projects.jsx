import React from 'react';
import './Projects.scss';

class Projects extends React.Component {
  render() {
    const projects = this.props.projects.map((project, index) => {
      const links = [<a key={1} className="project-link" href={project.demo} rel="noopener noreferrer" target="_blank">See live
        demo</a>];
      if (project.frontend) {
        links.push(<a key={links.length + 1} className="project-link" href={project.frontend} rel="noopener noreferrer" target="_blank">Frontend
          code</a>)
      }
      if (project.backend) {
        links.push(<a key={links.length + 1} className="project-link" href={project.backend} rel="noopener noreferrer" target="_blank">Backend
          code</a>)
      }
      if (project.code) {
        links.push(<a key={links.length + 1} className="project-link" rel="noopener noreferrer" href={project.code} target="_blank">Code</a>)
      }

      const stackList = project.stack.map((stack, index) => <span key={index}>{stack}</span>);

      return <div className="project-container mb-4" key={index}>
        <h3>{project.title}</h3>
        <div className="project-stack-container">{stackList}</div>
        <div className="project-links-container">
          {links}
        </div>
        <div className="project-description-container">
          <img src={project.screenshot} alt={'Screenshot for project ' + project.title}/>
          <p>
            {project.description}
          </p>
        </div>
      </div>;
    });
    return (
      <section id="projects">
        <h1 className="mb-4">Projects</h1>
        {projects}
      </section>
    );
  }
}

export default Projects;

