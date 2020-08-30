import React from 'react';
import Portfolio from "./portfolio-components/Portfolio";
import config from "./config";
import './App.scss';

class App extends React.Component {

  render() {
    const portfolioConfig = config;
    return (
      <Portfolio config={portfolioConfig}/>
    );
  }
}

export default App;
