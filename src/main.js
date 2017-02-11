import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route,IndexRoute, hashHistory} from "react-router"
import Home from "./app/templates/home/home";

ReactDOM.render(
<Router history={hashHistory}>
	<Route path="/home" component={Home}/>
</Router>,
 document.getElementById('app'));