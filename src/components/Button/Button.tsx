import React from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from '../../interface';

const Button: React.FC<ButtonProps> = ({
  title,
  onClick = () => null,
  type,
}) => {
  return (
    <button type={type} onClick={onClick} className={styles.Button}>
      {title}
    </button>
  );
};

export default Button;
