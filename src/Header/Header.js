import React from 'react'
import './Header.css'
import	LoginForm from '../Login-form/Login-form'

// Stateless presentation component
const Header = () => {
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<h2 className="navbar-brand">React Todo</h2>
				</div>
				<LoginForm/>
			</div>
		</nav>
	)
}

export default Header;