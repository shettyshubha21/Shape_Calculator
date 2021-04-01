import React from 'react';
import Label from '../Label';

import styles from './Details.module.scss';

const Details = () => {
  return (
    <div className={styles.Details}>
      <div className={styles.Details1}>
        <Label type="sub-heading">Welcome to Shape Calculator</Label>
        <Label type="paragraph" weight={500}>
          Shape Calculator is an interactive web application. To the right you
          will find the 3 step application. Follow the instructions in each
          step. Clicking cancel will take you back to step 1. Enjoy!
        </Label>
        <Label type="paragraph" size={'16px'}>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </Label>
        <Label type="paragraph" size={'16px'}>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do so, because there were
          thousands of bad Commas.
        </Label>
      </div>
    </div>
  );
};

export default Details;
