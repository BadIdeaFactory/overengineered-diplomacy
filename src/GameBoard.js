import React, { Component } from 'react'
import GameMap from './GameMap'
import MapLabel from './MapLabel'
import { PROVINCES, GREAT_POWERS_INFO } from './rules/constants'
import './GameBoard.css'

class GameBoard extends Component {
  constructor (props) {
    super(props)

    this.createGeoJSON(props.G)
  }

  createGeoJSON = async (G) => {
    let data = {}

    try {
      const file = await window.fetch('/data/maps/depots.geojson')
      data = await file.json()
    } catch (err) {
      console.log('Error retrieving depots.geojson', err)
    }

    // Append player colors to each depot
    data.features = data.features.map((feature) => {
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
