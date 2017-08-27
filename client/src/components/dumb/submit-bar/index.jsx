import React from 'react'
export default function DumbSubmitBar({clickHandler}) {
  return (
    <form>
      <input type="text" id="channel" placeholder=""></input>
      <input id="username" type="submit" value="submited" placeholder="" onClick={clickHandler}></input>
    </form>
  )
}
