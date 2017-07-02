import React, {Component} from 'react'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import DumbSubmitBar from '../../dumb/submit-bar'
import {sendMessageToChannel, sendMessageOptions} from '../../../graphql/mutations/message'

function mapStateToProps(store) {
  return {}
}

class SubmitBar extends Component {
  clickHandler = (event) => {
    event.preventDefault()
    this.props.mutate()
  }

  render = () => {
    return (
      <DumbSubmitBar clickHandler={this.clickHandler}></DumbSubmitBar>
    )
  }

}

let GraphQLSubmitBarContainer = graphql(sendMessageToChannel, sendMessageOptions)(SubmitBar)

export default connect(mapStateToProps)(GraphQLSubmitBarContainer)
