import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './Toolbar.module.css';
import classes from './Toolbar.module.css';
const Toolbar = (props) => {
  return (
    <header className={styles.toolbar}>
      <div>MENU</div>
      <div style={{ height: '80%' }}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
};

export default Toolbar;
