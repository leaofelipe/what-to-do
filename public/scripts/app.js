'use strict';

console.log('App.js is running.');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'What to do APP'
  ),
  React.createElement(
    'p',
    null,
    'Where to lunch?'
  ),
  React.createElement(
    'p',
    null,
    'What movie can I watch?'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
