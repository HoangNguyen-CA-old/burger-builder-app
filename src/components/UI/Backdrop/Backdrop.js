import React from 'react';

import styles from './backdrop.module.css';

const Backdrop = (props) => {
  return props.show ? (
    <div className={styles.backdrop} onClick={props.clicked}></div>
  ) : (
    ''
  );
};

export default Backdrop;
