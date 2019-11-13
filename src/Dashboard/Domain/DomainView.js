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
					<div className="autoGrid">
						<div>
							<label>Username</label>
							<input placeholder=""></input>
						</div>
						<div>
							<label>Password</label>
							<input placeholder=""></input>
						</div>
				  	</div>
					
				</div>
				<button className="cardFooter">
					Save Domain Settings
				</button>
			</div>
	  	</div>;
	}
}

export default DomainView