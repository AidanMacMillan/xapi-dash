import React, { Component } from 'react';
import DashboardView from './Dashboard/DashboardView';
import NavView from './Nav/NavView'
import NavIndicator from './Nav/NavIndicator'
import './App.css';

const Dashboard = {
	DOMAIN: 0,
	POST_STATEMENTS: 1,
	GET_STATEMENTS: 2
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {dashboard: Dashboard.DOMAIN, domain: ""};
	}

	handleNavChange = (dashboard) => {
		this.setState({dashboard: dashboard});
	}

	updateDomain = (domain) => {
		this.setState({domain: domain});
	}

	render() {
		return <div className="App">
			<NavView domain={this.state.domain} dashboard={this.state.dashboard} onNavChange={this.handleNavChange}></NavView>
			<DashboardView dashboard={this.state.dashboard} updateDomain={this.updateDomain} onNavChange={this.handleNavChange}></DashboardView>
			<NavIndicator dashboard={this.state.dashboard} onNavChange={this.handleNavChange}></NavIndicator>
		</div>;
	}
}

export default App;