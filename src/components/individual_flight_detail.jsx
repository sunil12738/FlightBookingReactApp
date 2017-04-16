import React from 'react';
import ReactDOM from 'react-dom';

var imagemap = require('../constants/image_map.js');

var IndividualFlightDetail = React.createClass({

	render: function(){
		return (
			<div className={this.props.data.remove ? "display-none" : "margin-10px padding-10px border-1px-solid-grey"}>

				<div className="float-right margin-10px padding-10px">
					<img src={imagemap.default[this.props.data.company_name]} className="flight-image"/> <br/>
					<input type="button" className="button" value="Book Flight"/>
				</div>

				<div>
					<h2>{"Rs. " + this.props.data.price}</h2>
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
