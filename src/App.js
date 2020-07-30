import React from 'react';

import { Layout } from './components/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <div>
            Hi this is the homepage
          </div>
        </Layout>
      </header>
    </div>
  );
}

export default App;
