import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import store from './store';

import { Card, CardImg, CardText, CardBody, 
CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Album extends Component {
	addAlbumToStore() {
		localStorage.setItem(this.props.id, JSON.stringify(this.props));
		store.dispatch({ type: 'ADD_ALBUM', payload: this.props.id })
		console.log(store.getState().playlists)
	}
	render() {
		return(
		  <Card>
	        // <CardImg className="318img"top width="318" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
	        <CardBody>
	          <CardTitle>{this.props.title}</CardTitle>
	          <CardSubtitle>Card subtitle</CardSubtitle>
	          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
	          <Button onClick={this.addAlbumToStore.bind(this)}>Button</Button>
	        </CardBody>
	      </Card>
		)
	}
}
