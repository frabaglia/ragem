import React from 'react'
import Message from '../message'

export default function DumbChatLayout({error, messages, uid}) {
  const messageLayout = (message, key) => {
    if (uid === message.uid) {
      return (<Message key={key.toString()} content={message.content} me={true}/>)
    } else {
      return (<Message key={key.toString()} content={message.content} me={false}/>)
    }
  }
  const renderMessages = (messagesArray) => {
    if (typeof messagesArray === 'undefined' || messagesArray == null || messagesArray == []) {
      return (
        <div></div>
      )
    }

    var _array = new Array()
    messagesArray.map((msg, index) => {
      _array.push(messageLayout(msg, index))
    })
    return _array
  }

  return (
    <div>
      <h1>{JSON.stringify(error)}</h1>
      <div>{renderMessages(messages)}</div>
    </div>
  )
}
