import React from 'react';

import styles from './Label.module.scss';
import { LabelProps } from '../../interface';
const Label: React.FC<LabelProps> = ({
  type = 'default',
  children,
  ...props
}) => {
  const style = {
    color: props.color,
    fontSize: props.size,
    fontWeight: props.weight,
  };

  const className = [styles.Text, styles[type]].join(' ');

  return (
    <h1 className={className} style={style}>
      {children}
    </h1>
  );
};

export default Label;
