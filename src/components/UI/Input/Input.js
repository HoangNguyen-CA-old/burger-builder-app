import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [styles.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          {...props.elementConfig}
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        ></input>
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        ></textarea>
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
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
