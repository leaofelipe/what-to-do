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

const appRoot = document.getElementById('app');
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.name}</h1>
      <p>{app.options.length > 0 ? 'Options:' : 'No options.'}</p>
      <p>{app.options.length}</p>
      <ol>
        {app.options[0] && <li>{app.options[0]}</li>}
        {app.options[1] && <li>{app.options[1]}</li>}
        {app.options[2] && <li>{app.options[2]}</li>}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
