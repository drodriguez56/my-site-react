import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from '../../style/projects.css';
import { PROJECTS } from '../resources/projects';
import { Link } from 'react-router';

export default class Project extends Component {
  constructor(props){
    super(props);
    this.state = { activePoject: PROJECTS.filter((project)=>{ return project['id'] == this.props.params['id']})[0] }
  }
  componentDidUpdate(){
    ReactDom.findDOMNode(this).scrollTop = 0;
    console.log(ReactDom.findDOMNode(this))
  }
  componentWillReceiveProps(newProps){
    this.props.params['id'] != newProps.params['id'] ? this.setState({activePoject: PROJECTS.filter((project)=>{ return project['id'] == newProps.params['id']})[0]}): null
  }
  renderImage = () =>{
    return <div className={styles.tableImage}>Image</div>
  }
  render(){  
    let project = this.state.activePoject;  
    return (
      <div className={styles.project}>
        <div className={styles.mainSection}>
           <img src={project.imageUrl}/>
        </div>
        <div>{project.description}</div>
        {project.video ? <iframe className={styles.iframe} src={project.video}></iframe> : null}
        {project.images ? <div className={styles.table}>{project.images.map(this.renderImage)}</div> : null}
        <div className={styles.backHome}><Link className={styles.backLink} to='/'>Back Home</Link></div>
      </div>
      );
  }
}