import axios from 'axios'

export const getTracks = (name) => dispatch => {
  axios.get('http://musicbrainz.org/ws/2/release-group/?query=$' + name + '&fmt=json')
    .then(response => {
    	dispatch({ type: 'ADD_TRACK', payload: response })
    })
    .catch(function (error) {
      console.log(error)
    })
}

// export var p = false
