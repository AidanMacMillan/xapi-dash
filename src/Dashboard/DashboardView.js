import React, { Component } from 'react';
import './Dashboard.css'
import DomainView from './Domain/DomainView';
import PostView from './Post/PostView';

class DashboardView extends Component {
	render() {
		return <div className="dashboard" style={{top: -this.props.dashboard*window.innerHeight + "px"}}>
			<DomainView></DomainView>
			<PostView></PostView>
		</div>;
	}
}

export default DashboardView