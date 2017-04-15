var Dispatcher = require('../dispatchers/dispatcher');

var UpdateOneWay = {

	oneWayUpdate: function(data){
		Dispatcher.handleViewAction({
			actionType:"UPDATE_ONE_WAY",
	  		item: data			
		})
	}
}

module.exports = UpdateOneWay