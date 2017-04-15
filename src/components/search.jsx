import React from 'react';
import ReactDOM from 'react-dom';
import SearchAction from '../actions/search_action.js'
// import UpdateOneWay from '../actions/update_oneway.js'

var Search = React.createClass({

	getInitialState: function(){
		return {
			selectedDate : this.currentDate(),
			validation : {
				startCity : true,
				endCity : true,
				deptDate : true,
				returnDate : true
			},
			oneway : true
		}
	},

	componentDidMount: function(){
	
	},

	currentDate: function(){
		var today = new Date();
		var date = today.getDate();
		var month = today.getMonth()+1;
		var year = today.getFullYear();
		if(date/10<1) date = '0'+date;
		if(month/10<1) month = '0'+month;
		return year+'-'+month+'-'+date;
	},

	updateValue: function(x){
		this.setState({
			selectedDate : this.refs.selectedDate.value
		})
	},

	getCityNames: function(){
		var city_names = ["delhi", "mumbai", "bengaluru", "kolkata", "kanpur"]
		var data = [];
		var temp = null;
		for (var i = 0; i < city_names.length; i++) {
			temp = <option value={city_names[i]} />
			data.push(temp) 
		};
		return data

	},

	validateData: function(data){
		//for one way flight, the 3 info should be filled
		if((!data.startCity || !data.endCity || !data.deptDate) && this.state.oneway){ 
			return false;
		}
		//for two way flight, all 4 info should be filled
		else if((!data.startCity || !data.endCity || !data.deptDate || !data.returnDate) && !this.state.oneway){
			return false;
		}
		return true
	},

	resetValidation: function(){
		this.setState({
			validation : {
				startCity : true,
				endCity : true,
				deptDate : true,
				returnDate : true
			}			
		})
	},

	searchFlight: function(){
		var data = {
			startCity : this.refs.startCity.value,
			endCity : this.refs.endCity.value,
			deptDate : this.refs.selectedDate.value,
			returnDate : this.refs.returnDate.value,
			oneway : this.state.oneway
		}
		this.setState({
			validation : {
				startCity : data.startCity,
				endCity : data.endCity,
				deptDate : data.deptDate, 
				returnDate : data.returnDate || data.oneway
			}
		})
		if(this.validateData(data)){
			SearchAction.searchFlights(data);
		}
	},

	oneWaySearch: function(){
		this.setState({
			oneway : true
		})
		// TODO : this might not be needed in future as 
		// flight is one way to two way is already sent in above function
		// UpdateOneWay.oneWayUpdate(this.state.oneway)
	},

	twoWaySearch: function(){
		this.setState({
			oneway : false
		})
		// UpdateOneWay.oneWayUpdate(this.state.oneway)
	},

	render: function(){
		return (
			<div>
				<div>
					<input type="button" value="one way" onClick={this.oneWaySearch} className={"button "}/>
					<input type="button" value="two way" onClick={this.twoWaySearch} className={"button "}/>
				</div>
				<div>
					<input list="city_names" ref="startCity" 
						className={this.state.validation.startCity ? "" : "border-1px-solid-red"} 
						onClick={this.resetValidation}/> <br/>

					<input list="city_names" ref="endCity" 
						className={this.state.validation.endCity ? "" : "border-1px-solid-red"} 
						onClick={this.resetValidation}/> <br/>

					<datalist id="city_names">
						{this.getCityNames()}
					</datalist> 

					<input type="date" min={this.currentDate()} value={this.state.selectedDate} ref="selectedDate"
						className={this.state.validation.deptDate ? "" : "border-1px-solid-red"} 
						onChange={this.updateValue.bind()} onClick={this.resetValidation}/> <br/>

					<input type="date" min={this.state.selectedDate} ref="returnDate" disabled={this.state.oneway}
						className={this.state.validation.returnDate ? "" : "border-1px-solid-red"} 
						onClick={this.resetValidation}/> <br/>

					<input type="button" value="Search" onClick={this.searchFlight.bind()} />
				</div>
			</div>
		);
	}
});

export default Search;
