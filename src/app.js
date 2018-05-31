class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  // REQUIRED
  render () {
    return (
      <div>
        <h1>What to do</h1>
        <h2>What should I do?</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        OPTIONS
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        OPTION COMP
      </div>
    )
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        ADD OPTIONS
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
