import React, {Component} from 'react'
import ConnectButton from '../../smart/connect-button'
import UserInputs from '../../smart/user-inputs'
import './style.css'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <UserInputs/>
        <ConnectButton/>
      </div>
    )
  }
}

export default Home
