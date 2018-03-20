/* global L, Tangram */
import React from 'react'
import PropTypes from 'prop-types'
import { Map as Leaflet, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet'
import 'leaflet-hash'
import 'leaflet/dist/leaflet.css'
import './GameMap.css'

const INITIAL_VIEW = { lng: 18.93, lat: 56.46 }
const INITIAL_ZOOM = 4
const BOUNDS_SW = { lng: -11.51, lat: 32.68 }
const BOUNDS_NE = { lng: 47.38, lat: 71.48 }
const MAP_OPTIONS = {
  maxBounds: [BOUNDS_SW, BOUNDS_NE],
  maxBoundsViscosity: 1,
  minZoom: 3.5,
  maxZoom: 7,
  attributionControl: false,
  zoomControl: false
}

export default class GameMap extends React.Component {
  static propTypes = {
    handleMapSelection: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      position: INITIAL_VIEW,
      zoom: INITIAL_ZOOM
    }
  }

  componentDidMount () {
    const layer = Tangram.leafletLayer({
      scene: 'scripts/maps/tangram/scene.yaml'
    })

    const map = this.map.leafletElement

    layer.addTo(map)

    const hash = new L.Hash(map)

    var labelShouldStick = false
    var markers = []
    var icon = L.icon({
      iconUrl: 'img/crosshairs.png',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })
    
    const onTangramHover = (e) => {
      if (labelShouldStick === true) return
      if (e.feature) {
        this.props.handleMapSelection(e.feature.properties.name, e.feature.properties.country)
      } else {
        this.props.handleMapSelection(null, null)
      }
    }
    
    const onTangramClick = (e) => {
      for (var i = 0; i < markers.length; i++) {
        markers[i].removeFrom(map)
      }
      if (e.feature) {
        labelShouldStick = true
        this.props.handleMapSelection(e.feature.properties.name, e.feature.properties.country)

        var lat = e.feature.properties.coordinates[1]
        var lng = e.feature.properties.coordinates[0]
        var marker = L.marker([lat, lng], { icon: icon }).addTo(map)
        markers.push(marker)
      } else {
        this.props.handleMapSelection(null, null)
        labelShouldStick = false
      }
    }
    
    layer.setSelectionEvents({
      hover: onTangramHover,
      click: onTangramClick
    })

  }

  render () {
    return (
      <Leaflet
        center={this.state.position}
        zoom={this.state.zoom}
        className="map"
        ref={(ref) => { this.map = ref }}
        {...MAP_OPTIONS}
      >
        <ZoomControl position="topright" />
      </Leaflet>
    )
  }
}