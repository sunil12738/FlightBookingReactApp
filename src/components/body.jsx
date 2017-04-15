import React from 'react';
import ReactDOM from 'react-dom';

import LeftPane from './left_pane.jsx';
import RightPane from './right_pane.jsx';

var Body = React.createClass({
	render: function(){
		return (
			<div>
				{/*Hack : using table tag for now. Its expensive. Need to update*/}
				<table>
					<tr>
						<td><LeftPane /></td>
						<td><RightPane /></td>
					</tr>
				</table>
			</div>
		);
	}
});

export default Body;
