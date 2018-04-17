import React from 'react'
import { shallow } from 'enzyme'
import GameBoard from './GameBoard'

it('renders without crashing', () => {
  const wrapper = shallow(<GameBoard />)
  expect(wrapper.find('div').length).toEqual(1)
})
