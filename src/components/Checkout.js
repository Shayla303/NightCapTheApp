import React, { Component , ReactDOM} from 'react';
import NavBar from './NavBar';
import Styles from '../styles/checkout.css';
import { Form } from 'react-bootstrap';


class Checkout extends Component {
  render() {
    return (
    <div className="checkoutFosho">
      <NavBar />
      <section id="menu-box">
        <div class="card-holder"></div>
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
      </section>

        <div class="container">
          <div id="Checkout" class="inline">
            <h1>Order Summary</h1>
              <div class="card-row">
               <span class="visa"></span>
               <span class="mastercard"></span>
               <span class="amex"></span>
               <span class="discover"></span>
           </div>
           <form>
               <div class="form-group">
                   <label for="PaymentAmount">Payment Amount</label>
                   <div class="amount-placeholder">
                       <span>$</span>
                       <span>25.00</span>
                   </div>
               </div>
               <div class="form-group">
                   <label or="NameOnCard">Name on Card</label>
                   <input id="NameOnCard" class="form-control" type="text" maxlength="255"></input>
               </div>
               <div class="form-group">
                   <label for="CreditCardNumber">Card Number</label>
                   <input id="CreditCardNumber" class="null card-image form-control" type="text"></input>
               </div>
               <div class="expiry-date-group form-group">
                   <label for="ExpiryDate">Expiration Date</label>
                   <input id="ExpiryDate" class="form-control" type="text" placeholder="MM / YY" maxlength="7"></input>
               </div>
               <div class="security-code-group form-group">
                   <label for="SecurityCode">Security Code</label>
                   <div class="input-container" >
                       <input id="SecurityCode" class="form-control" type="text" ></input>
                       <i id="cvc" class="fa fa-question-circle"></i>
                   </div>
                   <div class="cvc-preview-container two-card hide">
                       <div class="amex-cvc-preview"></div>
                       <div class="visa-mc-dis-cvc-preview"></div>
                   </div>
               </div>
               <div class="zip-code-group form-group">
                   <label for="ZIPCode">ZIP/Postal Code</label>
                   <div class="input-container">
                       <input id="ZIPCode" class="form-control" type="text" maxlength="10"></input>
                       <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i class="fa fa-question-circle"></i></a>
                   </div>
               </div>
               <button id="PayButton" class="btn btn-block btn-success submit-button" type="submit">
                   <span class="submit-button-lock"></span>
                   <span class="align-middle">Pay $25.00</span>
               </button>
           </form>
         </div>
       </div>
   </div>
 )
}
}

     export default Checkout;
