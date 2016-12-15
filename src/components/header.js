import React, { Component } from 'react';
import styles from '../../style/navbar.css';
import { Motion, spring } from 'react-motion';
import NavMenu from './nav_menu';

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = { open: false}
  }

  toggleMenu = () => {
    console.log(this.state)
    this.setState({ open: !this.state.open, render: true })
  }

  render(){
  const { open } = this.state;
    return (
      <div>
          <div className={styles.closeX} onClick={this.toggleMenu} >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
          </div>
        <div className={styles.navLeft}>
        </div>
        <Motion defaultStyle={{ y: open ? -100 : 0 }} style={{y: open ? spring(0): spring(-100)}}>
          {value => 
            <div className={styles.mainMenu} style={open ? {'top':`${value.y}%`} : {}}>
              <NavMenu />
            </div>}
        </Motion>
      </div> 
      );
  } 
}