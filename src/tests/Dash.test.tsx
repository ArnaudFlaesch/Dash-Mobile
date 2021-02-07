import * as React from 'react';
import { Provider } from 'react-redux';
import Dash from '../Dash';
import store from '../reducers/store';

import renderer, { act, create } from 'react-test-renderer';

it('renders correctly', () => {
  let component;
  act(() => {
    component = create(<Provider store={store}><Dash /></Provider>)
  });
  expect(component).toBeTruthy();
});

