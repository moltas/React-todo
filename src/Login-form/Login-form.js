import React from 'react'


class LoginForm extends React.Component {

	constructor(props) {
		super(props)
	}

	loginUser(event) {
		alert('Hello!')
	}


	render() {
		return (
			<div id="navbar" className="navbar-collapse collapse">
				<form className="navbar-form navbar-right">
					<div className="form-group">
						<input type="text" placeholder="Email" className="form-control"></input>
					</div>
					<div className="form-group">
						<input type="password" placeholder="Lösenord" className="form-control"></input>
					</div>
					<button type="submit" className="btn btn-success" onClick={this.loginUser()}>Logga In</button>
				</form>
			</div>
		);
  }
}

export default LoginForm;