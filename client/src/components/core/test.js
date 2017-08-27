import React from 'react';
import ReactDOM from 'react-dom';
import Core from '.';

it('router policy renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Core />, div);
});
