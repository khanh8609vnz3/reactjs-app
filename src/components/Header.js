import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			name: "Khanh",
			isLogin: false
		};

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login() {
		this.setState({ isLogin: true });
	}

	logout() {
		this.setState({ isLogin: false });
	}

	render() {
		const isLogin = this.state.isLogin;
		return (
			<div>
				{isLogin ? (
					<div>
						<h3>Da login rui nha</h3>
						<Button onClick={this.logout}>Logout</Button>
					</div>
					) : (
					<div>
						<h3>Chua login nha</h3>
						<Button onClick={this.login}>Login</Button>
					</div>
				)}
			</div>
			);
	}
}

export default Header;
