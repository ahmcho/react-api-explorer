import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
	<header>
		<h1>Simple API Explorer</h1>
		<ul>
			<li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
			<li><NavLink to="/chuck-norris"  activeClassName="is-active">Chuck Norris API</NavLink></li>
			<li><NavLink to="/numbers"  activeClassName="is-active" exact={true}>Number API</NavLink></li>
		</ul>
	</header>
)

export default Header;