import React, { Component } from 'react'
import Map from './Map'
import './GameBoard.css'

class GameBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <Map />
        <div id="label">
          <div id="label-city"></div>
          <div id="label-country"></div>
        </div>
    
        <div id="event-log">
          <ul>
            <li>✅ 🇬🇧 ⛵️ LON ➡️ ENG</li>
            <li>✅ 🇬🇧 🔫 LVP ➡️ WAL</li>
            <li>✅ 🇬🇧 ⛵️ EDI ➡️ NTH</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default GameBoard
