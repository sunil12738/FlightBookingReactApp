import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';
import PriceSlider from './price_slider.jsx'

var AppStore = require('../stores/AppStore');

var LeftPane = React.createClass({

	getInitialState: function(){
		return {
			data: [],
			oneWay: true
		}
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this.getData)
	},

	getData: function(){
		var data = AppStore.getSearchData();
		var oneWay = AppStore.getOneWay();
		this.setState({
			data : data,
			oneWay : oneWay
		})
	},
	render: function(){
		return (
			<div className="">
				<Search />
				<PriceSlider data={this.state.data}/>
			</div>
		);
	}
});

export default LeftPane;
