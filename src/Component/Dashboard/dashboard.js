import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SideBar from "../material/side-bar/side-bar";
import ToolBar from "../material/app-bar";
import Drawer from '../material/drawer'


class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            anotherUser: {},
            rooms: []
        }
    }

    classes(){
        this.props.history.push('/classes');
    }
    createClasses(){
        this.props.history.push('/create-class');
    }

    render(){
        return(
            <div>
                <AppBar title='Dashboard' iconElementRight={ <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                    <MenuItem primaryText="Dashboard" />
                    <MenuItem primaryText="Classes" onClick={this.classes.bind(this)} />
                    <MenuItem primaryText="Create Class" onClick={this.createClasses.bind(this)} />
                </IconMenu>}/>
                <div>
                    <Drawer/>
                    {/*<SideBar/>*/}
                </div>
            </div>
        )
    }
}

export default Dashboard;