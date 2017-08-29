import React, {Component} from 'react'
import './style.css'
export default function Message({me, content}) {
  let buttonStyle
  let rowStyle

  if (me === true) {
    buttonStyle = "myMessagesButtonStyle"
    rowStyle = "myMessagesRowStyle"
  } else {
    buttonStyle = "otherMessagesButtonStyle"
    rowStyle = "otherMessagesRowStyle"
  }

  return (
    <div className={'row ' + rowStyle}>
      <div className={buttonStyle}>
        {content}
      </div>
    </div>
  )
}
