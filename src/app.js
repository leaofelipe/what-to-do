class App extends React.Component {
  render () {
    const title = 'What to do'
    const subtitle = 'What should I do?'
    const options = ['One', 'Two', 'Three']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
    console.log(this.props);
    return (
      <div>
        {this.props.options.map(option => <Option key={option} optionText={option} />)}
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        {this.props.optionText}
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
