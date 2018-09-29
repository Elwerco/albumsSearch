import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import store from './store';

export default class DeleteAlbum extends Component {
	deleteAlbum() {
		localStorage.removeItem(this.props.id);
		var secondStore = store.getState().playlists;
		secondStore.splice(this.props.id, 1);
		console.log(secondStore);
		store.dispatch({ type: 'DELETE_ALBUM', payload: secondStore });
		store.dispatch({ type: 'ADD_TRACK' });
	}
	render() {
		return(
			<button color="danger" onClick={this.deleteAlbum.bind(this)}>Clicks</button>
		)
	}
}
