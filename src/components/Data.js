import React, { Component } from 'react'

export default class Data extends Component {

  render() {
    return <div>
        <div className="Input-data-header">Входные данные:</div>
        <pre className="Input-data"><p>{ JSON.stringify(this.props.data).replace(/},{/g,'},\n{') }</p></pre>
    </div>
  }
}
