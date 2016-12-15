import React, { Component } from 'react';
import Header from './header';
import styles from '../../style/global.css'

export default class App extends Component {
  render(){  
    return(
        <div className={styles.app}>
          <Header />
          {this.props.children}
        </div>
      );
  }
}