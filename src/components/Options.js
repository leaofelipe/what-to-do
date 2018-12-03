import React from "react"
import Option from "./Option"

export default (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options && <p>Please add option</p>}
      {
        props.options.map(option =>
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        )
      }
    </div>
  )
}