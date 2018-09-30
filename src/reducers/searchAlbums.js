import axios from 'axios'
import store from '../containers/store'

const initialState = []


export default function searchTracks (state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      // ...state,
      action.payload
    ]
  } else if (action.type === 'FETCH_TRACKS') {
    return [
    	action.payload
    ]
  }
  return state
}
