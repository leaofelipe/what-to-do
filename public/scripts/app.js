'use strict';

console.log('App.js is running.');

var app = {
  name: 'What to do APP'
};
var restaurants = ['McDonalds', 'Subway'];

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.name
  ),
  React.createElement(
    'p',
    null,
    restaurants.length > 0 ? 'Options:' : 'No options.'
  ),
  React.createElement(
    'ol',
    null,
    restaurants[0] && React.createElement(
      'li',
      null,
      restaurants[0]
    ),
    restaurants[1] && React.createElement(
      'li',
      null,
      restaurants[1]
    ),
    restaurants[2] && React.createElement(
      'li',
      null,
      restaurants[2]
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
