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

var onClearAll = function onClearAll(e) {
  e.preventDefault();
  app.options = [];
  renderApp();
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
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    app.options.length > 0 && React.createElement(
      'button',
      { onClick: onClearAll },
      'Clear all Options'
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
