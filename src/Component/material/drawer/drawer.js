import React, {Component} from 'react'
import Sidebar from 'react-sidebar';
import SideBar from "../side-bar/side-bar";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import './style.css'

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    }

    render() {
        var sidebarContent = <b>Sidebar content</b>;
        return (
            <div>
                <div>
                    {/*<Sidebar  sidebar={<b className='cardText'>Hello World Or Shifa khan</b>} docked={this.state.sidebarOpen}>*/}
                    <Sidebar sidebar={<Card className='cardText'><CardText >Hello world Or Shifa khan</CardText></Card>} docked={this.state.sidebarOpen}>
                        <SideBar toggleSideBar={this.onSetSidebarOpen}/>
                    </Sidebar>
                </div>
            </div>
        )
    }
}



export default Drawer;




