import React from 'react';

import styles from './Input.module.scss';
import {InputProps} from '../../interface';

const Input: React.FC<InputProps> = ({type = "number", ...props}) => {
  return <input className={styles.Input} value={props.value} placeholder={props.placeholder} type={type} {...props}></input>;
};

export default Input;
