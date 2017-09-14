import React, {Component} from 'react'
import {connect} from 'react-redux'
import {graphql, compose, gql} from 'react-apollo'
import {connectUserToChannel, connectUserToChannelOptions} from '../../../graphql/mutations/user'
import {getUsersFromChannel} from '../../../graphql/queries/user'
import DumbConnectButton from '../../dumb/connect-button'
import {withRouter} from 'react-router-dom'

function mapStateToProps({ui}) {
  return {ui}
}
class SmartButton extends Component {
  constructor(props) {
    super(props)
  }

  connect = async() => {
    this.props.history.push('/chat')
    const user = this.props.ui.username
    const channel = this.props.ui.channel
    await this.props.connectUserToChannel({user, channel})
  }

  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      this.connect()
    }
  }

  componentWillReciveProps() {}

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (<DumbConnectButton clickHandler={this.connect}/>)
  }
}

let GraphQLButtonContainer = graphql(connectUserToChannel, connectUserToChannelOptions)(SmartButton)
export default withRouter(connect(mapStateToProps)(GraphQLButtonContainer))
