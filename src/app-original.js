class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this)
    this.state = {
      options: []
    }
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) this.setState(() => ({options}))
    } catch(e) {
    
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleAddOption (option) {
    if (!option) {
      return 'Enter a valid item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }))
  }

  handleDeleteOptions () {
    // Shorthand arrow function return
    this.setState(() => ({options: []}))
  }

  handleDeleteSingleOption (optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }))
  }

  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render () {
    const subtitle = 'What should I do?'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOption
        handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'What to do APP'
}

const Action = (props) => {
  return (
    <div>
      <button
      disabled={!props.hasOptions}
      onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {!props.options.length && <p>Add an option</p>}
      {props.options.map(option => (
        <Option
        handleDeleteSingleOption={props.handleDeleteSingleOption}
        key={option} optionText={option}
        />
      ))}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteSingleOption(props.optionText)
        }}>
        remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor (props) {
    super(props) 
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    
    this.setState(() => ({error}))
    if (!error) e.target.elements.option.value = ''
  }

  render () {
    return (
      <div>
        {this.state.error && <p>Error: {this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
