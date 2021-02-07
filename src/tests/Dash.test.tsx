import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Dash from '../Dash';
import store from '../reducers/store';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Dash />);
});

