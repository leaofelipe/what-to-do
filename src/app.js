console.log('App.js is running.');

var template = (
  <div>
    <h1>What to do APP</h1>
    <p>Where to lunch?</p>
    <p>What movie can I watch?</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
