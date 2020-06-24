import React from 'react';

import styles from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  return (
    <ul className={styles.navigationItems}>
      <NavigationItem link='/'>Burger Builder</NavigationItem>
      {props.isAuthenticated ? (
        <>
          <NavigationItem link='/orders'>Orders</NavigationItem>
          <NavigationItem link='/logout'>Logout</NavigationItem>
        </>
      ) : (
        <NavigationItem link='/auth'>Authenticate</NavigationItem>
      )}
    </ul>
  );
};

export default NavigationItems;
