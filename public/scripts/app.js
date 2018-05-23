'use strict';

console.log('App.js is running.');

var app = {
  name: 'What to do APP',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
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
      app.options.length > 0 ? 'Options:' : 'No options.'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'ol',
      null,
      app.options[0] && React.createElement(
        'li',
        null,
        app.options[0]
      ),
      app.options[1] && React.createElement(
        'li',
        null,
        app.options[1]
      ),
      app.options[2] && React.createElement(
        'li',
        null,
        app.options[2]
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
