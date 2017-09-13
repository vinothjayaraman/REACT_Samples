"use strict";

// This file is mocking a web API by hitting hard coded data
var authors = require('./authorData').authors;
var _=require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {
    getAllAuthors: function() {
        return _clone(authors);
    },

    getAuthorById: function(id){
        var author = _.find(authors,{id: id});
        return _clone(author);
    },

    saveAuthor: function(author) {
        console.log('Pretend this just saved the autor to the DB via AJAX call...');

        if(author.id){
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
            authors.splice(existingAuthorIndex, 1, author);
        } else {
            author.id = _generateId(author);
            authors.push(author);
        }

        return _clone(author);
    },

    deleteAuthor: function(id){
        console.log('Pretend this just deleted the author from the DB via AJAX call...');
        _.remove(authors, {id: id});
    }
};

module.exports = AuthorApi;