import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import App from './components/App.jsx';
import SaveAlbums from './components/SaveAlbums.jsx';
import './css/index.css';
import store from './containers/store';

ReactDOM.render(
  <Provider store={store}>
	  <BrowserRouter>
	  	<Switch>
		  	<Route exact path='/' component={App} />
		  	<Route path='/save' component={SaveAlbums} />
	  	</Switch>
	  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
