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

	setSearchData: function(payload, refineResult){
		var payloadR = payload.action.item
		var price = 0;
		if(refineResult){
			searchData = payloadR.searchResult
			if(searchData.result){}
			else {return}
			//for depart flight select in price range
			for(var i = 0; i<searchData.result.departure.length; ++i){
				price = searchData.result.departure[i].price
				if(parseInt(payloadR.maxValue) < price || parseInt(payloadR.minValue) > price){
					searchData.result.departure[i].remove = true
				}
				else{
					searchData.result.departure[i].remove = false
				}
			}
			//for arrival flight select in price range
			for(var i = 0; i<searchData.result.return_.length; ++i){
				price = searchData.result.return_[i].price
				if(parseInt(payloadR.maxValue) < price || parseInt(payloadR.minValue) > price){
					searchData.result.return_[i].remove = true
				}
				else{
					searchData.result.return_[i].remove = false
				}
			}
		}
		else { searchData = payloadR }
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
	switch(payload.action.actionType){
		case "ADD_ITEM":
			AppStore.setSearchData(payload, null)
			AppStore.emitChange()
			break;
			//unnecessary: remove it afterwards
		case "UPDATE_ONE_WAY":
			AppStore.updateOneWay(payload)
			AppStore.emitChange()
			break;
		case "SORT_FLIGHT_PRICE":
			AppStore.setSearchData(payload, true)
			AppStore.emitChange()
	}
	return true;
});

module.exports = AppStore;