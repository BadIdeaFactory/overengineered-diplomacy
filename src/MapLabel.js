import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './MapLabel.css'

export function MapLabel (props) {
  const { city, country } = props

  if (!city || !country) return null
  
  return (
    <div className="label-container">
      <div className="label-city">{city}</div>
      <div className="label-country">{country}</div>
    </div>
  )
}

MapLabel.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string
}

function mapStateToProps (state) {
  return {
    city: state.gamemap.depotCity,
    country: state.gamemap.depotCountry
  }
}

export default connect(mapStateToProps)(MapLabel)
