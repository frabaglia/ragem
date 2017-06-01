import React, {Component} from 'react'
import './style.css'
class Message extends Component {

  render() {
    var buttonStyle
    var rowStyle

    if (this.props.me === true) {
      buttonStyle = {
        backgroundColor: "red",
        width: '30vw',
        textAlign: 'left',
        padding: '2em',
        color: "white"
      }
      rowStyle = {
        alignItems: "flex-start",
        justifyContent: 'flex-start'
      }
    } else {
      buttonStyle = {
        backgroundColor: "blue",
        width: '30vw',
        textAlign: 'right',
        padding: '2em',
        color: "white"
      }
      rowStyle = {
        alignItems: "flex-end",
        justifyContent: 'flex-end'
      }
    }
    return (
      <div className='row' style={rowStyle}>
        <div style={buttonStyle}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Message;
