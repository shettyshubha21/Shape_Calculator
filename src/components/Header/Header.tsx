import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.border}>
                <h1 className={styles.heading}>Shape Calculator</h1>
            </div>
        </div>
    );
};

export default Header;
