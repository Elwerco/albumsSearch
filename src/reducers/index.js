import { combineReducers } from 'redux';

import searchTracks from './searchAlbums';
import saveAlbums from './saveAlbums';

export default combineReducers({
  searchTracks,
  saveAlbums
});
