import React from 'react';
import { Motion, spring } from 'react-motion';
import styles from '../../style/landing.css';
import FontAwesome from 'react-fontawesome';

export default () => {
  return (
    <div className={styles.landing}>
      <div className={styles.welcomeDiv}>
        <Motion defaultStyle={{x: 0, y:-50}} style={{x: spring(1), y: spring(0)}}>
          {({x, y}) => <div className={styles.animateDiv} style={{opacity:x, top:`${y}px`}}>
            <img className={styles.img} src='https://s3.amazonaws.com/www.danielrodriguez.io/vendor/img/drlogo.png'/>
            <div className={styles.logoUnderline}></div>
            <h1  className={styles.homeH1} >Full Stack Developer</h1>
            <FontAwesome name='map-marker' />
            <p className={styles.location}>New York City</p>
          </div>}
        </Motion>
      </div>
    </div>
  );
}