import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from './logo.svg';
import Data from '../components/Data';
import Tree from '../components/Tree';
import InputForm from '../components/InputForm';
import './App.css';
import GetTree from '../GetTreeNEW';

import * as dataActions from '../actions/DataActions'

class App extends Component {
  render() {
    const { addNode, deleteNode } = this.props.dataActions
    GetTree(this.props.data);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Smirnov React-Redux App</h2>
        </div>
          <InputForm data={this.props.data} addNode={addNode}/>
          <Tree data={this.props.data} deleteNode={deleteNode}/>
          <Data data={this.props.data}/>

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
