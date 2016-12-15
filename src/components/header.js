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
        <Motion style={{x: spring(open ? 100 : 0)}}>
          {({x}) => 
            <div className={styles.mainMenu} style={{
                    WebkitTransform: `translate3d(0, ${x}%, 0)`,
                    transform: `translate3d(0, ${x}%, 0)`,
                  }}>
              <NavMenu />
            </div>}
        </Motion>
      </div> 
      );
  } 
}