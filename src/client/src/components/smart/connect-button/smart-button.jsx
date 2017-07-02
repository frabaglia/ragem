import React, {Component} from 'react'
import {connect} from 'react-redux'
import {graphql, compose} from 'react-apollo'
import {connectUserToChannel, connectUserToChannelOptions} from '../../../graphql/mutations/user'
import {getUsersFromChannel} from '../../../graphql/queries/user'
import DumbConnectButton from '../../dumb/connect-button'

class SmartButton extends Component {
  constructor(props) {
    super(props)
  }

  connect = () => {
    console.log('connect')
    this.props.mutate()
  }

  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      this.connect()
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (
      <div>
        <h2>{JSON.stringify(this.props.data.Channel)}</h2>
        <DumbConnectButton clickHandler={this.connect}/>
      </div>
    )
  }
}

let GraphQLConnectButtonContainer = compose(
  graphql(connectUserToChannel, connectUserToChannelOptions),
  graphql(getUsersFromChannel)
)(SmartButton)

export default connect()(GraphQLConnectButtonContainer)
