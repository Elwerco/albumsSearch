import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../containers/store';
import { Link } from 'react-router-dom';

import { getTracks } from '../actions/tracks';
import { p } from '../actions/tracks';
import Album from './Album.jsx';
import { Container, Row, Col, Input, Button } from 'reactstrap';

class App extends Component {
  albButton () {
    console.log('addAlbum', this.albInput.value);
    this.props.onGetTracks(this.albInput.value);
    this.albInput.value = '';
  }

  render () {
    document.addEventListener("storage", function storage(argument) {
      localStorage.removeItem('loglevel:webpack-dev-server');
    }, false);
    const onLoad = this.props.searchTracks
    return (
      <div>
        <div className='flexApp'>
          <Link to='/save'>Save Albums</Link>
          <input className='inputApp' type='text' ref={(input) => { this.albInput = input }} />
          <Button className='primaryAppButton' color='primary' onClick={this.albButton.bind(this)}>Text</Button>
        </div>
        <Row className="appRow">
          {onLoad[0] && onLoad[0].data['release-groups'].map((d, index) =>
            <Col xs="3" key={index}><Album key={index} {...d}>{d.title}</Album></Col>
          )}
        </Row>
      </div>
    )
  }
}

export default connect(
  state => ({
    searchTracks: state.searchTracks,
    saveAlbums: state.saveAlbums
  }),
  dispatch => ({
    onGetTracks: (name) => {
      dispatch(getTracks(name))
    }
  })
)(App)
