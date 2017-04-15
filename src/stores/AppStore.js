var ADispatcher = require('../dispatchers/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var searchData = {};
var oneway = true;
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
	},
	updateOneWay: function(payload){
		oneway = payload.action.item
	},
	getOneWay: function(){
		return oneway
	}
});

ADispatcher.register(function(payload){
	console.log("hi")
	console.log(payload.action);
	switch(payload.action.actionType){
		case "ADD_ITEM":
			AppStore.setSearchData(payload)
			AppStore.emitChange()
			break;
		case "UPDATE_ONE_WAY":
			AppStore.updateOneWay(payload)
			AppStore.emitChange()
			break;
	}
	return true;
});

module.exports = AppStore;