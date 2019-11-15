import React, { Component } from 'react';
import './Get.css'

class GetView extends Component {
	constructor(props) {
		super(props);
		this.state = {statements: null};
	}

	renderErrorMessage() {
		return <button className="errorButton" onClick={() => this.props.onNavChange(0)}>Set xAPI Domain Settings</button>;
	}

	fetchStatements = () => {
		let headers = new Headers();
		headers.set('Authorization', 'Basic ' + btoa(this.props.username + ":" + this.props.password));

		fetch(this.props.domain + "statements", {method: "GET", headers: headers}).then(response => response.json())
			.then(json => {
				if(json.statements) {
					let statements = [];
					json.statements.slice(0,8).forEach(statement => {
						statements.push(<tr><td>{statement.actor.name}</td>
										<td>{statement.verb.id}</td>
										<td>{statement.object.id}</td></tr>)
					});
					this.setState({statements: statements});
					this.setState({validRefresh: 1});
				} else {
					this.setState({validRefresh: -1});
				}
			}).catch((error) => this.setState({validRefresh: -1}));
	}

	renderStatements = () => {
		return <table><thead><tr><th>Actor</th><th>Verb</th><th>Object</th></tr></thead><tbody>{this.state.statements}</tbody></table>;
	}

	resetError = () => {
		this.setState({validRefresh: 0});
	}

	renderError = () => {
		switch(this.state.validRefresh) {
			case -1:
				setTimeout(this.resetError, 2000);
				return <div className="cardInfo cardError">
					Unable to get statements.
				</div>;
			case 0:
				return <div className="cardInfo"></div>;
			case 1:
				setTimeout(this.resetError, 2000);
				return <div className="cardInfo cardSuccess">
					Successfully refreshed newest statements.
				</div>;
		}
	}

	render() {
		return <div className="get">
			<div className="card getStatements">
				<div className="cardTitle">Get Statements<i className="material-icons cardIcon">get_app</i></div>
				<div className="cardBody">
					{this.props.domain === "" ? this.renderErrorMessage() : this.renderStatements()}
				</div>
				<button className="cardFooter" onClick={this.props.domain === "" ? null : this.fetchStatements} disabled={this.props.domain === ""}>
					Refresh
				</button>
				{this.renderError()}
			</div>
		</div>;
	}
}

export default GetView