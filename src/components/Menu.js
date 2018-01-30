import React, { Component } from 'react';
import MenuData from '../items';
import PropTypes from 'prop-types';
import Styles from '../styles/menu.css';


class Menu extends React.Component {
  render() {
    return (
    <div class="card-container">
     <div class="ui cards">
     <img src="https://www.istockphoto.com/photo/southern-sweet-iced-tea-in-a-rustic-jar-gm508273477-45454128" alt="sweet tea" class="ui image" />
     <div class="content">
      <h4 class="name">Fried Chicken</h4>
      <p class="description">Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</p>
      <div class="more-content">
       <p class="price">$12.00</p>
       <p class="detail-content">details</p>
       <p class="note-content">note</p>
     </div>
    </div>
   </div>
</div>

  );
  }
}


export default Menu;
