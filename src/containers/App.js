import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from './logo.svg';
import Data from '../components/Data';
import Tree from '../components/Tree';
import InputForm from '../components/InputForm';
import './App.css';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import getTree from '../getTreeOLD';

import * as dataActions from '../actions/DataActions'

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user //test
    const { addNode, deleteNode } = this.props.dataActions
    var srt1 = getTree(this.props.data) // (1)//test


    //console.log(srt1);//test
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Smirnov React-Redux App</h2>
        </div>
          <InputForm data={this.props.data} addNode={addNode}/>
          <Tree/>



        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Фамилия: { surname } </p>
        <p>Имя: { name } </p>
        <p>Возрас1т: { age } </p>

        <Data data={this.props.data} addNode={addNode} deleteNode={deleteNode}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    data: state.data.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)





/*this.props.data.push({
  id: 8,
  title: "Pictures - 8",
  parent: null })*/
