import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';


var LeftPane = React.createClass({
	render: function(){
		return (
			<div>
				<Search />
			</div>
		);
	}
});

export default LeftPane;
