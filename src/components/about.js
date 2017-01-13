import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from '../../style/about.css';
import Loader from './loader'

export default class About extends Component{
  componentDidUpdate(){
    ReactDom.findDOMNode(this).scrollTop = 0;
  }
  render(){
  return (
      <div className={styles.about}> 
        {
        !this.props.doneOpen ? (
          //LOADER IN CSS
          <Loader />
          ) : 
        (
        <div>
          <p>Daniel Rodriguez is an engineer Full Stack developer with experience in a variety of languages and frameworks.</p>

        </div>
        )
        }
      </div>
    );
  }
}