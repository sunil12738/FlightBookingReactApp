import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Body from './body.jsx';

var Application = React.createClass({
	render: function(){
		return (
			<div>
				<Header />
				<Body />
			</div>
		);
	}
});

export default Application;
