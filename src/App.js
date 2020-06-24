import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

import { Route, Switch } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout}></Route>
            <Route path='/orders' component={Orders}></Route>
            <Route path='/auth' component={Auth}></Route>
            <Route path='/' component={BurgerBuilder}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}
