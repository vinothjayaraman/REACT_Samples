"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

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
    },

    getAllAuthors: function(){
        debugger;
        return _authors;
    },
    getAuthorById: function(id){
        return _.find(_authors,{id : id});
    }
});

Dispatcher.register(function(action){
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors,{id: action.author.id});
            var existingAuthorIndex = _.indexOf(_authors,existingAuthor);
            _authors.splice(existingAuthorIndex,1,action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
        debugger;
            _.remove(_authors,function(author){
                return action.id === author.id;
            });
            AuthorStore.emitChange();
        default:
            //no op
    }
});

module.exports = AuthorStore;
