import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  constructor(props) {
    super(props);
    const query = new URLSearchParams(this.props.location.search).entries();
    const ingredients = {};
    let price = 0;
    for (let key of query) {
      console.log(key);
      if (key[0] === "price") {
        price = +key[1];
      } else {
        ingredients[key[0]] = +key[1];
      }
    }
    this.state = {
      ingredients: ingredients,
      totalPrice: price,
    };
  }
  state = {
    ingredients: null,
    totalPrice: 0,
  };

  handleCheckoutCancel = () => {
    this.props.history.goBack();
  };
  handleCheckoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinue={this.handleCheckoutContinue}
          checkoutCancel={this.handleCheckoutCancel}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;

// UNSAFE_componentWillMount() {
//   const query = new URLSearchParams(this.props.location.search).entries();
//   const ingredients = {};
//   let price = 0;
//   for (let key of query) {
//     console.log(key);
//     if (key[0] === "price") {
//       price = +key[1];
//     } else {
//       ingredients[key[0]] = +key[1];
//     }
//   }
//   console.log(ingredients, price);
//   this.setState({ ingredients: ingredients, totalPrice: price });
// }
