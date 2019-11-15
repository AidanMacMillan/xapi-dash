import React, { Component } from 'react';
import './Nav.css'

const Dashboard = {
	DOMAIN: 0,
	POST_STATEMENTS: 1,
	GET_STATEMENTS: 2
}

class NavIndicator extends Component {
	handleNavClick(dashboard) {
		this.props.onNavChange(dashboard);
	}

	render() {
		return <div className="navIndicator">
			<div onClick={() => this.handleNavClick(Dashboard.DOMAIN)} className={this.props.dashboard === Dashboard.DOMAIN ? "navIndicatorSection navIndicatorSectionSelected" : "navIndicatorSection"}></div>
			<div onClick={() => this.handleNavClick(Dashboard.POST_STATEMENTS)} className={this.props.dashboard === Dashboard.POST_STATEMENTS ? "navIndicatorSection navIndicatorSectionSelected" : "navIndicatorSection"}></div>
			<div onClick={() => this.handleNavClick(Dashboard.GET_STATEMENTS)} className={this.props.dashboard === Dashboard.GET_STATEMENTS ? "navIndicatorSection navIndicatorSectionSelected" : "navIndicatorSection"}></div>
		</div>;
	}
}
export default NavIndicator