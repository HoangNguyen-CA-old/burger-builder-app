import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

import { connect } from 'react-redux';

export class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        {this.props.ings ? (
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          ></CheckoutSummary>
        ) : null}

        <Route
          path={`${this.props.match.path}/contact-data`}
          component={ContactData}
        ></Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ings: state.ingredients,
});

export default connect(mapStateToProps)(Checkout);
