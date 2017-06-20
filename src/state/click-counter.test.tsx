import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import { ClickCounter } from './click-counter.component';

function getComponentFromRenderer(renderer: renderer.Renderer): ClickCounter {
    return renderer['_component']['_renderedComponent']['_instance'];
}

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClickCounter />, div);
});

test('counter init with zero', () => {
    const component = new ClickCounter();

    expect(component.state.counter).toBe(0);
});

test('reset counter to zero', () => {
    const componentRenderer = renderer.create(<ClickCounter />);
    let clickCounter = getComponentFromRenderer(componentRenderer);
    expect(clickCounter).toBeTruthy();

    const count = 5;
    clickCounter.setState({counter: count});
    expect(clickCounter.state.counter).toBe(count);

    clickCounter.resetCounter();
    expect(clickCounter.state.counter).toBe(0);
});

test('increment counter', () => {
    const componentRenderer = renderer.create(<ClickCounter />);
    const clickCounmter = getComponentFromRenderer(componentRenderer);
    expect(clickCounmter.state.counter).toBe(0);

    clickCounmter.incrementCounter();
    expect(clickCounmter.state.counter).toBe(1);
});
