import React from 'react';

import styles from './Details.module.scss';

const Details = () => {
    return (
        <div className={styles.Details}>
            <div className={styles.Details1}>
                <h1 className={styles.greet}>Welcome to Shape Calculator</h1>
                <h1 className={styles.imp}>
                    Shape Calculator is an interactive web application. To the
                    right you will find the 3 step application. Follow the
                    instructions in each step. Clicking cancel will take you
                    back to step 1. Enjoy!
                </h1>
                <p className={styles.description}>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                </p>
                <p className={styles.description}>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. The Big
                    Oxmox advised her not to do so, because there were thousands
                    of bad Commas.
                </p>
            </div>
        </div>
    );
};

export default Details;
