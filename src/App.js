import React from 'react';
import Layout from "./Layout";
import Portfolio from "./portfolio-components/Portfolio";
import config, {configToString} from "./config";
import './App.scss';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class App extends React.Component {

  render() {
    const portfolioConfig = config;
    const configString = configToString(portfolioConfig);
    return (
      /*
      <Router>
        <Switch>
          <Route path="/fullscreen">
            <Portfolio config={portfolioConfig}/>
          </Route>
          <Route path="/">
            <Layout content={[
              <Portfolio config={portfolioConfig}/>,
              <>
                <pre>{configString}</pre>
                <Link to="/fullscreen">Fullscreen</Link>
              </>
            ]}/>
          </Route>
        </Switch>
      </Router>
      */
      <Portfolio config={portfolioConfig}/>
    );
  }
}

export default App;
