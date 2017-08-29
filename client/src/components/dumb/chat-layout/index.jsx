import React from 'react'
import Message from '../message'
import './styles.css'
export default function DumbChatLayout({error, loading, messages, uid}) {
  if (messages) {
    return (
      <section className="layout">
        <div>
          {messages && messages.map((message, index) => {
            if (uid === message.uid) {
              return (<Message key={index.toString()} content={message.content} me={true}/>)
            } else {
              return (<Message key={index.toString()} content={message.content} me={false}/>)
            }
          })}
        </div>
      </section>
    )
  } else if (loading) {
    return (
      <section className="layout">
        Loading...
      </section>
    )
  } else if (error) {
    return (
      <section className="layout">
        {JSON.stringify(error)}
      </section>
    )
  } else {
    return (
      <section className="layout">There is no messages...</section>
    )
  }
}
