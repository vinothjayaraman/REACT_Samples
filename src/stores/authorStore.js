"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _authors = [];

// similar to the inheritance, like base class. Here EventEmitter is a baseclass
var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListner: function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListner: function(callback){
        this.removeListner(CHANGE_EVENT,callback);
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register(function(action){
    switch (action.actionType) {
        case value:
            
            break;
    
        default:
            break;
    }
});

module.exports = AuthorStore;
