import * as React from 'react';
import { Button } from 'react-bootstrap';

import { ClickMe } from './click-me.component';

const logo = require('./logo.svg');

export class App extends React.Component<{}, null> {

  list: Array<JSX.Element> = [];
  clicks: Array<JSX.Element> = [];

  constructor() {
    super();

    for (var i = 0; i < 5; i++) {
      this.list = this.list.slice();
      this.list.push(
        (
          <ClickMe onClick={this.handleClick(i)} name={'Value'.concat(String(i))} />
        )
      );
    }
  }

  handleClick(value: number) {
    this.clicks = this.clicks.slice();

    this.clicks.concat((
      <li>{`Clicked: #${value}`}</li>
    ));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <ul>
            {this.list}
          </ul>
        </p>
        <p>
          <Button bsStyle="default">Test</Button>
        </p>
      </div >
    );
  }
}

export default App;
