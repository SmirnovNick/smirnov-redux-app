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
      this.props.addNode(parseInt(this.state.id),this.state.title,parseInt(this.state.parent));
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
          type='number'
          name='id'
          className='Form-element'
          onChange={this.handleChange.bind(this)}
          value={this.props.id}
        />
        <input
          placeholder="Parent"
          type='text'
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
