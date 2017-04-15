var ADispatcher = require('../dispatchers/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var searchData = null;

var AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback: Callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback: Callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	setSearchData: function(payload){
		searchData = payload.action.item
	},
	getSearchData: function(){
		return searchData
	}
});

ADispatcher.register(function(payload){

	switch(payload.source){
		case "GET_SEARCH_DATA":
			AppStore.setSearchData(payload)
			AppStore.emitChange()
			break;
	}
	return true;
});

module.exports = AppStore;