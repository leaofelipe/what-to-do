'use strict';

console.log('App.js is running.');

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log('+1');
  /* count++; */
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log('-1');
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log('Reset.');
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

/* const app = { */
/*   name: 'What to do APP' */
/* }; */
/* let restaurants = ['McDonalds', 'Subway']; */

/* const template = ( */
/*   <div> */
/*     <h1>{app.name}</h1> */
/*     <p>{restaurants.length > 0 ? 'Options:' : 'No options.'}</p> */
/*     <ol> */
/*       {restaurants[0] && <li>{restaurants[0]}</li>} */
/*       {restaurants[1] && <li>{restaurants[1]}</li>} */
/*       {restaurants[2] && <li>{restaurants[2]}</li>} */
/*     </ol> */
/*   </div> */
/* ); */

/* const appRoot = document.getElementById('app'); */

/* ReactDOM.render(template, appRoot); */
