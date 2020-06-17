import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';

import styles from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={styles.logo}>
      <img src={burgerLogo} alt='LOGO' />
    </div>
  );
};

export default Logo;
