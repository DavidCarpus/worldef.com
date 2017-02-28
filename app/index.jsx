import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import TeamMember from './Components/TeamMember';
import { Router, Route, hashHistory } from 'react-router'

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
(    <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/TeamMember/:teamMemberID" component={TeamMember}/>
    </Router>
),
 document.getElementById('app') );
