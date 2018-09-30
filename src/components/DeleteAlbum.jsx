import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import store from '../containers/store';

import { Button } from 'reactstrap';

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
			<Button color="danger" onClick={this.deleteAlbum.bind(this)}>Clicks</Button>
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
