import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import SmartButton from './smart-button'
class ConnectButton extends Component {
  render() {
    return (
      <Route path="/" render={(props) => {
        const {history} = props;
        return (<SmartButton history={history}/>)
      }}/>
    )
  }
}

export default ConnectButton
