import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Topo from './Topo'
import Rodape from './Rodape'
import Taskboard from './Taskboard'

class App extends Component {
  render() {
    return (
      <div>
        <Topo />
        <Taskboard />
        <Rodape />
      </div>
    );
  }
}

export default App;
