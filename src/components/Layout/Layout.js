import React, { Component } from 'react';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  render() {
    return (
      <>
        <Toolbar
          openDrawer={this.SideDrawerOpenHandler}
          isAuth={this.props.isAuthenticated}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
          isAuth={this.props.isAuthenticated}
        />
        <main className={classes.content}>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token ? true : false,
});

export default connect(mapStateToProps)(Layout);
