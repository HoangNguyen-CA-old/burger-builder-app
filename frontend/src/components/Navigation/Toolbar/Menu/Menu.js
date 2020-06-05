import React from 'react';

import styles from './Menu.module.css';
const Menu = (props) => {
  return (
    <div onClick={props.clicked} className={styles.menu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Menu;
