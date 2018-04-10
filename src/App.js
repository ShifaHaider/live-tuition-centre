import React, {Component} from 'react';
import './App.css';
import Register from './Component/Register/register'
import Login from './Component/Login/login'
import Dashboard from './Component/Dashboard/dashboard'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import {Router, Route, Switch, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import CreateClass from "./Component/create-class/create-class";
import Classes from "./Component/classes/classes";
import Drawer from "./Component/material/drawer";
import ToolBar from "./Component/material/app-bar";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDFXUDwwIITkocKHqCMGDdmbKMxZ0kPo0g",
    authDomain: "react-component-4988c.firebaseapp.com",
    databaseURL: "https://react-component-4988c.firebaseio.com",
    projectId: "react-component-4988c",
    storageBucket: "react-component-4988c.appspot.com",
    messagingSenderId: "303737650593"
};
firebase.initializeApp(config);
const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route exact path={'/'} component={Register}/>
                            <Route exact path={'/register'} component={Register}/>
                            <Route exact path={'/login'} component={Login}/>
                            <Route exact path={'/dashboard'} component={Dashboard}/>
                            <Route exact path={'/create-class'} component={CreateClass}/>
                            <Route exact path={'/classes'} component={Classes}/>
                            <Route exact path={'/drawer'} component={Drawer}/>
                            <Route exact path={'/app-bar'} component={ToolBar}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
