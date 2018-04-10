import React, {Component} from 'react'
import Sidebar from 'react-sidebar';
import SideBar from "./side-bar/side-bar";


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
                <Sidebar sidebar={sidebarContent} docked={this.state.sidebarOpen}>
                    <SideBar toggleSideBar={this.onSetSidebarOpen}/>
                </Sidebar>
            </div>
        )
    }
}

export default Drawer;




