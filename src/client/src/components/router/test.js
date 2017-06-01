import React from 'react';
import ReactDOM from 'react-dom';
import RoutingPolicy from '.';

it('router policy renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoutingPolicy />, div);
});
