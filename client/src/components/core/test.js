import React from 'react';
import ReactDOM from 'react-dom';
import Core from '.';

it('router policy and core app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Core />, div);
});
