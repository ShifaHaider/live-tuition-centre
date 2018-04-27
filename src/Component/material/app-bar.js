import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';
import firebase from 'firebase'
import firestore from 'firebase/firestore'

// class ToolBar extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {open: false};
//         this.loadUserData();
//     }
//
//     dashboard() {
//         this.props.history.push('/dashboard');
//     }
//
//     createClass() {
//         this.props.history.push('/create-class');
//     }
//
//     classes() {
//         this.props.history.push('/classes')
//     }
//
//     loadUserData(){
//         var db = firebase.firestore();
//         var userId = localStorage.getItem('userId');
//         db.collection('Users').doc(userId).get().then((userData) =>{
//            var userProfile = userData.data().picture;
//             this.setState({userProfile: userProfile});
//             console.log(this.state.userProfile);
//         })
//     }
//
//
//
//     render() {
//         var icons =  <div className='icons'><Avatar src={this.state.userProfile} size='40px' /><IconMenu
//             iconButtonElement={<IconButton className='icon'><MoreVertIcon/></IconButton>}
//             anchorOrigin={{horizontal: 'left', vertical: 'top'}}
//             targetOrigin={{horizontal: 'left', vertical: 'top'}}>
//             <MenuItem primaryText="Dashboard" onClick={this.dashboard.bind(this)}/>
//             <MenuItem primaryText="Classes" onClick={this.classes.bind(this)}/>
//             <MenuItem primaryText="Create Class" onClick={this.createClass.bind(this)}/>
//         </IconMenu></div>
//         return (
//             <div>
//                 <AppBar title='Dashboard' showMenuIconButton={false} iconElementRight={icons}/>
//             </div>
//         )
//     }
// }


import ReactDOM from 'react-dom';
import ReactImageCrop from 'react-image-crop-component';
import 'react-image-crop-component/lib/style.css';

class ToolBar extends Component{
    constructor(){
        super();
        this.onCropped = this._onCropped.bind(this);
    }
    render(){
        return (<div style={{width: "300px", height: "300px"}}>
            {/*<ReactImageCrop src="demo.jpg"*/}
                            {/*setWidth={300}*/}
                            {/*setHeight={300}*/}
                            {/*square={false}*/}
                            {/*resize={true}*/}
                            {/*border={"dashed #ffffff 2px"}*/}
                            {/*onCrop={this.onCropped}/>*/}
                            <h1>ssdfdfsd</h1>
        </div>);
    }
    _onCropped (e) {
        let image = e[0];
        let image_data = e[1];
    }
}
export default ToolBar;