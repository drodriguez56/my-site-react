import React from 'react';
import styles from '../../style/navbar.css'

export default () =>{
  return(
      <div>
        <ul className={styles.menuUl}>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    );
}
