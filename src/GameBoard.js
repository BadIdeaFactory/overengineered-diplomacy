import React, { Component } from 'react'
import GameMap from './GameMap'
import MapLabel from './MapLabel'
import './GameBoard.css'

class GameBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <GameMap />
        <MapLabel />

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
