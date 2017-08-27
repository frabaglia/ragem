import React from 'react';
import ReactDOM from 'react-dom';
import ChatView from '.';

it('chat view renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatView />, div);
});
