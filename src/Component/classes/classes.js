import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SideBar from "../material/side-bar/side-bar";
import Drawer from "../material/drawer";
import ToolBar from "../material/app-bar";


class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
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
                    <Drawer/>
                </div>
            </div>
        )
    }
}

export default Classes;