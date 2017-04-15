var ADispatcher = require('../dispatchers/dispatcher');

var SearchAction = {

	searchFlights: function(data){
		console.log(data)
		ADispatcher.handleViewAction({
			actionType:"ADD_ITEM",
	  		item: data			
		})
	}
}

module.exports = SearchAction