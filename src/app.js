console.log('App.js is running.');

var app = {
  name: 'What to do APP'
};

var restaurants = ['McDonalds', 'Subway'];

var template = (
  <div>
    <h1>{app.name}</h1>
    <p>{restaurants.length > 0 ? 'Options:' : 'No options.'}</p>
    <ol>
      {restaurants[0] && <li>{restaurants[0]}</li>}
      {restaurants[1] && <li>{restaurants[1]}</li>}
      {restaurants[2] && <li>{restaurants[2]}</li>}
    </ol>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
