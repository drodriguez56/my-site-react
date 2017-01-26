import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Waypoint from 'react-waypoint';
import styles from '../../style/about.css';
import Loader from './loader';
import { SECTIONS } from '../resources/infoSections';


export default class About extends Component{
  constructor(props){
    super(props);
    console.log(SECTIONS)
    this.state = {imageUrl: SECTIONS[0].imageUrl , sectionIdx: 0, sections: SECTIONS }
  }
  componentDidUpdate(){
    !this.props.doneOpen ? ReactDom.findDOMNode(this).scrollTop = 0 : '';
  }
  componentWillReceiveProps(){
    !this.props.doneOpen ? this.setState({sectionIdx: 0, imageUrl: this.state.sections[0].imageUrl}) : '';
  }
  _handleWaypointLeave = (obj) => {
    let sectionIdx = this.state.sectionIdx;
    sectionIdx = obj.currentPosition == 'above' ? ( sectionIdx + 1 ) : ( sectionIdx <= 1 ? 0 : sectionIdx - 1 )
    this.setState({ sectionIdx, imageUrl: this.state.sections[sectionIdx].imageUrl });
  }

  renderSection = (section, idx) => {
    return(
        <div key={idx} className={styles.section} >
          <div className={styles.section}>
            <p className={styles.content}>{section.copy}</p>
          </div>
          <Waypoint
            onLeave={this._handleWaypointLeave}
          />
        </div>
      )
  }

  render(){
    const  sections = this.state.sections;
  return (
      <div className={styles.about}> 
        {
        !this.props.doneOpen ? (
          <Loader />
          ) :
        (
          <div className={styles.page}>
            { sections.map((section, idx) => this.renderSection(section, idx))  } 
            <div className={styles.lastSection}>
              <p className={styles.content}>Contact</p>
            </div>
            <div className={styles.box}>
              <img className={styles.image} src={this.state.imageUrl}/> 
            </div>
          </div>
        )
        }
      </div>
    );
  }
}