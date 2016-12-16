import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from '../../style/about.css';

export default class About extends Component{
  componentDidUpdate(){
    ReactDom.findDOMNode(this).scrollTop = 0;
  }
  render(){
  return (
      <div className={styles.about}> 
        {
        !this.props.doneOpen ? (<div>LOADING ....</div>) : 
        (<div>
          Content here
        </div>)
        }
      </div>
    );
  }
}