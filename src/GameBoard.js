import React, { Component } from 'react'
import GameMap from './GameMap'
import MapLabel from './MapLabel'
import './GameBoard.css'

class GameBoard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedCity: null, 
      selectedCountry: null
    }
  }

  handleMapSelection = (city, country) => {
    if (city && country) {
      this.setState({
        selectedCity: city,
        selectedCountry: country
      })
    } else {
      this.setState({
        selectedCity: null,
        selectedCountry: null
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <GameMap handleMapSelection={this.handleMapSelection} />
        <MapLabel city={this.state.selectedCity} country={this.state.selectedCountry} />

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
