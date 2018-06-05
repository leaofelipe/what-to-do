class VisibilityToggle extends React.Component {
  constructor (props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  toggleVisibility () {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? 'Hide' : 'Show'}
        </button>
        {this.state.visibility && (
          <div>
            Details!
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
