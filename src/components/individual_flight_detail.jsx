import React from 'react';
import ReactDOM from 'react-dom';

var AppStore = require('../stores/AppStore');

var IndividualFlightDetail = React.createClass({

	getDataHtml: function(){
		console.log(this.props)
		return (
			<div>
			</div>
		)
	},

	render: function(){
		return (
			<div>

				<div>
					<h2>{this.props.data.price}</h2>
				</div>
				<div className="float-right">
					<img src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" className="width-100px"/> <br/>
					<input type="button" value="Book Flight"/>
				</div>
				{/*Hack : using table tag for now. Its expensive. Need to update*/}
				<table>
					<tr>
						<td/>{this.props.data.flight_name}
						<td/>
					</tr>

					<tr>
						<td/>{this.props.data.fromcity}
						<td/>{this.props.data.tocity}
					</tr>

					<tr>
						<td/>depart
						<td/>{this.props.data.dept_time}
					</tr>

					<tr>
						<td/>arrive
						<td/>{this.props.data.arr_time}
					</tr>
				</table>
			</div>
		);
	}
});

export default IndividualFlightDetail;
