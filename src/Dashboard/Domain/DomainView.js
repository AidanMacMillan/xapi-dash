import React, { Component } from 'react';
import './Domain.css'

class DomainView extends Component {
	render() {
	  return <div className="domain">
			<div className="domainForm card">
				<div className="cardTitle">xAPI Domain Settings<i className="material-icons cardIcon">storage</i></div>
				<div className="cardBody">
					<label>xAPI Domain</label>
					<input placeholder=""></input>
					<div className="doubleGrid">
						<div>
							<label>Username</label>
							<input placeholder=""></input>
						</div>
						<div>
							<label>Password</label>
							<input placeholder=""></input>
						</div>
				  	</div>
					<button>Save Domain Settings</button>
				</div>
			</div>
	  	</div>;
	}
}

export default DomainView