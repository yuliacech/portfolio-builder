import React from "react";
import {renderToStaticMarkup} from "react-dom/server";

const config = {
  title: 'Hi, I am Yulia Čech, senior software developer and mentor',
    subtitle: [
  <span>As a <mark>&nbsp;developer&nbsp;</mark>, I enjoy creating responsive, interactive, modern web apps.</span>,
  <span>As a <mark>&nbsp;mentor&nbsp;</mark>, I am supporting other people on their path to become developers by sharing my knowledge and expertise.</span>
],
  technologies: {
  logos: ['php', 'javascript', 'angular', 'typescript', 'nodejs', 'postgresql'],
    description: [
    <span>I work intensively with <mark>&nbsp;Angular&nbsp;</mark>,
            <mark>&nbsp;TypeScript/JavaScript&nbsp;</mark>, <mark>&nbsp;HTML/SCSS&nbsp;</mark>,
            and implement websites for clients.</span>,
    <span>Other technologies, like <mark>&nbsp;NodeJS&nbsp;</mark>, <mark>&nbsp;PHP&nbsp;</mark>,
            <mark>&nbsp;Java&nbsp;</mark>, and <mark>&nbsp;PostgreSQL&nbsp;</mark>
            are part of my solid skills as well.</span>,
    'Be it at work or for my personal projects, I like to test new tools and learn about advances in web development.'
  ]
},
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
              in <b>Web Development</b> and <b>Engineering Immersion</b> programmes</span>
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
  palette: {
    main: '#607D8B'
  }
};


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
