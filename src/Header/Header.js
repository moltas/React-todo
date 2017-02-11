import React from 'react'
import './Header.css'
import	LoginForm from '../Login-form/Login-form'

// Stateless presentation component
const Header = (props) => {
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">React Todo</a>
				</div>
				<LoginForm />
			</div>
		</nav>
	)
}

export default Header;