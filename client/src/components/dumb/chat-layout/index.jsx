import React from 'react'
import Message from '../message'

export default function DumbChatLayout({error, messages, uid}) {
  if (messages) {
    return (
      <div>
        <div>
          {messages && messages.map((message, index) => {
            if (uid === message.uid) {
              return (<Message key={index.toString()} content={message.content} me={true}/>)
            } else {
              return (<Message key={index.toString()} content={message.content} me={false}/>)
            }
          })}
        </div>
      </div>
    )
  } else if (error) {
    return (
      <div>
        {JSON.stringify(error)}
      </div>
    )
  } else {
    return (
      <div>There is no messages...</div>
    )
  }
}
