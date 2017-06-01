import React, {Component} from 'react';
class Message extends Component {

  render() {
    var style

    if (this.props.me === true) {
      style = {
        width:'100%',
        backgroundColor: "red",
        padding: '2em',
        color: "white"
      }
    } else {
      style = {
        width:'100%',
        backgroundColor: "blue",
        padding: '2em',
        color: "white"
      }
    }
    return (
      <div style={style}>
        {this.props.content}
      </div>
    );
  }
}

export default Message;
