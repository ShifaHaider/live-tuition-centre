import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Drawer from '../drawer'
import './style.css'
import ToolBar from "../app-bar";

class SideBar extends Component{

    constructor(props) {
        super(props);
        console.log(props.toggleSideBar);
        this.state = {
            value: null
        };

    }

    render(){
        return(
            <div>
                {/*<ToolBar/>*/}
            <div className='sideBar'>
                    <List>
                        <div className='icons'>
                        <ListItem onClick={this.props.toggleSideBar}>

                            <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                            </svg>
                        </ListItem>
                        <ListItem>
                            <svg fill="#FFF" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </ListItem>
                        <ListItem>
                            <svg fill="#FFF" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </ListItem>
                        </div>
                    </List>
            </div>
            </div>
        )
    }
}


export default SideBar;