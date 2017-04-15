import React from 'react';
import ReactDOM from 'react-dom';


var IndividualFlightDetail = React.createClass({
	render: function(){
		return (
			<div>
				{/*Hack : using table tag for now. Its expensive. Need to update*/}
				<table>
					<tr>
						<td>flight name
						</td>
					</tr>

					<tr>
						<td>from
						</td>to
					</tr>

					<tr>
						<td>depart
						</td>time
					</tr>

					<tr>
						<td>arrive
						</td>time
					</tr>
				</table>
			</div>
		);
	}
});

export default IndividualFlightDetail;
