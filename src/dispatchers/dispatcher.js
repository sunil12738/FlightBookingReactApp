var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var ADispatcher = assign(new Dispatcher(), {
	handleViewAction: function(action) {
		this.dispatch({
			source: 'GET_SEARCH_DATA',
			action: action
		});
	}
});

module.exports = ADispatcher;