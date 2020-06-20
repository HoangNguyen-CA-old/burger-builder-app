import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          {...props.elementConfig}
          className={styles.InputElement}
          value={props.value}
        ></input>
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          className={styles.InputElement}
          value={props.value}
        ></textarea>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          className={styles.InputElement}
          value={props.value}
        ></input>
      );
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
