import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../styles/navbar.css';
import Food from './Menu';
import { Router, Route,IndexRoute, hashHistory} from 'react-router';
import { Link } from 'react-router-dom';


 class NavBar extends Component {
     state = { activeItem: 'closest' }
     handleItemClick = (e, {name}) => this.setState({ activeItem: name})
     render() {
       const { activeItem } = this.state
       return (
         <Menu text size="massive">
           <Menu.Item name='Menu' active={activeItem === 'Menu'}
             onClick={this.menu}/>
             <Menu.Item name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick} />
             <Menu.Item name='About Us' active={activeItem === 'About Us'} onClick={this.handleItemClick} />
           </Menu>
       )
     }
   }

export default NavBar;
