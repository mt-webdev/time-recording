import * as React from 'react';
import { Button } from 'react-bootstrap';

import { ClickMe } from './click-me.component';

const logo = require('./logo.svg');

export class App extends React.Component<{}, any> {

  list: Array<JSX.Element> = [];
  clicks: Array<JSX.Element> = [];

  constructor() {
    super();
    this.state = {
      clicks: [],
      list: []
    };

    for (var i = 0; i < 5; i++) {

      let list = this.state.list.slice();
      let value = `Value ${i}`;

      list.push(
        (
          <ClickMe key={value} onClick={() => this.handleClick(i)} name={value} />
        )
      );
      this.setState({ list: list });
    }
  }

  handleClick(value: number) {
    let clicks = this.state.clicks.slice();
    let clickedValue = `Clicked: #${value}`;

    clicks.push((
      <li>{clickedValue}</li>
    ));
    this.setState({ clicks: clicks });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.clicks.length}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          {this.state.list}
        </ul>
        <ul>
          {this.state.clickss}
        </ul>
        <p>
          <Button bsStyle="default">Test</Button>
        </p>
      </div >
    );
  }
}

export default App;
