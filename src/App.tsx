import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import { ClickMe } from './click-me.component';
import { ClickCounter } from './state/click-counter.component';

const logo = require('./logo.svg');

class AppState {
  clicks: Array<any>;
  list: Array<any>;
}

export class App extends React.Component<{}, AppState> {

  constructor() {
    super();
    this.state = {
      clicks: [1],
      list: [2]
    };

    for (var i = 0; i < 5; i++) {

      let list = this.state.list.slice();
      let value = `Value ${i}`;

      list.push(
        (
          <ClickMe key={value} onClick={() => this.handleClick(i)} name={value} />
        )
      );
      // this.setState({ list: list });
    }
  }

  handleClick(value: number) {
    let clicks = this.state.clicks.slice();
    let clickedValue = `Clicked: #${value}`;

    clicks.push((
      <li>{clickedValue}</li>
    ));
    // this.setState({ clicks: clicks });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.state.clicks.length} {this.state.list.length}</h2>
        </div>

        <Row>
          <Col md={4} sm={6} xs={12}>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul>
              {this.state.list}
            </ul>
            <ul>
              {this.state.clicks}
            </ul>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <ClickCounter />
          </Col>

        </Row>
      </div >
    );
  }
}

export default App;
