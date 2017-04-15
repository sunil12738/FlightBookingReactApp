import React from 'react';
import ReactDOM from 'react-dom';

var imagemap = require('../constants/image_map.js');

var IndividualFlightDetail = React.createClass({

	render: function(){
		return (
			<div className={this.props.data.remove ? "display-none" : ""}>

				<div>
					<h2>{"Rs. " + this.props.data.price}</h2>
				</div>
				<div className="float-right">
					<img src={imagemap.default[this.props.data.company_name]} className="width-100px"/> <br/>
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
