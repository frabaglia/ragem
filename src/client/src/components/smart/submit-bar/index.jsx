import React, {Component} from 'react'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import DumbSubmitBar from '../../dumb/submit-bar'
import {sendMessageToChannel} from '../../../graphql/mutations/message'

function mapStateToProps(store) {
  return {messages: store.messages}
}

class SubmitBar extends Component {
  clickHandler = (event) => {
    event.preventDefault()
    console.log("CLICK")
    this.props.mutate()
  }

  render = () => {
    return (
      <DumbSubmitBar clickHandler={this.clickHandler}></DumbSubmitBar>
    )
  }

}

let GraphQLSubmitBarContainer = graphql(sendMessageToChannel)(SubmitBar)

export default connect(mapStateToProps)(GraphQLSubmitBarContainer)
