import React from 'react'


class LoginForm extends React.Component {

	loginUser(event) {
		console.log('Hello!')
	}

	render() {
		return (
			<div id="navbar" className="navbar-collapse collapse">
				<div className="navbar-form navbar-right">
					<div className="form-group">
						<input type="text" placeholder="Email" className="form-control"></input>
					</div>
					<div className="form-group">
						<input type="password" placeholder="Lösenord" className="form-control"></input>
					</div>
					<button className="btn btn-success" onClick={this.loginUser}>Logga In</button>
				</div>
			</div>
		);
  }
}

export default LoginForm;