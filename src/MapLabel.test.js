import React from 'react'
import ReactDOM from 'react-dom'
import MapLabel from './MapLabel'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MapLabel />, div)
  ReactDOM.unmountComponentAtNode(div)
})
