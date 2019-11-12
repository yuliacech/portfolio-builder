import React from "react";
import {renderToStaticMarkup} from "react-dom/server";

const config = {
    meta: {
      title: 'Yulia Čech (Ichin-Norbu), software developer and mentor',
      description: 'Yulia Čech | Full stack / Angular web developer portfolio'
    },
    title: ['I am Yulia Čech', 'software developer and mentor'],
    subtitle: ['full stack expert specialized in Angular', 'creating web apps since 2014'],
    technologies: {
      logos: ['angular', 'rxjs', 'javascript', 'typescript', 'react', 'nodejs'],
      description:
        [
          <span>I work intensively with <mark>Angular</mark> and <mark>RxJS</mark>, <mark>TypeScript/JavaScript</mark>, <mark>HTML/SCSS</mark> and
            implement highly dynamic, interactive applications. <br/>Other technologies,
            like <mark>React</mark>, <mark>NodeJS</mark>, <mark>PHP</mark>, <mark>Java</mark> and <mark>PostgreSQL</mark> are
            part of my solid skills as well.</span>]
    }
    ,
    experience: [
      {
        start: {
          month: 'October',
          year: 2018
        },
        position: 'Senior Frontend Developer',
        company: 'Cocomore AG',
        companyUrl: 'https://cocomore.com/',
        location: 'Germany',
        description: [
          <span><b>Frontend Project Lead</b>  in a long-term internal project</span>,
          <span>working fully <b>remote</b> in a distributed team</span>,
          <span>developing a large <b>Angular</b> application for communication and collaboration</span>
        ]
      },
      {
        start: {
          month: 'July',
          year: 2018
        },
        position: 'Mentor',
        company: 'Thinkful',
        companyUrl: 'https://thinkful.com/',
        location: 'USA',
        description: [
          <span>1-on-1 video sessions with students
              in <b>Web Development</b> and <b>Engineering Immersion</b> programmes</span>,
          <span>delivering <b>code reviews</b> on demo and capstone projects</span>,
          <span>leading pair programming sessions with students</span>
        ]
      },
      {
        start: {
          month: 'April',
          year: 2016
        },
        end: {
          month: 'September',
          year: 2018
        },
        position: 'Software Developer',
        company: 'Jules Bordet Institute',
        companyUrl: 'https://ctsu.bordet.be/',
        location: 'Belgium'
      },
      {
        start: {
          month: 'July',
          year: 2015
        },
        end: {
          month: 'March',
          year: 2016
        },
        position: 'Junior Software Developer',
        company: 'Rhenus SE & CO. KG',
        companyUrl: 'http://www.rhenus.com/en/',
        location: 'Germany'
      },
      {
        start: {
          month: 'October',
          year: 2014
        },
        end: {
          month: 'June',
          year: 2015
        },
        position: 'Junior Software Developer',
        company: 'PlagScan GmbH',
        companyUrl: 'https://www.plagscan.com/en/',
        location: 'Germany'
      }
    ],
    palette:
      {
        '--theme-primary-color': '#6F3D7F',
        '--theme-primary-text-color': '#494949',
        '--theme-primary-text-color-rgb': '73,73,73',
        '--theme-accent-text-color': '#fff',
        '--theme-accent-text-color-rgb': '255,255,255'
      }
    ,
    font: {
      name: '\'Open Sans\', sans-serif',
      link: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap'
    }
  }
;


export function configToString(config, level = 1, indent = '  ', newLine = '\n') {
  const isArray = Array.isArray(config);
  let result = indent.repeat(level - 1);
  result += isArray ? '[' : '{';
  result += newLine;
  Object.keys(config).forEach(key => {
    const value = config[key];
    result += `${indent.repeat(level)}`;
    result += isArray ? '' : `${key}:`;
    if (typeof value === 'object') {
      if (React.isValidElement(value)) {
        result += '"' + renderToStaticMarkup(value) + '"';
      } else {
        const append = newLine + configToString(value, level + 1);
        result += append;
      }
    } else {
      result += JSON.stringify(value);
    }
    result += isArray ? ',' : ';';
    result += newLine;
  });
  result += indent.repeat(level - 1);
  result += isArray ? ']' : '}';
  return result;
}

export default config;
