import React from 'react'
import './style.css'
export default function DumbUserInputs({username,channel,onUsernameChangeHandler,onChannelChangeHandler}) {
  return (
    <form className="animated slideInLeft">
      <div className="input-container">
        <label>username</label>
        <input id="username" type="text" value={username} onChange={onUsernameChangeHandler}>
        </input>
      </div>
      <div className="input-container">
        <label>channel</label>
        <input type="text" id="channel" value={channel} onChange={onChannelChangeHandler}>
        </input>
      </div>
    </form>
  )
}
