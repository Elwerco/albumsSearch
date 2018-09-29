import store from '../store';

var initialState = ['8bbbd699-fa85-35b2-a9d4-fac281062785', '83556d2a-8e4a-3321-8548-e850ad63d8af'];

function data() {
	for (var i = 0; i < localStorage.length; i++) {
			var parse = JSON.parse(localStorage.getItem(store.getState().playlists[i].id))
			initialState.push(parse);
		}
	console.log(initialState)
}

export default function playlists(state = initialState, action) {
  if (action.type === 'ADD_ALBUM') {
  	return [
      ...state,
      action.payload
    ]
  } else if (action.type === 'DELETE_ALBUM') {
    return action.payload;
  }
  return state;
}
