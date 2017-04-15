var Dispatcher = require('../dispatchers/dispatcher');

var FlightPriceSort = {

	sortFlight: function(data){
		Dispatcher.handleViewAction({
			actionType:"SORT_FLIGHT_PRICE",
	  		item: data			
		})
	}
}

module.exports = FlightPriceSort