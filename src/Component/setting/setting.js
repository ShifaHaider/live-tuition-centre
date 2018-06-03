import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './style.css'
import SideBar from "../material/side-bar/side-bar";
import Sidebar from 'react-sidebar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import firebase from 'firebase'
import firestore from 'firebase/firestore'

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true,
            teacherData: {}
        };
        this.loadUserData();
    }

    dashboard() {
        this.props.history.push('/dashboard');
    }

    createClass() {
        this.props.history.push('/create-class');
    }

    classes() {
        this.props.history.push('/create-class');
    }

    loadUserData() {
        var db = firebase.firestore();
        var userId = localStorage.getItem('userId');
        db.collection('Users').doc(userId).get().then((userData) => {
            var teacherData = userData.data();
            console.log(teacherData);
            this.setState({teacherData: teacherData});
            console.log(this.state.teacherData);
        })
    }

    render() {
        return (
            <div>
                <AppBar title='Dashboard' iconElementRight={<IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                    <MenuItem primaryText="Dashboard" onClick={this.dashboard.bind(this)}/>
                    <MenuItem primaryText="Classes" onClick={this.classes.bind(this)}/>
                    <MenuItem primaryText="Create Class" onClick={this.createClass.bind(this)}/>
                </IconMenu>}/>
                <div>
                    <Sidebar sidebar={<Card className='cardText'><CardText>Profile</CardText></Card>}
                             docked={this.state.sidebarOpen}>
                        <SideBar toggleSideBar={this.onSetSidebarOpen}/>
                    </Sidebar>
                </div>
                <Card className='settingCard'>
                    <CardText><h3>{this.state.teacherData.name}</h3></CardText><br/>
                    <CardText>Email : {this.state.teacherData.email}</CardText><br/>
                    <CardText>Phone : N/A</CardText><br/>
                </Card>

            </div>
        )
    }
}

export default Setting;
