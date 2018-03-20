import React from 'react'
import { shallow } from 'enzyme'
import { MapLabel } from './MapLabel'

it('does not render if city or country props are not provided', () => {
  const wrapper = shallow(<MapLabel />)
  expect(wrapper.find('div').length).toEqual(0)
})

it('does render if city or country props are provided', () => {
  const wrapper = shallow(<MapLabel city="foo" country="bar" />)
  expect(wrapper.find('.label-city').text()).toEqual('foo')
  expect(wrapper.find('.label-country').text()).toEqual('bar')
})

it('does not render if only one of the props are provided', () => {
  const wrapper1 = shallow(<MapLabel city="foo" />)
  expect(wrapper1.find('div').length).toEqual(0)

  const wrapper2 = shallow(<MapLabel country="foo" />)
  expect(wrapper1.find('div').length).toEqual(0)
})
