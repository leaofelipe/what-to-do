console.log('App.js is running.');

const app = {
  name: 'What to do APP',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const onClearAll = (e) => {
  e.preventDefault();
  app.options = [];
  renderApp();
};

const appRoot = document.getElementById('app');
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.name}</h1>
      <p>{app.options.length > 0 ? 'Options:' : 'No options.'}</p>
      <button onClick={onMakeDecision} disabled={!app.options.length}>What should I do?</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
      </ol>
      {(app.options.length > 0) &&
        <button onClick={onClearAll}>Clear all Options</button>
      }
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
