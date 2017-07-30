import React, { Component } from 'react'
import getTree from '../getTreeOLD';
import getList from '../getListOLD';

export default class Tree extends Component {

deleteNode(e){
  this.props.deleteNode(parseInt(e.target.id, 10))
}
  render() {

    return <div className='Tree'>
      <form onClick={this.deleteNode.bind(this)}>
      {getList(getTree(this.props.data))}
      </form>
    </div>
  }
}
