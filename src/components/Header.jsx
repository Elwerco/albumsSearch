import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return(
			<div>
		        <p></p>
		        <Nav>
		          <NavItem>
		            <Link to='/'>Search albums</Link>
		          </NavItem>
		        </Nav>
		        <hr />
	        </div>
		)
	}
}