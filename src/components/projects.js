import React, { Component } from 'react';
import { PROJECTS } from '../resources/projects';

export default class Project extends Component {
  constructor(props){
    super(props);
    this.state = { activePoject: PROJECTS.filter((project)=>{ return project['id'] == this.props.params['id']})[0] }
  }
  render(){    
    return (
      <div>
      <p>{this.state.activePoject.name}</p>
      </div>
      );
  }
}