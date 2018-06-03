import React, {Component} from 'react'
import Sidebar from 'react-sidebar';
import SideBar from "../side-bar/side-bar";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import './style.css'
import firebase from 'firebase'
import firestore from 'firebase/firestore'

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            classDataByFirebase: []
        };
        this.loadClassData();
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    }

    loadClassData() {
        var db = firebase.firestore();
        db.collection('Classes').get().then((classCollection) => {
            console.log(classCollection);
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
        var sidebarContent = <b>Sidebar content</b>;
        return (
            <div>
                <div>
                    <Sidebar sidebar={<Card className='cardText'><CardText>Hello World</CardText></Card>} docked={this.state.sidebarOpen}>
                        <SideBar toggleSideBar={this.onSetSidebarOpen}/>
                    </Sidebar>
                </div>
                <Card className='card'>
                    <CardText>Name : Shifa Haider</CardText>
                </Card>
            </div>
        )
    }
}

export default Drawer;




