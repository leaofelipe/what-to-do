console.log('App.js is running.');

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
  console.log('+1');
  /* count++; */
};

const minusOne = () => {
  count--;
  renderCounterApp();
  console.log('-1');
};

const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('Reset.');
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
 const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
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

