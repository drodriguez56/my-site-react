import React, { Component } from 'react';
import styles from '../../style/navbar.css';
import { Link } from 'react-router';
import { PROJECTS } from '../resources/projects';

export default class NavMainMenu extends Component{
  constructor(props){
    super(props);

    this.state ={ projects: PROJECTS }
  }

  renderProjects = (project)  =>{
    return (
        <a key={project.id} href={`/projects?p=${project.id}`}>
          <li>
            <div className={styles.details}>
              <div className={styles.number}>{`${project.id < 10 ? `0${project.id}` : project.id}`}</div>
              <div className={styles.innerDetail}>
                <p>{project.name}</p>
                {project.skills.map(skill => {return <div>{skill}</div>})}
              </div>
            </div>
            <div className={styles.projectImage}>
              <img src={project.imageUrl}/>
            </div>
          </li>
        </a>
      );
  }
  render(){
    return(
        <div className={styles.navMainMenu}>
          <ul className={styles.menuUl}>
            {this.state.projects.map(this.renderProjects)}
          </ul>
        </div>
    );
  }
}
