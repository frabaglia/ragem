import React, {Component} from 'react'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import {connectUserToChannel} from '../../../graphql/mutations/user'
import DumbConnectButton from '../../dumb/connect-button'

function mapStateToProps(store) {
  return {}
}

class SmartButton extends Component {

  connect = () => {
    console.debug('connect')
    // this.props.mutate()
    // this.props.history.push('/chat')
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
    return (<DumbConnectButton clickHandler={this.connect}/>)
  }
}

let GraphQLConnectButtonContainer = graphql(connectUserToChannel)(SmartButton)

export default connect(mapStateToProps)(GraphQLConnectButtonContainer)
