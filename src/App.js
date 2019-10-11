import React from 'react';
import Layout from "./Layout";
import Portfolio from "./Portfolio";
import config, {configToString} from "./config";
import './App.css';

class App extends React.Component {

  render() {
    const portfolioConfig = config;
    const configString = configToString(portfolioConfig);
    document.documentElement.style.setProperty('--theme-primary-color', portfolioConfig.palette.main);

    return (
      <Layout content={[
        <Portfolio config={portfolioConfig}/>
        , <pre>{configString}</pre>]}/>
    );
  }
}

export default App;
