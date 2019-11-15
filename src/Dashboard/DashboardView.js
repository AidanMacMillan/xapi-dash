import React, { Component } from 'react';
import './Dashboard.css'
import DomainView from './Domain/DomainView';
import PostView from './Post/PostView';
import GetView from './Get/GetView';

class DashboardView extends Component {
	constructor(props) {
		super(props);
		this.state = {domain: "", username: "", password: ""};
	}

	updateDomain = (domain, username, password) => {
		this.setState({domain: domain, username: username, password: password});
		this.props.updateDomain();
	}

	render() {
		return <div className="dashboard" style={{top: -this.props.dashboard*100 + "%"}}>
			<DomainView updateDomain={this.updateDomain}></DomainView>
			<PostView domain={this.state.domain} username={this.state.username} password={this.state.password}></PostView>
			<GetView domain={this.state.domain} username={this.state.username} password={this.state.password} onNavChange={this.props.onNavChange}></GetView>
		</div>;
	}
}

export default DashboardView