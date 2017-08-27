import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {connect, graphql, compose, gql} from 'react-apollo'
import {connectUserToChannel, connectUserToChannelOptions} from '../../../graphql/mutations/user'
import {getUsersFromChannel} from '../../../graphql/queries/user'
import DumbConnectButton from '../../dumb/connect-button'

const mapStateToProps = (store) => {
  return {ui: store.ui}
}

const mapQueriesToProps = ({ownProps, state}) => {
  return {
    data: {
      query: gql `
        query {
          author(firstName:"Edmond", lastName: "Jones"){
            firstName
            posts {
              title
            }
          }
        }
      `
    }
  }
}

const mapMutationsToProps = ({ownProps, state}) => {
  return {
    connectUserToChannel: () => ({
      mutation: connectUserToChannel,
      variables: {
        username: ownProps.ui.username,
        channel: ownProps.ui.channel
      }
    })
  }
};

class SmartButton extends Component {
  constructor(props) {
    super(props)
  }

  connect = () => {
    console.log('connect')

    // let {username, channel} = this.props.ui
    // this.props.mutate({
    //   variables: {
    //     user: username,
    //     channel: channel
    //   }
    // })
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
    return (
      <div>
        <h2>{JSON.stringify(this.props.data)}</h2>
        <DumbConnectButton clickHandler={this.connect}/>
      </div>
    )
  }
}

// Connect (react-redux) && Connect (react-apollo)
// http://dev.apollodata.com/react/higher-order-components.html#compose

// export default compose(graphql(getUsersFromChannel), connect({mapMutationsToProps}))(SmartButton)
export default SmartButton
