import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Dashboard from 'client/Dashboard.js';
import Configure from 'client/Configure';
import History from 'client/History';

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Dashboard} />
            <Route path="/configure" component={Configure} />
            <Route path="/history" component={History} />
        </Router>
    );
}