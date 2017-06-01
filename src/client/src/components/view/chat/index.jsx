import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Message from '../../dumb/message'
import './style.css';
class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: 1,
      messages: [{
        uid: 1,
        content: "Hola soy carlos..."
      },{
        uid: 2,
        content: "Hola soy felipe..."
      },{
        uid: 3,
        content: "Hola soy hernan..."
      },{
        uid: 1,
        content: "Hola soy carlos..."
      },{
        uid: 1,
        content: "Hola soy carlos..."
      },{
        uid: 1,
        content: "Hola soy carlos..."
      }]
    }
  }
  messageLayout(message) {
    if (this.state.uid === message.uid){
      return (
        <Message content={message.content} me={true}/>
      )
    }else{
      return (
        <Message content={message.content} me={false}/>
      )
    }
  }
  renderMessages(messagesArray){
    var _array = new Array()
    messagesArray.map((msg)=>{
      _array.push(this.messageLayout(msg))
    })
    return _array
  }
  send(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div className="chat">
        <section>{this.renderMessages(this.state.messages)}</section>
        <form>
          <input type="text" id="channel" placeholder=""></input>
          <input id="username" type="submit" value="submit" placeholder="" onClick={this.send}></input>
        </form>
      </div>
    );
  }
}

export default Chat;
