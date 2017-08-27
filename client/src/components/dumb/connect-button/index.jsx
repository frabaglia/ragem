import React from 'react'
import './style.css'
export default function DumbConnectButton({clickHandler}) {
  return (
    <section onClick={clickHandler} className="connect animated slideInUp">
      <div className="super-link">connect</div>
    </section>
  )
}
