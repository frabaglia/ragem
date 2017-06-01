import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

class Home extends Component {

  render() {
    return (
      <div className="home">
          <form>
            <div className="input-container">
              <label>username</label>
              <input id="username" type="text" placeholder=""></input>
            </div>
            <div className="input-container">
              <label>channel</label>
              <input type="text" id="channel" placeholder=""></input>
            </div>
          </form>
          <section className="connect">
            <Link className="super-link" to="/chat">connect</Link>
          </section>
      </div>
    )
  }
}

export default Home
