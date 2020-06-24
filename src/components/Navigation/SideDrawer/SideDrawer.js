import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import styles from './SideDrawer.module.css';

const SideDrawer = (props) => {
  let attachedStyles = [styles.sideDrawer, styles.close];
  if (props.open) {
    attachedStyles = [styles.sideDrawer, styles.open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedStyles.join(' ')}>
        <div style={{ height: '11%', marginBottom: '32px' }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
