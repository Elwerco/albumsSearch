import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store';

import DeleteAlbum from './DeleteAlbum'

export default class SaveAlbums extends Component {
	deleteAlbum() {
		localStorage.setItem(this.props['id'], JSON.stringify(this.props));
	}
	render() {
		var list = [];
		//Лимит в 1000 треков
		for (var i = 0; i < 999; i++) {
		  var parse = JSON.parse(localStorage.getItem[0])
		  if (parse) {
		  	parse.secondId = i;
		 	list.push(parse);
		  }
		}
		console.log(localStorage.length);
		return(
			<div>
			    {list.map((l, index) =>
		          <div key={index}>{l.title} <DeleteAlbum {...l}/></div>
		        )}
			</div>
		)
	}
}
