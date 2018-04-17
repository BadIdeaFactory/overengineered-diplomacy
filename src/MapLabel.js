import React from 'react'
import PropTypes from 'prop-types'
import './MapLabel.css'

export default function MapLabel (props) {
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
