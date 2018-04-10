import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class ToolBar extends Component {

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
        this.props.history.push('/classes')
    }

    render() {
        return (
            <div>
                <AppBar title='Dashboard' showMenuIconButton={false} iconElementRight={<IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                    <MenuItem primaryText="Dashboard" onClick={this.dashboard.bind(this)}/>
                    <MenuItem primaryText="Classes" onClick={this.classes.bind(this)}/>
                    <MenuItem primaryText="Create Class" onClick={this.createClass.bind(this)}/>
                </IconMenu>}/>
            </div>
        )
    }
}

export default ToolBar;