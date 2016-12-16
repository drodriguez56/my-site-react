import React from 'react';
import styles from '../../style/navbar.css';
import { Link } from 'react-router';

export default (props) =>{
  console.log(props)
  return(
      <div className={styles.navMainMenu}>
        <ul className={styles.menuUl}>
          <li><Link onClick={props.toggleMenu} to='/about'>About Me</Link></li>
          <li><Link onClick={props.toggleMenu} to='/projects'>Projects</Link></li>
        </ul>
      </div>
    );
}
