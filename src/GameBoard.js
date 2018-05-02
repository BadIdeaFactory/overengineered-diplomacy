import React, { Component } from 'react'
import GameMap from './GameMap'
import MapLabel from './MapLabel'
import { PROVINCES, GREAT_POWERS_INFO } from './rules/constants'
import depots from './geo/depots.json'
import './GameBoard.css'

class GameBoard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      depots: this.createGeoJSON(props.G)
    }
  }

  createGeoJSON = (G) => {
    // Append player colors to each depot
    depots.features = depots.features.map((feature) => {
      const id = feature.properties.id
      let found = false

      const supplyCenter =  G.supplyCenters[id]

      // Not all supply centers have players on them, bail early if that's so
      if (!supplyCenter) return feature

      const playerNumber = supplyCenter.player
      const playerGreatPower = G.players[playerNumber].greatPower
      const greatPowerInfo = GREAT_POWERS_INFO[playerGreatPower]
      const color = greatPowerInfo.unitColor
      feature.properties.color = color

      return feature
    })

    return depots
  }

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
