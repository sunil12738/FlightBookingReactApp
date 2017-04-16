import React from 'react';
import ReactDOM from 'react-dom';

import LeftPane from './left_pane.jsx';
import RightPane from './right_pane.jsx';

var Body = React.createClass({

	render: function(){
		return (
			<div className="">
				{/*Hack : using table tag for now. Its expensive. Need to update*/}
				<div className="float-left"><LeftPane /></div>
				<div className="float-right"><RightPane /></div>
				{/*<table className="width-100">
									<tr>
										<td className="vertical-align-top"><LeftPane /></td>
										<td className=""><RightPane /></td>
									</tr>
								</table>*/}
			</div>
		);
	}
});

export default Body;
