import React, { Component } from "react";
import GridComp from "./GridComp/GridComp";
import "./BoardComp.css";
import StatusComp from "../StatusComp/StatusComp";

let used = new Map();

class BoardComp extends Component {
	state = {
		playerMove: 1,
		winner: "!",
		isEndGame: false,
		mark1: "",
		mark2: "",
		mark3: "",
		mark4: "",
		mark5: "",
		mark6: "",
		mark7: "",
		mark8: "",
		mark9: "",
		count: 0,
	};

	resultCheck = () => {
		const {
			mark1,
			mark2,
			mark3,
			mark4,
			mark5,
			mark6,
			mark7,
			mark8,
			mark9,
		} = this.state;

		let mk;
		let ans = 0;
		let move;

		if (this.state.playerMove === 1) move = 2;
		else move = 1;

		if (move === 1) {
			mk = "X";
		} else {
			mk = "O";
		}
		if (mark1 === mk && mark2 === mk && mark3 === mk) ans = 1;
		else if (mark4 === mk && mark5 === mk && mark6 === mk) ans = 1;
		else if (mark7 === mk && mark8 === mk && mark9 === mk) ans = 1;
		else if (mark1 === mk && mark4 === mk && mark7 === mk) ans = 1;
		else if (mark2 === mk && mark5 === mk && mark8 === mk) ans = 1;
		else if (mark3 === mk && mark6 === mk && mark9 === mk) ans = 1;
		else if (mark1 === mk && mark5 === mk && mark9 === mk) ans = 1;
		else if (mark3 === mk && mark5 === mk && mark7 === mk) ans = 1;

		if (ans) {
			this.setState({
				...this.state,
				winner: `Player ${move}`,
				isEndGame: true,
			});
		}
		else if (this.state.count === 9) {
			this.setState({
				...this.state,
				isEndGame: true,
			});
		}
	};

	HandleGrid = (event) => {
		if (this.state.isEndGame) return new Error("Game Has Ended !");
		let myNameAttr = event.target.getAttribute("name");
		if (myNameAttr === null) return new Error("String is null");

		if(!used[myNameAttr]) used[myNameAttr] = true;
		else return new Error("Already Used !");

		if (this.state.playerMove === 1) {
			this.setState(
				{
					...this.state,
					[event.target.getAttribute("name")]: "X",
					playerMove: 2,
					count: this.state.count + 1,
				},
				() => this.resultCheck()
			);
		} else {
			this.setState(
				{
					...this.state,
					[event.target.getAttribute("name")]: "O",
					playerMove: 1,
					count: this.state.count + 1,
				},
				() => this.resultCheck()
			);
		}
	};

	render() {
		console.log("Winner ", this.state.winner);
		return (
			<div className="mainClass">
				<div className="myBoard row">
					<div>
						<GridComp
							name="mark1"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark1}
						/>
						<GridComp
							name="mark2"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark2}
						/>
						<GridComp
							name="mark3"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark3}
						/>
					</div>
					<div>
						<GridComp
							name="mark4"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark4}
						/>
						<GridComp
							name="mark5"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark5}
						/>
						<GridComp
							name="mark6"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark6}
						/>
					</div>
					<div>
						<GridComp
							name="mark7"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark7}
						/>
						<GridComp
							name="mark8"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark8}
						/>
						<GridComp
							name="mark9"
							HandleGrid={this.HandleGrid}
							mark={this.state.mark9}
						/>
					</div>
				</div>
				<div className="myStatusClass">
					<StatusComp myState={this.state} />
				</div>
			</div>
		);
	}
}

export default BoardComp;
