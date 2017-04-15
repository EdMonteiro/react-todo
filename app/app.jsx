var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require("TodoApp");
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>
  /*<Router history={hashHistory}>
    <Route path="/" component={Main1}>
      <Route path="menu1" component={Menu1}/>
      <IndexRoute component={Menu2}/>
    </Route>
  </Router>*/,
  document.getElementById('app')
);
