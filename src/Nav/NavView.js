import React, { Component } from 'react';
import './Nav.css'

const Dashboard = {
	DOMAIN: 0,
	POST_STATEMENTS: 1,
	GET_STATEMENTS: 2
}

class NavView extends Component {
	handleNavClick(dashboard) {
		this.props.onNavChange(dashboard);
	}

	render() {
	  return <div className="nav">
		<div className="navHeader">
			<h1>xAPI</h1>
			<h3>DASHBOARD</h3>
		</div>
		<div className="navMain">
			<div className={this.props.dashboard === Dashboard.DOMAIN ? "navItem navItemSelected" : "navItem"} onClick={() => this.handleNavClick(Dashboard.DOMAIN)}>
				xAPI Domain
				<i className="material-icons navIcon">storage</i>
			</div>
			<div className={this.props.dashboard === Dashboard.POST_STATEMENTS ? "navItem navItemSelected" : "navItem"} onClick={() => this.handleNavClick(Dashboard.POST_STATEMENTS)}>
				POST Statements
				<i className="material-icons navIcon">keyboard_arrow_up</i>
				{this.props.domain === "" ? <div className="navWarning">xAPI Domain settings must be set</div> : null}
			</div>
			<div className={this.props.dashboard === Dashboard.GET_STATEMENTS ? "navItem navItemSelected" : "navItem"}  onClick={() => this.handleNavClick(Dashboard.GET_STATEMENTS)}>
				GET Statements
				<i className="material-icons navIcon">get_app</i>
				{this.props.domain === "" ? <div className="navWarning">xAPI Domain settings must be set</div> : null}
			</div>
		</div>
	  </div>;
	}
}

export default NavView