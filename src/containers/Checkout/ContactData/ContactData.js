import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import styles from './ContactData.module.css';

export class ContactData extends Component {
  state = {
    name: '',
    email: '',
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Wang Nguyen',
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
    console.log(this.props.ingredients);
  };
  render() {
    let form = (
      <form>
        <input
          className={styles.Input}
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <input
          className={styles.Input}
          type='text'
          name='email'
          placeholder='Your Email'
        />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner></Spinner>;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
