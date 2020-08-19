import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import store from './redux/store';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/shop">
                  <ShopPage />
                </Route>
                {/* Default route - redirect to homepage */}
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </Layout>
          </BrowserRouter>
        </Provider>
      </header>
    </div>
  );
}

export default App;
