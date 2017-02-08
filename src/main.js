import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route,IndexRoute, hashHistory} from "react-router"
import Content from "./app/templates/home/content";

ReactDOM.render(
<Router history={hashHistory}>
	<Route path="/home" component={Content}/>
</Router>,
 document.getElementById('app'));