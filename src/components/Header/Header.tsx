import React from 'react';
import Image from '../Image';
import Label from '../Label';

import styles from './Header.module.scss';
import src from '../../images/images.jpeg';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.border}>
        <Image src={src} alt="header Img"></Image>
        <div className={styles.heading}>
          <Label type="heading">Shape Calculator</Label>
        </div>
      </div>
    </div>
  );
};

export default Header;
