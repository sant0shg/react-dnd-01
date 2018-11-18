import React, { Component } from 'react';
import Source from './Source';
import Target from './Target';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      components: []
    }
    this.onDrop = this.onDrop.bind(this);
  }
  
  onDrop(component){
    const { components } = this.state;
    console.log(component)
    const newComponentsList = _.concat([],components, component)
    this.setState({
      components: newComponentsList
    })
  }

  render() {
    const { components } = this.state;
    console.log('state components ', components)
    return (
      <div className="App">
        <Source/>
        <Target onDrop={this.onDrop} components={components}/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
