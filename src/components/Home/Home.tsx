import React from 'react';
import Add from '../Add';
import Details from '../Details';
import Header from '../Header';
import Step1 from '../Step1';

import styles from './Home.module.scss';

const Home = () => {
return (
<div className={styles.Home }>
   <Header/>
   <div className={styles.body}>
        <Details/>
        <Step1/>
        <Add/>
   </div>
</div>
);
};




export default Home;