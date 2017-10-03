'use strict';
var React = require('react');
var Router = require('react-router');
var Routes = require('./routes');

Router.run(Routes, function(Handler){ // Router.HistoryLocation - used for changing the URL format from HASH to HTML5 HISTORY PATH
    React.render(<Handler/>, document.getElementById('app'));
});