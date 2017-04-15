import React from 'react';
import ReactDOM from 'react-dom';

var AppStore = require('../stores/AppStore');


var Itinerary = React.createClass({

	getInitialState: function(){
		return {
			startCity : "---",
			endCity : "---",
			deptDate : "---",
			returnDate : "---",
		}
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this.getData)
	},

	getData: function(){
		var data = AppStore.getSearchData();
		this.setState({
			startCity : data.startCity,
			endCity : data.endCity,
			deptDate : data.deptDate,
			returnDate : data.returnDate			
		})
	},
	render: function(){
		return (
			<div>
				<div>
					<span>{this.state.startCity}</span>
					<span>></span>
					<span>{this.state.endCity}</span>
					<span>></span>
					<span>{this.state.startCity}</span>
				</div>
				<div>
					<span>{this.state.deptDate}</span>
					<span>:</span>
					<span>{this.state.returnDate}</span>
				</div>
			</div>
		);
	}
});

export default Itinerary;
