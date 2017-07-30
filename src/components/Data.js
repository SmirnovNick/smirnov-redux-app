import React, { Component } from 'react'

export default class Data extends Component {



  addNode(e) {
  this.props.addNode(this.props.data.length,'title',null)
}
deleteNode(e) {
this.props.deleteNode(this.props.data.length - 1)
}
  render() {



    return <div>
        <button onClick={this.addNode.bind(this)}>ADD</button>
        <button onClick={this.deleteNode.bind(this)}>DELETE</button>
        <div className="Input-data-header">Входные данные:</div>
        <pre className="Input-data"><p>{ JSON.stringify(this.props.data).replace(/},{/g,'},\n{') }</p></pre>
    </div>
  }
}
