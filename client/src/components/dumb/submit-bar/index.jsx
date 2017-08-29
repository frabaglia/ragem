import React from 'react'
import './style.css'
export default function DumbSubmitBar({onMessageChangeHandler, clickHandler}) {
  return (
    <form>
      <input type="text" id="channel" placeholder="" onChange={onMessageChangeHandler}></input>
      <input id="username" type="submit" value="submited" placeholder="" onClick={clickHandler}></input>
    </form>
  )
}
