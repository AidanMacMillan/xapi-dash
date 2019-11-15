import React, { Component } from 'react';
import './Domain.css'

class DomainView extends Component {
	constructor(props) {
		super(props);
		this.state = {domain: "", username: "", password: "", validAuth: 0};
	}

	handleSubmit = (e) => {
		let headers = new Headers();
		headers.set('Authorization', 'Basic ' + btoa(this.state.username + ":" + this.state.password));
		fetch(this.state.domain + "statements", {method: "GET", headers: headers}).then(response => response.json())
			.then(json => {
				if(json.statements) {
					this.props.updateDomain(this.state.domain, this.state.username, this.state.password)
					this.setState({validAuth: 1});
				} else {
					this.setState({validAuth: -1});
				}
			}).catch((error) => this.setState({validAuth: -1}));
    	e.preventDefault();
	}

	handleInputChange(e, name) {
		this.setState({[name]: e.target.value})
		if(this.state.validAuth !== 0) {
			this.setState({validAuth: 0});
		}
	}

	resetError = () => {
		this.setState({validAuth: 0});
	}

	renderError = () => {
		switch(this.state.validAuth) {
			case -1:
				setTimeout(this.resetError, 2000);
				return <div className="cardInfo cardError">
					Invalid xAPI Domain Credentials.
				</div>;
			case 0:
				return <div className="cardInfo"></div>;
			case 1:
				setTimeout(this.resetError, 2000);
				return <div className="cardInfo cardSuccess">
					Successfully updated xAPI Domain Credentials.
				</div>;
		}
	}

	render() {
	  return <div className="domain">
			<div className="domainForm card">
				<div className="cardTitle">xAPI Domain Settings<i className="material-icons cardIcon">storage</i></div>
				<form onSubmit={this.handleSubmit}>
					<div className="cardBody">
						<label>xAPI Domain</label>
						<input type="url" value={this.state.domain} onChange={(e) => this.handleInputChange(e,"domain")}></input>
						<div className="autoGrid">
							<div>
								<label>Username</label>
								<input value={this.state.username} placeholder="" onChange={(e) => this.handleInputChange(e,"username")}></input>
							</div>
							<div>
								<label>Password</label>
								<input type="password" value={this.state.password} placeholder="" onChange={(e) => this.handleInputChange(e,"password")}></input>
							</div>
						</div>
					</div>
					<button className="cardFooter" disabled={!(this.state.domain && this.state.username && this.state.password)}>
						Save Domain Settings
					</button>
					{this.renderError()}
				</form>
			</div>
	  	</div>;
	}
}

export default DomainView