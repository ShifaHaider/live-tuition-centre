import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TimePicker from 'material-ui/TimePicker';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import './style.css'
import SideBar from "../material/side-bar/side-bar";
import Sidebar from 'react-sidebar';



class CreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    styles = {
        block: {
            maxWidth: 250,
        },

    };

    handleChange(event, index, value) {
        console.log(value);
        this.setState({value: value})
    }


    dashboard() {
        console.log(this.props.history);
        this.props.history.push('/dashboard');
    }

    createClass() {
        this.props.history.push('/create-class');
    }

    classes() {
        this.props.history.push('/classes')
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    }

    render() {
        var sidebarContent = <b>Sidebar content</b>;
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
                <div>
                    <Sidebar sidebar={sidebarContent} docked={this.state.sidebarOpen}>
                        <SideBar toggleSideBar={this.onSetSidebarOpen}/>
                        <Card className='card'>
                            <CardText className='text'>
                                <TextField floatingLabelText="Title" fullWidth={true}/><br/>
                                <TextField floatingLabelText="Description" multiLine={true} rows={2} fullWidth={true}/><br/>
                            </CardText>
                            <CardText>

                                <RadioButtonGroup  name="gender" labelPosition="right" defaultSelected="male">
                                    <RadioButton
                                        style={{ display: 'inline-block', width: '15%' }}
                                        value="male"
                                        label="Male"/>
                                    <RadioButton
                                        style={{ display: 'inline-block', width: '5%' }}
                                        value="female"
                                        label="Female"/>
                                </RadioButtonGroup>
                            </CardText>
                            <CardText>
                                <TextField floatingLabelText="fee" fullWidth={true} type='number'/>
                                <SelectField value={this.state.value} onChange={this.handleChange.bind(this)}
                                             floatingLabelText="Floating Label Text">
                                    <MenuItem key={1} value={1} primaryText="Primary"/>
                                    <MenuItem key={2} value={2} primaryText="Accent"/>
                                    <MenuItem key={3} value={3} primaryText="Warn"/>
                                </SelectField>

                                <div>
                                    <TimePicker style={{ display: 'inline-block', width: '50%' }} hintText="Start Time"/>
                                    <TimePicker style={{ display: 'inline-block', width: '50%' }} hintText="End Time"/>
                                </div>
                            </CardText>
                        </Card>
                    </Sidebar>
                </div>
            </div>
        )
    }
}

export default CreateClass;