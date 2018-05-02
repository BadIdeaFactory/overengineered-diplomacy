/* global L, Tangram */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Map as Leaflet, ZoomControl, Marker } from 'react-leaflet'
import 'leaflet-hash'
import { setSelectedDepot } from './store/actions/gamemap'
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

class GameMap extends React.Component {
  static propTypes = {
    depots: PropTypes.object, // TODO: make a PropType geojson checker
    setSelectedDepot: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      position: INITIAL_VIEW,
      zoom: INITIAL_ZOOM,
      labelShouldStick: false,
      marker: null
    }
  }

  componentDidMount () {
    const map = this.map.leafletElement
    const layer = Tangram.leafletLayer({
      scene: 'scripts/maps/tangram/scene.yaml'
    }).addTo(map)

    // eslint-disable-next-line no-unused-vars
    const hash = new L.Hash(map)
    
    layer.setSelectionEvents({
      hover: this.onTangramHover,
      click: this.onTangramClick
    })

    layer.scene.subscribe({
      load: (event) => {
        layer.scene.setDataSource('depots', { type: 'GeoJSON', data: this.props.depots })
      }
    })
  }

  onTangramHover = (event) => {
    if (this.state.labelShouldStick === true) return
    if (event.feature) {
      this.props.setSelectedDepot(event.feature.properties.name, event.feature.properties.country)
    } else {
      this.props.setSelectedDepot(null, null)
    }
  }

  onTangramClick = (event) => {
    this.setState({
      marker: null
    })

    if (event.feature) {
      const lat = event.feature.properties.coordinates[1]
      const lng = event.feature.properties.coordinates[0]

      this.setState({
        marker: { lat, lng },
        labelShouldStick: true
      })
      this.props.setSelectedDepot(event.feature.properties.name, event.feature.properties.country)
    } else {
      this.setState({ labelShouldStick: false })
      this.props.setSelectedDepot(null, null)
    }
  }

  render () {
    const icon = L.icon({
      iconUrl: 'img/crosshairs.png',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })

    return (
      <Leaflet
        center={this.state.position}
        zoom={this.state.zoom}
        className="map"
        ref={(ref) => { this.map = ref }}
        {...MAP_OPTIONS}
      >
        <ZoomControl position="topright" />
        {this.state.marker && <Marker position={this.state.marker} icon={icon} />}
      </Leaflet>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setSelectedDepot: (city, country) => dispatch(setSelectedDepot(city, country))
  }
}

export default connect(null, mapDispatchToProps)(GameMap)
