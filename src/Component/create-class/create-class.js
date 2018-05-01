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
import {Cropper} from 'react-image-cropper'
import './Image-20180103_210221.jpg'
class CreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            subject: '',
            values: [],
            sidebarOpen: false,
            classData: {
                title: '',
                description: '',
                fee: '',
                days: [],
                startTime: {},
                endTime: {}
            },
            cropper: '',
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

    menuItems(values) {
        return this.names.map((name) => (
          <MenuItem key={name}insetChildren={true}
            checked={values && values.indexOf(name) > -1} value={name} primaryText={name} />
        ));
      }

    handleChangeSelect(event, index, values) {
        this.setState({values: values});
        console.log(this.state.values)
    };

    handleChange(event, index, value) {
        console.log(value , event.target.textContent , index);
        var subject = this.state.classData.subject;
        var subjectC = event.target.textContent;
        console.log(subjectC);
        this.setState({value: value, subject: subjectC});
        console.log(this.state.value,  this.state.classData.subject)
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
        var classData = this.state.classData;
        // classData.days = this.state.classData.values;
        classData[p] = e.target.value;
        this.setState({classData: classData});
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

    saveClassData () {
        var db = firebase.firestore();
        var classData = this.state.classData;
        classData.teacherID = this.userData.id;
        classData.creatdAt = Date.now();
        classData.subject= this.state.subject;
        console.log(classData);
        db.collection('Classes').add({classData});
    }

    loadClassData() {
        var db = firebase.firestore();
        db.collection('Classes').get().then((classCollection) => {
            classCollection.forEach((classesData)=> {
                console.log(classesData);
                var classData = classesData.data();
                console.log(classData);
                var arr = [];
                arr.push(classData);
                console.log(arr);
                this.setState({classDataByFirebase: arr});
            });
            console.log(this.state.classDataByFirebase);
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
                {/*<button onClick={this.loadUserData.bind(this)}>dfgdf</button>*/}
                <div>
                    <Sidebar sidebar={
                        <List className='sideBarText'>
                            {this.state.classDataByFirebase.map((data, index)=>{
                                return(
                                    <div className='sideBarText'>
                                        {console.log(data, index)}
                                        {/*<CardText key={index}>*/}
                                           {/*{data.title}*/}
                                        {/*</CardText>*/}
                                        {/*<CardText>{data.description}</CardText>*/}
                                        <ListItem key ={data.teacherID}>
                                            <b>{data.title}</b>
                                            {/*<b>{data.description}</b>*/}
                                        </ListItem>

                                     </div>
                                )
                            })}
                        {/*<CardHeader className='cardHeader'></CardHeader>*/}
                    </List>} docked={this.state.sidebarOpen}>
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
                                value={values} onChange={this.handleChangeSelect.bind(this)}>{this.menuItems(values)}
                                </SelectField>
                                <TextField floatingLabelText="fee" fullWidth={true} type='number'
                                value={this.state.classData.fee} onChange={this.textChange.bind(this, 'fee')}/>
                                <SelectField value={this.state.value} onChange={this.handleChange.bind(this)} floatingLabelText="Subject">
                                    <MenuItem key={1} value={1} primaryText="Chemistry"/>
                                    <MenuItem key={2} value={2} primaryText="Biology"/>
                                    <MenuItem key={3} value={3} primaryText="English"/>
                                </SelectField>
                                <div>
                                    <TimePicker style={{display: 'inline-block', width: '50%'}} hintText="Start Time"/>
                                    <TimePicker style={{display: 'inline-block', width: '50%'}} hintText="End Time"/>
                                    <input type="file"/>
                                {/*<Cropper src="./Image-20180103_210221.jpg" ref={ ref => { this.state.cropper = ref }}/>*/}
                                 {/*<button >Save</button>*/}
                                    <button onClick={this.loadClassData.bind(this)}>Load Class Data</button>
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

