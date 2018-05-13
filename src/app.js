console.log('App.js is running.');

const app = {
  name: 'What to do APP'
};
let restaurants = ['McDonalds', 'Subway'];

const template = (
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

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
