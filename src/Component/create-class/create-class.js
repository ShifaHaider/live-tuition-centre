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
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import ToolBar from "../material/app-bar";


class CreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            // values: [],
            sidebarOpen: false,
            classData: {
                title: '',
                description: '',
                fee: '',
                days: [],
                subject: '',
                startTime: {},
                endTime: {}
            },
           classDataByFirebase: []
        };
        this.loadUserData();
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    styles = {
        block: {
            maxWidth: 250,
        },

    };
    names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    handleChangeSelect(event, index, values) {
        this.setState({values: values});
    };

    menuItems(values) {
        return this.names.map((name) => (
            <MenuItem
                key={name} insetChildren={true} checked={values && values.indexOf(name) > -1}
                value={name} primaryText={name}/>
        ));
    }

    loadUserData() {
        var db = firebase.firestore();
        var userId = localStorage.getItem('userId');
        db.collection('Users').doc(userId).get().then((userData) => {
            this.userData = userData.data();
            var userProfile = userData.data().picture;
            this.setState({userProfile: userProfile});
        })
    }

    handleChange(event, index, value) {
        this.setState({value: value})
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

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    }

    textChange(p, e, v) {
        console.log(p, e.target.value, v);
        var classData = this.state.classData;
        classData[p] = e.target.value;
        this.setState({classData: classData});
        console.log(this.state.classData);
    }

    saveClassData() {
        var db = firebase.firestore();
        var classData = this.state.classData;
        classData.teacherID = this.userData.id;
        classData.creatdAt = Date.now();
        console.log(classData);
        db.collection('Classes').add(classData);
    }

    loadClassData() {
        var db = firebase.firestore();
        db.collection('Classes').get().then((classCollection) => {
            classCollection.forEach(function(classesData) {
               var classData = classesData.data();
                console.log(classData);
            });
            // this.setState({classDataByFirebase: this.classData});
            // console.log(this.state.classDataByFirebase);
        })
    }


    render() {
        var icons = <div className='icons'>
            <Avatar src={this.state.userProfile} size='40px'/>
            <IconMenu
                iconButtonElement={<IconButton className='icon'><MoreVertIcon/></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                <MenuItem primaryText="Dashboard" onClick={this.dashboard.bind(this)}/>
                <MenuItem primaryText="Classes" onClick={this.classes.bind(this)}/>
                <MenuItem primaryText="Create Class" onClick={this.createClass.bind(this)}/>
            </IconMenu></div>
        const {values} = this.state;
        return (
            <div>
                <AppBar title='Dashboard' showMenuIconButton={false} iconElementRight={icons}/>
                <button onClick={this.loadUserData.bind(this)}>dfgdf</button>
                <div>
                    <Sidebar sidebar={<Card className='sideBarText'><CardHeader className='cardHeader'>ffff</CardHeader></Card>}
                             docked={this.state.sidebarOpen}>
                        <SideBar toggleSideBar={this.onSetSidebarOpen}/>
                        <Card className='card'>
                            <CardText className='text'>
                                <TextField floatingLabelText="Title" fullWidth={true}
                                value={this.state.classData.title} onChange={this.textChange.bind(this, 'title')}/><br/>
                                <TextField floatingLabelText="Description" multiLine={true} rows={2} fullWidth={true}
                                value={this.state.classData.description} onChange={this.textChange.bind(this, 'description')}/><br/>
                            </CardText>
                            <CardText>
                                <RadioButtonGroup name="gender" labelPosition="right" defaultSelected="male">
                                    <RadioButton style={{display: 'inline-block', width: '15%'}} value="male" label="Male"/>
                                    <RadioButton style={{display: 'inline-block', width: '5%'}} value="female" label="Female"/>
                                </RadioButtonGroup>
                            </CardText>
                            <CardText>
                                <SelectField multiple={true} hintText="How many days in a week" fullWidth={true}
                                value={this.state.classData.days} onChange={this.textChange.bind(this, 'days')}>{this.menuItems(values)}
                                </SelectField>
                                <TextField floatingLabelText="fee" fullWidth={true} type='number'
                                value={this.state.classData.fee} onChange={this.textChange.bind(this, 'fee')}/>
                                <SelectField value={this.state.classData.subject} onChange={this.textChange.bind(this, 'subject')} floatingLabelText="Subject">
                                    <MenuItem key={1} value={1} primaryText="Chemistry"/>
                                    <MenuItem key={2} value={2} primaryText="Biology"/>
                                    <MenuItem key={3} value={3} primaryText="English"/>
                                </SelectField>
                                <div>
                                    <TimePicker style={{display: 'inline-block', width: '50%'}} hintText="Start Time"/>
                                    <TimePicker style={{display: 'inline-block', width: '50%'}} hintText="End Time"/>
                                    <input type="file"/>
                                    <button onClick={this.loadClassData.bind(this)}>dfgdf</button>
                                    <RaisedButton label='Create' primary={true} className='finalButton' onClick={this.saveClassData.bind(this)}/>
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

