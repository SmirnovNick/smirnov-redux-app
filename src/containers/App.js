import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user
    //const { data } = this.props.data // (1)

    var str = JSON.stringify(this.props.data).replace( /},{/g,'},\n{')
    console.log(str);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Smirnov React-Redux App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Фамилия: { surname } </p>
        <p>Имя: { name } </p>
        <p>Возрас1т: { age } </p>
        <pre className="Input-data">{ str }</pre>

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

export default connect(mapStateToProps)(App);






/*this.props.data.push({
  id: 8,
  title: "Pictures - 8",
  parent: null })*/
