import store from '../containers/store';

var initialState = [];
//Первое место в localstorage занимают логи webpack`a. Поэтому отсчитываем от 1.
for (var i = 0; i < localStorage.length; i++) {
  var parse = localStorage.key(i)
  initialState.push(parse);
}

export default function saveAlbums(state = initialState, action) {
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
