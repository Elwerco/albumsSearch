import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import store from './store';

export default class DeleteAlbum extends Component {
	deleteAlbum() {
		localStorage.removeItem(this.props);
		window.location.reload();
	}
	render() {
		var list = [];
		return(
			<button color="danger" onClick={this.deleteAlbum.bind(this)}>Clicks</button>
		)
	}
}
