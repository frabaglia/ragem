import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeView from '../view/home'
import ChatView from '../view/chat'

class App extends Component {
  render() {
    return (
      <section className="App">
        <Switch>
          <Route exact path="/" component={HomeView}/>
          <Route path="/chat" component={ChatView}/>
        </Switch>
      </section>
    )
  }
}
export default App
