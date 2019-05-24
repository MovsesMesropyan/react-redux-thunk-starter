import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

const navigation = ({ onLogout }) => {
	return (
		<nav className="navbar navbar-fixed-top mm-navbar">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link className="navbar-brand" to="/">RRTS</Link>
				</div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><NavLink exact to="/">Posts</NavLink></li>
						<li><NavLink exact to="/about">About</NavLink></li>
						<li><NavLink exact to="/contacts">Contacts</NavLink></li>
						<li><div className="mm-logout-button glyphicon glyphicon-log-out" onClick={onLogout}></div></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};


export default navigation;