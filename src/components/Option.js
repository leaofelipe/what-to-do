import React from "react"

export default (props) => {
  return (
    <p>
      {props.optionText}
      <button onClick={(e) => props.handleDeleteOption(props.optionText)}>remove</button>
    </p>
  )
}