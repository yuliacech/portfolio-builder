import React from 'react';
import Portfolio from "./portfolio-components/Portfolio";
import config from "./config";
import './App.scss';

class App extends React.Component {

  render() {
    const portfolioConfig = config;
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
