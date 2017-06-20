import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'react-bootstrap';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/App.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
