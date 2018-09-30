import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import store from '../containers/store';

class DeleteAlbum extends Component {
	deleteAlbum() {
		localStorage.removeItem(this.props.id);
		var secondStore = store.getState().saveAlbums;
		secondStore.splice(this.props.id, 1);
		store.dispatch({ type: 'DELETE_ALBUM', payload: secondStore });
		document.location.reload(true);
	}
	render() {
		return(
			<button color="danger" onClick={this.deleteAlbum.bind(this)}>Clicks</button>
		)
	}
}
export default connect(
  state => ({
    saveAlbums: state.saveAlbums
  }),
  dispatch => ({

  })
)(DeleteAlbum)
