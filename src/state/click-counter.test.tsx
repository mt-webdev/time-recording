import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import { ClickCounter } from './click-counter.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClickCounter />, div);
});

it('counter init with zero', () => {
    const component = new ClickCounter();

    expect(component.state.counter).toBe(0);
});

it('reset counter to zero', () => {
    const component = new ClickCounter();
    const counterAfterReset = component.resetCounter();

    expect(counterAfterReset).toBe(0);
});

it('increment counter', () => {
    const component = new ClickCounter();
    component.state = {counter: 5};
    const counter = component.state.counter;
    component.incrementCounter();

    expect(component.state.counter).toBe(counter + 1);
});
