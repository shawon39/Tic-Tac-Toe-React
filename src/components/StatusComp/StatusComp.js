import React, { Component } from "react";
import "./StatusComp.css";

class StatusComp extends Component {
	render() {
		return (
			<div className="statusClass">
				<div>
					{this.props.myState.isEndGame !== true ? (
						<p>Next Mark : Player {this.props.myState.playerMove}</p>
					) : (this.props.myState.winner === "!" ? (
						<p>Match Tied !</p>
					) : (
						<p>{this.props.myState.winner} Won The Match !</p>
					))}
				</div>
			</div>
		);
	}
}

export default StatusComp;
