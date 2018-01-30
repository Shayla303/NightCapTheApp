import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../styles/navbar.css';
import Food from './Menu';
import { Router, Route,IndexRoute, hashHistory} from 'react-router';
import { Link } from 'react-router-dom';


 class NavBar extends Component {
     render() {
       return (
         <header>
             <div class="header-top"> </div>
             <div class="header-bottom">
               <nav>
                 <div class="nav menu">
                   <a href="#" class="selected">MENU</a>
                 </div>
                 <div class="nav menus">
                   <a href="#">CONTACT US</a>
                 </div>
                 <div class="nav my-menus">
                   <a href="#">ABOUT US</a>
                 </div>
                 <div class="nav mycheckout">
                   <img src="" class="checkout-icon"/>
                   <a href="#">CHECKOUT</a>
                   </div>
               </nav>
               {/* <img src="images/blueLogo.png" class="logo" alt="NightCap logo" /> */}
             </div>
           </header>
       )
     }
   }

export default NavBar;
