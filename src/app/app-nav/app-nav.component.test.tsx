import * as React from 'react';
import * as Renderer from 'react-test-renderer';

import AppNav from './app-nav.component';

test('renders without crashing', () => {
    Renderer.create(<AppNav />);
});
