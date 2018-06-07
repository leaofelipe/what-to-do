import React from 'react'
import Option from './Option'

const Options = (props) => (
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

export default Options
