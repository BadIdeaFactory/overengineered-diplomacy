import React from 'react'
import { Map as Leaflet, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './GameMap.css'

const INITIAL_VIEW = { lng: 18.93, lat: 56.46 }
const INITIAL_ZOOM = 4
const BOUNDS_SW = { lng: -11.51, lat: 32.68 }
const BOUNDS_NE = { lng: 47.38, lat: 71.48 }
const INITIAL_MAP_OPTIONS = {
  maxBounds: [BOUNDS_SW, BOUNDS_NE],
  maxBoundsViscosity: 1,
  minZoom: 3.5,
  maxZoom: 7,
  attributionControl: false,
  zoomControl: false
}

export default class GameMap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      position: INITIAL_VIEW,
      zoom: INITIAL_ZOOM
    }
  }

  componentDidMount () {
    
    // var map = L.map('map', {
    //   maxBounds: L.latLngBounds(BOUNDS_SW, BOUNDS_NE),
    //   maxBoundsViscosity: 1,
    //   minZoom: 3.5,
    //   maxZoom: 7,
    //   attributionControl: false,
    //   zoomControl: false
    // }).setView(INITIAL_VIEW, INITIAL_ZOOM)
    // var zoom = L.control.zoom({ position: 'topright' }).addTo(map)
    // var hash = new L.Hash(map)
    // var layer = Tangram.leafletLayer({
    //   scene: 'scripts/maps/tangram/scene.yaml',
    // }).addTo(map)
    
    // layer.setSelectionEvents({
    //   hover: onTangramHover,
    //   click: onTangramClick
    // })
    
    // var labelEl = document.getElementById('label')
    // var labelCityEl = document.getElementById('label-city')
    // var labelCountryEl = document.getElementById('label-country')
    // var labelShouldStick = false
    // var markers = []
    // var icon = L.icon({
    //   iconUrl: 'img/crosshairs.png',
    //   iconSize: [24, 24],
    //   iconAnchor: [12, 12]
    // })
    
    // function onTangramHover (e) {
    //   if (labelShouldStick === true) return
    //   if (e.feature) {
    //     labelEl.style.display = 'block'
    //     labelCityEl.textContent = e.feature.properties.name
    //     labelCountryEl.textContent = e.feature.properties.country
    //   } else {
    //     labelEl.style.display = 'none'
    //     labelCityEl.textContent = ''
    //     labelCountryEl.textContent = ''
    //   }
    // }
    
    // function onTangramClick (e) {
    //   for (var i = 0; i < markers.length; i++) {
    //     markers[i].removeFrom(map)
    //   }
    //   if (e.feature) {
    //     labelEl.style.display = 'block'
    //     labelCityEl.textContent = e.feature.properties.name
    //     labelCountryEl.textContent = e.feature.properties.country
    //     labelShouldStick = true
    //     var lat = e.feature.properties.coordinates[1]
    //     var lng = e.feature.properties.coordinates[0]
    //     var marker = L.marker([lat, lng], { icon: icon }).addTo(map)
    //     markers.push(marker)
    //   } else {
    //     labelEl.style.display = 'none'
    //     labelCityEl.textContent = ''
    //     labelCountryEl.textContent = ''
    //     labelShouldStick = false
    //   }
    // }
  }

  render () {
    return (
      <Leaflet center={this.state.position} zoom={this.state.zoom} {...INITIAL_MAP_OPTIONS} className="map">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Leaflet>
    )
  }
}