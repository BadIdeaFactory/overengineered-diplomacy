import { SET_SELECTED_DEPOT } from '../actions'

export function setSelectedDepot (city, country) {
  return {
    type: SET_SELECTED_DEPOT,
    city,
    country
  }
}
