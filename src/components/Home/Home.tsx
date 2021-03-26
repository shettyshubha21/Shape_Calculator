import React from 'react';
import Add from '../Add';
import Details from '../Details';
import Header from '../Header';
import Steps from '../Steps';

import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.Home}>
            <Header />
            <div className={styles.body}>
                <Details />
                <Steps />
                <Add />
            </div>
        </div>
    );
};

export default Home;
