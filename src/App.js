import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              {/* Default route - redirect to homepage */}
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
