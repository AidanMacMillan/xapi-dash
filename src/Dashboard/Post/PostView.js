import React, { Component } from 'react';
import './Post.css'

class DomainView extends Component {
	render() {
	  return <div className="post">
			<div className="card postStatement">
				<div className="cardTitle">Post Statement<i className="material-icons cardIcon">keyboard_arrow_up</i></div>
				<div className="cardBody">
					<div className="autoGrid">
						<div>
							<label>Actor</label>
							<input value="LMS Username"></input>
						</div>
						<div>
							<label>Account</label>
							<input value="123456"></input>
						</div>
						<div>
							<label>Homepage</label>
							<input value="https://companyname.com"></input>
						</div>
						<div>
							<label>Verb</label>
							<select>
								<option>Initialized</option>
							</select>
						</div>
					</div>
					<div className="autoGrid">
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
				<button className="cardFooter">
					Post Statement
				</button>
			</div>
	  	</div>;
	}
}

export default DomainView