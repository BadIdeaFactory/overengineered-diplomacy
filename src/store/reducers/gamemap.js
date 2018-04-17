import { SET_SELECTED_DEPOT } from '../actions'

const initialState = {
  depotCity: null,
  depotCountry: null
}

const gamemap = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DEPOT:
      return {
        ...state,
        depotCity: action.city,
        depotCountry: action.country
      }
    default:
      return state
  }
}

export default gamemap
