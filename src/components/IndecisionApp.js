import React from "react"

import AddOption from "./AddOption"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
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
    this.setState(() => ({
      selectedOption: option
    }))
  }

  clearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  

  render () {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp