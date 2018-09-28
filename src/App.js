import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import store from './store'
import { getTracks } from './actions/tracks';
import { p } from './actions/tracks';
import Album from './Album';

class App extends Component {
  albButton () {
    console.log('addTrack', this.albInput.value);
    this.props.onGetTracks(this.albInput.value);
    this.albInput.value = '';
  }

  render () {
    console.log(this.props.tracks)
    const onLoad = this.props.tracks
    console.log(onLoad)
    return (
      <div>
        <input type='text' ref={(input) => { this.albInput = input }} />
        <button onClick={this.albButton.bind(this)}>Text</button>
        {onLoad[0] && onLoad[0].data['release-groups'].map((d, index) =>
          <Album key={index} {...d}>{d.title}</Album>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    onGetTracks: (name) => {
      dispatch(getTracks(name))
    }
  })
)(App)
