import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HomeView from '../view/home'
import ChatView from '../view/chat'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeView}/>
          <Route path="/chat" component={ChatView}/>
        </div>
      </Router>
    )
  }
}
export default App
