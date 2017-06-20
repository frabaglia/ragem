import React, {Component} from 'react'

class DumbSubmitBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <input type="text" id="channel" placeholder=""></input>
        <input id="username" type="submit" value="submited" placeholder="" onClick={this.props.clickHandler}></input>
      </form>
    )
  }
}

export default DumbSubmitBar
