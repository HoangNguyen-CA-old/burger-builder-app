import React from 'react';

import styles from './BuildControl.module.css';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
