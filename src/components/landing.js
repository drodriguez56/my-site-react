import React from 'react';
import styles from '../../style/landing.css';

export default () => {
  return (
    <div className={styles.landing}>
      <div className={styles.darckBack}></div>
      <img src='https://s3.amazonaws.com/www.danielrodriguez.io/vendor/img/logo-personal.png'/> 
      <h1>Full Stack Developer</h1>
    </div>
  );
}