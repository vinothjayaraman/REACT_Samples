"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author){
        // here we are calling the mock api, in real world will call api's thru ajax. so we have to use callback or some sort of promises to handle the response
        var newAuthor = AuthorApi.saveAuthor(author);
        
        //Hey dispatcher, go to all the stores that an author was just created.
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function(author){
        var updatedAuthor = AuthorApi.saveAuthor(author);
                
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor: function(id){
        AuthorApi.deleteAuthor(id);
                
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;