import React, { Component } from 'react';
import styles from '../../style/navbar.css';
import { Motion, spring } from 'react-motion';
import NavMainMenu from './nav_menu';

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = { mainMenuOpen: false, infoOpen: false }
  }

  toggleMenu = () => {
    this.setState({ mainMenuOpen: !this.state.mainMenuOpen })
  }
  toggleInfo = () => {
    this.setState({ infoOpen: !this.state.infoOpen })
  }

  render(){
  const { mainMenuOpen, infoOpen } = this.state;
    return (
      <div>
          <div className={styles.closeX} onClick={this.toggleMenu} >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
          </div>
          <div onClick={this.toggleInfo} className={styles.info}>info</div>
        <div className={styles.navLeft}>
        </div>
        <Motion style={{y: spring(mainMenuOpen ? 100 : 0)}}>
          {({y}) => 
            <div className={styles.mainMenu} style={{
                    WebkitTransform: `translate3d(0, ${y}%, 0)`,
                    transform: `translate3d(0, ${y}%, 0)`,
                  }}>
              <NavMainMenu toggleMenu={this.toggleMenu}/>
            </div>}
        </Motion>
        <Motion style={{x: spring(infoOpen ? -100 : 0)}}>
          {({x}) => 
            <div className={styles.infoMenu} style={{
                    WebkitTransform: `translate3d(${x}%, 0, 0)`,
                    transform: `translate3d(${x}%, 0, 0)`,
                  }}>
            </div>}
        </Motion>
      </div> 
      );
  } 
}