import React, { Component } from 'react'

export default class InputForm extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      id: props.data.length,
      title: "Untilted",
      parent: null
    };
  }


  handleSubmit (e) {

      let parent = (this.state.parent === null ? null : parseInt(this.state.parent, 10));
      this.props.addNode(parseInt(this.state.id, 10),this.state.title,parent);
      this.setState({
        id: this.props.data.length + 1,
        title: "Untilted",
        parent: null
      });

    }

  handleChange(e) {

    const target = e.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {

    return <div>
        <input
          placeholder="ID"

          name='id'
          className='Form-element'
          onChange={this.handleChange.bind(this)}
          value={this.state.id}
          readOnly
        />
        <input
          placeholder="Parent"
          type='number'
          name='parent'
          className='Form-element'
          onChange={this.handleChange.bind(this)}
          value={this.props.title}
        />
        <input
          placeholder="Title"
          type='text'
          name='title'
          className='Form-element'
          onChange={this.handleChange.bind(this)}
          value={this.props.parent}
        />
        <button className='Form-element' onClick={this.handleSubmit.bind(this)}>
          Добавить узел
        </button>

    </div>
  }
}
