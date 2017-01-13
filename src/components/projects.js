import React, { Component } from 'react';
import { PROJECTS } from '../resources/projects';
import { Link } from 'react-router';

export default class Project extends Component {
  constructor(props){
    super(props);
    this.state = { activePoject: PROJECTS.filter((project)=>{ return project['id'] == this.props.location.query.p})[0] }
  }
  render(){    
    return (
      <div>
      <p>{this.state.activePoject.name}</p>
        <Link to='/'>Back home</Link>
      </div>
      );
  }
}