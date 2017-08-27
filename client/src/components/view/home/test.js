import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from '.';

it('home view renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeView />, div);
});
