import React, { Component } from "react";
import "./App.css";
import BoardComp from "./components/BoardComp/BoardComp";

class App extends Component {
	render() {
		return (
			<div className="App container">
				<p className="text-center">Let's Play Tic Tac Toe</p>
				<div className="row">
					<div className="col-sm-12 leftSide">
						<BoardComp />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
