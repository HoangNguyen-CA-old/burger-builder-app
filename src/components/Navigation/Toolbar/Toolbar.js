import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from './Menu/Menu';

import styles from './Toolbar.module.css';
import classes from './Toolbar.module.css';
const Toolbar = (props) => {
  return (
    <header className={styles.toolbar}>
      <Menu clicked={props.openDrawer}></Menu>
      <div style={{ height: '80%' }}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
      </nav>
    </header>
  );
};

export default Toolbar;
