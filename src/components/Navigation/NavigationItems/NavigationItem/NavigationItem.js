import React from 'react';

import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
  return (
    <li className={styles.navigationItem}>
      <a href={props.link} className={props.active ? styles.active : ''}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
