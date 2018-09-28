const initialState = [
];

export default function playlists(state = initialState, action) {
  if (action.type === 'ADD_ALBUM') {
  	return [
      ...state,
      action.payload
    ]
  } else if (action.type === 'DELETE_ALBUM') {
    return state;
  }
  return state;
}
