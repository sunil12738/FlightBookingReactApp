var ADispatcher = require('../dispatchers/dispatcher');

var FlightData = require('../constants/data.js');

var SearchAction = {

	searchFlights: function(data){
		//data = { startCity, endCity, deptDate, returnDate, oneway}
		var temp_info = {
			"departure" : [],
			"return_" : [],
			"max_price" : 0,
			"min_price" : 0
		}
		var max_price=-1, min_price=999999;
		//search for one way flights
		console.log("sunil")
		console.log(FlightData)
		var flight_data = FlightData.default
		for (var i = 0; i < flight_data.length; ++i) {
			if(data.startCity === flight_data[i].fromcity && 
				data.endCity === flight_data[i].tocity &&
					data.deptDate === flight_data[i].date){
				
				temp_info.departure.push(flight_data[i])
				if(flight_data[i].price > max_price) max_price = flight_data[i].price;
				if(flight_data[i].price < min_price) min_price = flight_data[i].price			
			}
			//code for return flight
			if(!data.oneway &&
				data.endCity === flight_data[i].fromcity && 
				data.startCity === flight_data[i].tocity &&
					data.returnDate === flight_data[i].date){

				temp_info.return_.push(flight_data[i])
			}	
		};
		temp_info.max_price = max_price;
		temp_info.min_price = min_price;

		//search for return flights also

		//Info to be dispatched
		var info = {
			"search_data" : data,
			"result" : temp_info
		}
		ADispatcher.handleViewAction({
			actionType:"ADD_ITEM",
	  		item: info		
		})
	}
}

module.exports = SearchAction