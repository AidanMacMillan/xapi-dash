import React, { Component } from 'react';
import './Post.css'

class DomainView extends Component {
	render() {
	  return <div className="post">
			<div className="card postStatement">
				<div className="cardTitle">Post Statement<i className="material-icons cardIcon">keyboard_arrow_up</i></div>
				<div className="cardBody">
					<div className="postStatementGrid">
						<div>
							<label>Actor</label>
							<input placeholder=""></input>
						</div>
						<div>
							<label>Account</label>
							<input placeholder=""></input>
						</div>
						<div>
							<label>Homepage</label>
							<input placeholder=""></input>
						</div>
						<div>
							<label>Verb</label>
							<input placeholder=""></input>
						</div>
						<div>
							<label>Object</label>
							<input placeholder=""></input>
						</div>
						<div>
							<label>Definition</label>
							<input placeholder=""></input>
						</div>
					</div>
				</div>
			</div>
	  	</div>;
	}
}

export default DomainView