import React from "react"

import AddOption from "./AddOption"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)
  
      if (options) {
        this.setState(() => ({options}))
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}))
  }

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({options: prevState.options.filter(
      o => o !== option
    )}))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to Add'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item already exists.'
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  render () {
    const subtitle = 'Put your life in the hands of a computer'

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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp