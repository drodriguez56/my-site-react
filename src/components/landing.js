import React from 'react';
import styles from '../../style/landing.css';

export default () => {
  return (
    <div className={styles.landing}>
      <div className={styles.darckBack}></div>
      <div className={styles.welcomeDiv}>
        <h1 className={styles.homeH1} >Full Stack Developer</h1>
      </div>
    </div>
  );
}