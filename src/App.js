import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

import { Route, Switch } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path='/checkout' component={Checkout}></Route>
            <Route exact path='/' component={BurgerBuilder}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}
