import React, {Component} from 'react'
import {connect} from 'react-redux'
import {gql, graphql} from 'react-apollo'
import DumbSubmitBar from '../../dumb/submit-bar'

function mapStateToProps(store) {
  return {messages: store.messages}
}

function SubmitBar({mutate}) {

  const clickHandler = (event) => {
    console.log("CLICK");
    event.preventDefault()
    mutate()
  }

  return (
    <DumbSubmitBar clickHandler={clickHandler}></DumbSubmitBar>
  )

}

const sendMessageToChannelQuery = gql `mutation{
  addMessage(message:{content:"CHAU!!!",uid:"5940c066daab330da47e1fff"},channelId:"5940c010daab330da47e1ffd") {
    _id
    name
}}`

let GraphQLSubmitBarContainer = graphql(getMessagesFromChannelQuery)(SubmitBar)

export default connect(mapStateToProps)(GraphQLSubmitBarContainer)
