import React from 'react';
import Label from '../Label';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.border}>
        <div className={styles.heading}>
          <Label type="heading">Shape Calculator</Label>
        </div>
      </div>
    </div>
  );
};

export default Header;
