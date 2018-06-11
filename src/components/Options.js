import React from 'react'
import Option from './Option'

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
    {!props.options.length &&
      <p className="widget__message">Add an option</p>
    }
    {props.options.map((option, index) => (
      <Option
      handleDeleteSingleOption={props.handleDeleteSingleOption}
      count={index + 1}
      key={option} optionText={option}
      />
    ))}
  </div>
)

export default Options
