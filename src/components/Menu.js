import React, { Component, ReactDOM } from 'react';
import NavBar from './NavBar';
import Styles from '../styles/menu.css';

class Menu extends Component {
  render() {
    return (
    <div>
      <NavBar />
      {/* // FirstCard */}
      <section id="menu-box">
        <div class="card-holder">
          <article class="menu-card">
            <div class="menu-image1">
            </div>
            <div class="menu-overview">
              <h4 class="menu-name">Fred's Fried Catfish</h4>
              <div class="menu-description">
                <p class="description">3 Golden Fried fillets</p>
              </div>
              <h4 class="menu-price"> Price:$14.00 $8.00 w/o sides $6.00 for sandwich</h4>
              <h5 class="entree-details">
                All Dinners come with 2 sides and choice of roll or cornbread and small drink. Fries available with Fish or Chicken Only</h5>
              <button class="addToCart">Add to Cart</button>
            </div>
          </article>

    {/* <!-- **Second Card** --> */}
          <article class="menu-card">
            <div class="menu-image2">
            </div>
            <div class="menu-overview">
              <h4 class="menu-name">YardBird Meets Waffle</h4>
              <div class="menu-description">
                <p class="description">Forget Me Not Fried Chicken served with 2  waffles and Pecan syrup </p>
              </div>
              <h4 class="menu-price"> Price: $11.00</h4>
              <h5 class="entree-details">
                All specials come with 1 additional side,choice of bread and a small drink</h5>
              <button class="addToCart">Add to Cart</button>
            </div>
          </article>


          {/* <!-- Third card --> */}

          <article class="menu-card">
            <div class="menu-image3">
            </div>
            <div class="menu-overview">
              <h4 class="menu-name">MaHelen's Meatloaf Dinner</h4>
              <div class="menu-description">
                <p class="description">A hearty mix of beef and seasonings wrapped in bacon </p>
              </div>
              <h4 class="menu-price"> $11.00 or $5.50 for sandwich</h4>
              <h5 class="entree-details">
                All Dinners come with 2 sides and choice of roll or cornbread and small drink</h5>
              <button class="addToCart">Add to Cart</button>
            </div>
          </article>

      {/* <!-- Fourth card --> */}
      <article class="menu-card">
        <div class="menu-image4">
        </div>
        <div class="menu-overview">
          <h4 class="menu-name">Forget Me Not Fried Chicken</h4>
          <div class="menu-description">
            <p class="description">Golden Fried Breast,Drum,and Wing </p>
          </div>
          <h4 class="menu-price"> $13.00 or $7.00 w/o sides</h4>
          <h5 class="entree-details">
            All Dinners come with 2 sides and choice of roll or cornbread and small drink</h5>
          <button class="addToCart">Add to Cart</button>
        </div>
      </article>

      {/* <!-- Fifth card --> */}

      <article class="menu-card">
        <div class="menu-image5">
        </div>
        <div class="menu-overview">
          <h4 class="menu-name">Miss Paula's Smothered Steak and Gravy</h4>
          <div class="menu-description">
            <p class="description">Seasoned steak in brown gravy with slow cooked w/ pieces of onions and green bell peppers </p>
          </div>
          <h4 class="menu-price"> $12.00</h4>
          <h5 class="entree-details">
            All Dinners come with 2 sides and choice of roll or cornbread and small drink</h5>
          <button class="addToCart">Add to Cart</button>
        </div>
      </article>

      {/* <!-- Sixth Card --> */}

      <article class="menu-card">
        <div class="menu-image6">
        </div>
        <div class="menu-overview">
          <h4 class="menu-name">Hi LoLo's Spaghetti</h4>
          <div class="menu-description">
            <p class="description">A twist on an American staple served with spicy cajun meatballs </p>
          </div>
          <h4 class="menu-price"> $12.00</h4>
          <h5 class="entree-details">
            All Dinners come with 2 sides and choice of roll or cornbread and small drink</h5>
          <button class="addToCart">Add to Cart</button>
        </div>
      </article>

      {/* <!-- Seventh Card --> */}

      <article class="menu-card">
        <div class="menu-image7">
        </div>
        <div class="menu-overview">
          <h4 class="menu-name">Junk in the Trunk Junky Beans</h4>
          <div class="menu-description">
            <p class="description">A hearty bowl of Camelia red beans cooked with sausage,chicken,and the kitchen sink </p>
          </div>
          <h4 class="menu-price"> $9.00</h4>
          <h5 class="entree-details">
            All Dinners come with 2 sides and choice of roll or cornbread and small drink</h5>
          <button class="addToCart">Add to Cart</button>
        </div>
      </article>

      {/* <!-- Eighth Card --> */}

      <article class="menu-card">
        <div class="menu-image8">
        </div>
        <div class="menu-overview">
          <h4 class="menu-name">Shay's Shrimp n Grits</h4>
          <div class="menu-description">
            <p class="description">Cheesy grits served with shrimp in a spicy Andouile sausage in a tomato based sauce </p>
          </div>
          <h4 class="menu-price"> $12.00</h4>
          <h5 class="entree-details">
            All Dinners come with 2 sides and choice of roll or cornbread and small drink</h5>
          <button class="addToCart">Add to Cart</button>
        </div>
      </article>

      {/* <!-- Ninth card --> */}
      <article class="menu-card">
        <div class="menu-image9">
        </div>
        <div class="menu-overview">
          <h4 class="menu-name">Granny Does Gumbo The Old Fashioned Way</h4>
          <div class="menu-description">
            <p class="description">A rich roux based Louisiana classic made with chicken,sausage,shrimp, and crablegs served with white rice</p>
          </div>
          <h4 class="menu-price"> $15.00</h4>
          <h5 class="entree-details">
            All Dinners come with 2 sides and choice of roll or cornbread and small drink</h5>
          <button class="addToCart">Add to Cart</button>
        </div>
      </article>
          </div>
        </section>
    </div>

  );
  }
}


export default Menu;
