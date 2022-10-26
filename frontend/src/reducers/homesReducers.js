import { 
  START_HOMES_RETRIEVE,
  RETRIEVE_HOMES_OK,
  RETRIEVE_HOMES_ERROR,  
  FILTER_HOMES_ACTION,
  ORDER_RESULTS_BY_NEWEST,
  ORDER_RESULTS_BY_OLDEST,
  FILTER_RESULTS_BY_ACTIVE,
  FILTER_RESULTS_BY_SOLD,    
} from '../types'

const initialState = {
  homes: [],
  homesFiltered: [],
  homesByStatus: [],
  error: false,
  loading: false,
  loaded: false
}

const homesReducers = function (state = initialState, action) {
  switch (action.type) {
      case START_HOMES_RETRIEVE:
        return {
              ...state,
              error: false,
              loading: action.payload
          }
      case RETRIEVE_HOMES_OK:
        return {
              ...state,
              homes: action.payload,
              homesFiltered: action.payload,
              homesByStatus: action.payload,
              loading: false,
              loaded: true,
          }
      case RETRIEVE_HOMES_ERROR:
        return {
              ...state,
              error: action.payload,
              loading: false
          }
      case FILTER_HOMES_ACTION:
        return {
          ...state,
          homesFiltered: state.homes.filter(home => home.name.toLowerCase().includes(action.payload.toLowerCase())),
          homesByStatus: state.homes.filter(home => home.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
      case ORDER_RESULTS_BY_NEWEST:
        return {
          ...state,
          homesByStatus: [...state.homesFiltered.sort((a,b) => b.yearBuilt - a.yearBuilt)]
        }
      case ORDER_RESULTS_BY_OLDEST:
        return {
          ...state,
          homesByStatus: [...state.homesFiltered.sort((a,b) => a.yearBuilt - b.yearBuilt)]
        }
      case FILTER_RESULTS_BY_ACTIVE:
        return {
          ...state,
          homesByStatus: state.homesFiltered.filter(home => home.status === 'active')
        }
      case FILTER_RESULTS_BY_SOLD:
        return {
          ...state,
          homesByStatus: state.homesFiltered.filter(home => home.status === 'sold')
        }
      default: 
          return {
              ...state
          }
  }
}

export default homesReducers