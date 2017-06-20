import * as React from 'react';

import Home from './app/home/home.component';
import AppNav from './app/app-nav/app-nav.component';

// const logo = require('./logo.svg');


export class App extends React.Component<{}, null> {

  render() {
    return (
      <div className="app-wrapper">
        <div className="app-nav">
          <AppNav />
        </div>
        <div className="app-container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
