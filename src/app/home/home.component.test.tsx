import * as React from 'react';
import * as renderer from 'react-test-renderer';
// import { getComponentFromRenderer } from '../helpers/test.helpers';

import Home from './home.component';

test('renders without crashing', () => {
    renderer.create(<Home />); 
});
