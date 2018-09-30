import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, 
CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import store from '../containers/store';
import { Link } from 'react-router-dom';

import DeleteAlbum from './DeleteAlbum.jsx';
import Header from './Header.jsx';

class SaveAlbums extends Component {
	deleteAlbum() {
		localStorage.setItem(this.props['id'], JSON.stringify(this.props));
	}
	render() {
		//Так как вебпак непредсказуемо оставляет пустые логи то в начале,
		//то в конце localStorage, надо просто их очищать, чтобы не сбивать нумирацию
		localStorage.removeItem('loglevel:webpack-dev-server');
		var list = [];
		for (var i = 0; i < localStorage.length; i++) {
		  localStorage.removeItem('loglevel:webpack-dev-server');
		  var parse = JSON.parse(localStorage.getItem(store.getState().saveAlbums[i]))
		  list.push(parse);
		}
		return(
			<div>
				<Header />
				<Row>
				    {list.map((l, index) =>
				        <Col xs='3' key={index}>
							<Card className='componentCard'>
						        <CardImg className="318img"top width="318" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
						        <CardBody>
						          <CardTitle>{l.title}</CardTitle>
						          <CardSubtitle>Card subtitle</CardSubtitle>
						          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
						          <DeleteAlbum {...l}/>
						        </CardBody>
						    </Card>
					    </Col>
			        )}
				</Row>
			</div>
		)
	}
}

export default connect(
  state => ({
    saveAlbums: state.saveAlbums
  }),
  dispatch => ({
  })
)(SaveAlbums)
