import React, { Component } from 'react';
import './Post.css'

const Verbs = [
	"initialized",
	"terminated",
	"suspended",
	"resumed",
	"passed",
	"failed",
	"completed"
];

const Objects = {
	"Troubleshooting Safety Learning Lab": "This module will introduce you to issues affecting safety when troubleshooting.  This includes shock and arc flash considerations. You will perform lockout/tagout procedures for single and three phase systems in a lab environment.",
	"Troubleshooting Fundamentals Learning Lab": "This module will introduce you to Simutech’s Systematic Troubleshooting Approach as well as explore meter usage and specific techniques for finding opens and shorts.  You will be guided through several troubleshooting exercises before being assessed in a lab environment.",
	"Troubleshooting Electrical Circuits": "This module will introduce you to a basic electrical circuit scenario where you can develop your troubleshooting skills. You will be exposed to problems regarding switches, relays and lights as well as the associated wiring and connections.",
	"Troubleshooting Control Circuits Learning Lab": "This module focuses on control circuits and their components. It includes a series of troubleshooting tips to advance your skills, and an examination of control circuit components in an interactive lab environment. You will also be given a series of exercises that will walk you through various faults. Finally, there is an assessment section where you will apply what you have learned.",
	"Troubleshooting Control Circuits": "The focus of this module will be on the control circuit. Electromechanical relays will be used to define logical function in a door lock scenario. You will also be introduced to cascading relay logic as well as ladder diagrams.",
	"Troubleshooting Motor Circuits Learning Lab": "This module will focus on motor circuits and their components.  You will be given exercises that will walk you through how to solve various faults. Finally an assessment portion where you will be applying what you have learned.",
	"Troubleshooting Motor Circuits": "This module will expose you to general motor failures involving internal windings, failed bearings and other electrical and mechanical issues. You will have the opportunity to troubleshoot a typical forward/reversing motor circuit in a garage door scenario."
}

class DomainView extends Component {
	constructor(props) {
		super(props);
		this.state = {actor: "LMS Username", account: "123456", homepage: "https://companyname.com", verb: "initialized",
			object: "Troubleshooting Safety Learning Lab"};
	}

	componentDidMount = () => {
		this.setState({guid: this.generateGUID()})
	}

	renderOptions(list) {
		let options = [];
		list.forEach((element) => {
			options.push(<option>{element}</option>);
		});
		return options;
	}

	S4() {
		    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
	}
		 
	generateGUID() {
		return (this.S4() + this.S4() + "-" + this.S4() + "-4" + this.S4().substr(0,3) + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()).toLowerCase();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let headers = new Headers();
		headers.set('Authorization', 'Basic ' + btoa(this.props.username + ":" + this.props.password));

		let now = new Date();
		let statement = 
		{
			"timestamp": now.toISOString(),  
			"actor": {
				"objectType": "Agent",
				"name": this.state.actor,  
				"account": {
					"name": this.state.account,
					"homePage": this.state.homepage
				}
		  	},
			"verb": {
				"id": "http://adlnet.gov/expapi/verbs/" + this.state.verb,
				"display": {"en-US": this.state.verb}
		  	},
			"object": {
				"id": "http://simutechmultimedia.com/simutech-training-system/" + this.state.object.toLowerCase().split(" ").join("-"),
				"definition": {
					"name": { "en-US": this.state.object},
					"description": { "en-US": "This module will introduce you to a basic electrical circuit scenario where you can develop your troubleshooting skills. You will be exposed to problems regarding switches, relays and lights as well as the associated wiring and connections."}
				}
			},
			"result": {
			  "completion": true,
			  "success": true,
			  "score": {
				"scaled": .95
			   }
			},
			"context": {
				"registration": this.state.guid,
				"language": "en-US",
				"contextActivities": {
					"parent": [{
						"objectType": "Activity",
						"id": "http://simutechmultimedia.com/simutech-training-system"
					}],
					"grouping": [{
						"objectType": "Activity",
						"id": "http://www.example.com/activities/grouping"
					}]
				}
		  	}
		};
		console.log(JSON.stringify(statement));
		fetch(this.props.domain + "statements", {method: "POST", headers: headers, body: JSON.stringify(statement)}).then(response => response.json())
			.then(json => {
				this.setState({validSubmit: 1});
			}).catch((error) => this.setState({validSubmit: -1}));
	}

	handleInputChange(e, name) {
		this.setState({[name]: e.target.value})
		if(this.state.validSubmit !== 0) {
			this.setState({validSubmit: 0});
		}
	}

	resetError = () => {
		this.setState({validSubmit: 0});
	}

	renderError = () => {
		switch(this.state.validSubmit) {
			case -1:
				setTimeout(this.resetError, 2000);
				return <div className="cardInfo cardError">
					Unable to post statement.
				</div>;
			case 0:
				return <div className="cardInfo"></div>;
			case 1:
				setTimeout(this.resetError, 2000);
				return <div className="cardInfo cardSuccess">
					Successfully posted statement.
				</div>;
		}
	}
	
	render() {
	  return <div className="post">
			<div className="card postStatement">
				<div className="cardTitle">Post Statement<i className="material-icons cardIcon">keyboard_arrow_up</i></div>
				<form onSubmit={this.handleSubmit}>
					<div className="cardBody">
						<div className="autoGrid">
							<div>
								<label>Actor</label>
								<input value={this.state.actor} onChange={(e) => this.handleInputChange(e, "actor")}></input>
							</div>
							<div>
								<label>Account</label>
								<input value={this.state.account} onChange={(e) => this.handleInputChange(e, "account")}></input>
							</div>
							<div>
								<label>Homepage</label>
								<input value={this.state.homepage} onChange={(e) => this.handleInputChange(e, "homepage")}></input>
							</div>
							<div>
								<label>Verb</label>
								<select value={this.state.verb} onChange={(e) => this.handleInputChange(e, "verb")}>
									{this.renderOptions(Verbs)}
								</select>
							</div>
						</div>
						<div className="autoGrid">
							<div>
								<label>Object</label>
								<select value={this.state.object} onChange={(e) => this.handleInputChange(e, "object")}>
									{this.renderOptions(Object.keys(Objects))}
								</select>
							</div>
						</div>
					</div>
					<button className="cardFooter" disabled={this.props.domain === ""}>
						Post Statement
					</button>
					{this.renderError()}
				</form>
			</div>
	  	</div>;
	}
}

export default DomainView